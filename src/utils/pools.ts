import { Pools } from '../constants/pools';
import { ChainId } from '../crypto/networks';
import { getAddress } from '../constants/addresses';
import { AddressName } from '../enums/addressName';
import { getToken, getTokens, TOKENS } from '../constants/tokens';
import { getProvider } from '../crypto/providers';
import { TokenName } from '../enums/tokenName';
import { VaultName } from '../enums/vaultName';
import { OneTokenTemplate } from '../models/oneTokenTemplate';
import { Contracts, getErc20Contract } from './contracts';
import {
  asBalancerPool,
  asDodoLiquidityPool,
  asGenericPool,
  asIchiBnt,
  asIchiVault
} from './contractGuards';
import {
  ArbitrumPoolNumbers,
  ArbitrumPoolNumberValues,
  AvalanchePoolNumbers,
  AvalanchePoolNumberValues,
  BscPoolNumbers,
  BscPoolNumberValues,
  MainnetPoolNumbers,
  MainnetPoolNumberValues,
  MumbaiPoolNumbers,
  MumbaiPoolNumberValues,
  PolygonPoolNumbers,
  PolygonPoolNumberValues,
  PoolNumberValues
} from '../enums/poolNumber';
import { getVault } from '../constants/vaults';

export function isFarmV1(pid: PoolNumberValues): boolean {
  return pid >= 0 && pid < 1000;
}

export function isFarmV2(pid: PoolNumberValues): boolean {
  return pid >= 1000 && pid < 4000;
}

export function isOnChain(pid: PoolNumberValues, chainId: ChainId): boolean {
  let nums;
  switch (chainId) {
    case ChainId.Arbitrum:
      nums = ArbitrumPoolNumbers;
      break;
    case ChainId.Avalanche:
      nums = AvalanchePoolNumbers;
      break;
    case ChainId.Bsc:
      nums = BscPoolNumbers;
      break;
    case ChainId.Polygon:
      nums = PolygonPoolNumbers;
      break;
    case ChainId.Mumbai:
      nums = MumbaiPoolNumbers;
      break;
    default:
      nums = MainnetPoolNumbers;
      break;
  }
  return Object.values(nums).includes(pid);
}

export function isFarmV2Polygon(pid: PoolNumberValues): boolean {
  return pid >= 4000 && pid < 5000;
}

export function isFarmV2Mumbai(pid: PoolNumberValues): boolean {
  return pid >= 6000 && pid < 7000;
}

export function isFarmGeneric(pid: PoolNumberValues): boolean {
  return pid >= 20000 && pid < 30000;
}

export function isFarmExternal(pid: PoolNumberValues): boolean {
  return pid >= 10000 && pid < 20000;
}

export function isUnretired(pid: PoolNumberValues): boolean {
  return (
    Pools.UNRETIRED_POOLS[ChainId.Mainnet].includes(pid as MainnetPoolNumberValues) ||
    Pools.UNRETIRED_POOLS[ChainId.Arbitrum].includes(pid as ArbitrumPoolNumberValues) ||
    Pools.UNRETIRED_POOLS[ChainId.Avalanche].includes(pid as AvalanchePoolNumberValues) ||
    Pools.UNRETIRED_POOLS[ChainId.Bsc].includes(pid as BscPoolNumberValues) ||
    Pools.UNRETIRED_POOLS[ChainId.Polygon].includes(pid as PolygonPoolNumberValues) ||
    Pools.UNRETIRED_POOLS[ChainId.Mumbai].includes(pid as MumbaiPoolNumberValues)
  );
}

export function adjustedPid(pid: PoolNumberValues): number {
  if (pid >= 0 && pid < 1000) return pid;
  if (pid >= 1000 && pid < 2000) return pid - 1000;
  if (pid >= 4000 && pid < 5000) return pid - 4000;
  if (pid >= 5000 && pid < 6000) return pid - 5000;
  if (pid >= 6000 && pid < 7000) return pid - 6000;
  if (pid >= 10000 && pid < 20000) return pid - 10000;
  if (pid >= 20000 && pid < 30000) return pid - 20000;

  return pid;
}

export function adjustedPidString(pid: number): string {
  return Number(adjustedPid(pid)).toString();
}

export async function getPoolTokens(poolContract: Contracts, chainId: ChainId, opts?: { poolId?: PoolNumberValues }) {
  try {
    let isBalancerPool =
      opts?.poolId != null &&
      (Pools.BALANCER_POOLS[chainId].includes(opts.poolId));
    let isBancorPoolV2 = opts?.poolId != null && Pools.BANCOR_POOLS_V2[chainId].includes(opts.poolId);

    let token0 = '';
    let token1 = '';

    if (isBancorPoolV2) {
      // exception for Bancor pools, getting proxy (pool owner) contract
      let tokens = await asIchiBnt(poolContract).reserveTokens();
      token0 = tokens[0].toLowerCase();
      token1 = tokens[1].toLowerCase();
    } else if (isBalancerPool) {
      // exception for Balancer pools
      let tokens = await asBalancerPool(poolContract).getCurrentTokens();
      token0 = tokens[0].toLowerCase();
      token1 = tokens[1].toLowerCase();
    } else {
      // everything else
      token0 = await asIchiVault(poolContract).token0();
      token1 = await asIchiVault(poolContract).token1();
      token0 = token0.toLowerCase();
      token1 = token1.toLowerCase();
    }

    return {
      token0: token0,
      token1: token1
    };
  } catch (e) {
    console.error(`Error getting pool tokens for poolId: ${opts?.poolId} on chainId ${chainId}`);
    throw e;
  }
}

export async function getPoolReserves(poolContract: Contracts, chainId: ChainId, opts?: { poolId?: PoolNumberValues }) {
  try {
    let isBancorPoolV2 = opts?.poolId != null && Pools.BANCOR_POOLS_V2[chainId].includes(opts.poolId);
    let isVault =
      opts?.poolId != null &&
      (Pools.ACTIVE_VAULTS[chainId].includes(opts.poolId) || Pools.UNDERLYING_VAULTS[chainId].includes(opts.poolId));
    let isDodoPool = opts?.poolId != null && Pools.DODO_POOLS[chainId].includes(opts.poolId);

    if (isBancorPoolV2) {
      // exception for Bancor pool, getting proxy (pool owner) contract
      let reserveBalances = await asIchiBnt(poolContract).reserveBalances();
      return {
        _reserve0: Number(reserveBalances[0]),
        _reserve1: Number(reserveBalances[1])
      };
    } else if (isVault) {
      const ichiVaultInstance = asIchiVault(poolContract);

      let exception = false;
      if (chainId == ChainId.Mainnet) {
        const exceptionAddress = getVault(VaultName.ICHI, ChainId.Mainnet).address;
        if (ichiVaultInstance.address == exceptionAddress) {
          const oneUniAddress = getToken(TokenName.ONE_UNI, chainId).address;
          const provider = await getProvider(ChainId.Mainnet);
          if (!provider) {
            throw Error('Could not connect with provider');
          }
          let oneUniTokenContract = getErc20Contract(oneUniAddress, provider);

          let [reserveBalances, contractBalance] = await Promise.all([
            ichiVaultInstance.getBasePosition(),
            oneUniTokenContract.balanceOf(exceptionAddress)
          ]);

          exception = true;
          
          return {
            _reserve0: Number(reserveBalances.amount0) + Number(contractBalance),
            _reserve1: Number(reserveBalances.amount1)
          };
        }
      }
      if (!exception) {
        // All other vaults
        let reserveBalances = await ichiVaultInstance.getTotalAmounts();
        return {
          _reserve0: Number(reserveBalances.total0),
          _reserve1: Number(reserveBalances.total1)
        };
      } else {
        // this should never get invoked
        return {
          _reserve0: 0,
          _reserve1: 0
        };
      }
    } else if (isDodoPool) {
      // vaults
      let reserveBalances = await asDodoLiquidityPool(poolContract).getVaultReserve();
      return {
        _reserve0: Number(reserveBalances.baseReserve),
        _reserve1: Number(reserveBalances.quoteReserve)
      };
    } else {
      // everything else
      let reserveBalances = await asGenericPool(poolContract).getReserves();
      return {
        _reserve0: Number(reserveBalances._reserve0),
        _reserve1: Number(reserveBalances._reserve1)
      };
    }
  } catch (e) {
    console.error(`Error getting the pool reserves`, e);
    throw e;
  }
}

export async function getTokenData(tokenAddress: string, chainId: ChainId) {
  try {
    let tokenSymbol = '';
    let tokenDecimals = 0;

    if (tokenAddress === getAddress(AddressName.ETH, chainId)) {
      // special case for ETH
      tokenDecimals = 18;
      tokenSymbol = 'ETH';
    } else {
      for (const tkn of getTokens(chainId)) {
        if (tkn.address.toLowerCase() == tokenAddress.toLowerCase()) {
          return {
            symbol: tkn.tokenName,
            decimals: tkn.decimals
          };
        }
      }
      const provider = await getProvider(ChainId.Mainnet);
      if (!provider) {
        throw Error('Could not connect with provider');
      }
      let tokenContract = getErc20Contract(tokenAddress, provider);

      tokenSymbol = await tokenContract.symbol();
      tokenDecimals = await tokenContract.decimals();
    }

    return {
      symbol: tokenSymbol,
      decimals: tokenDecimals
    };
  } catch (e) {
    console.error(`Error getting token data`, e);
    throw e;
  }
}

// Mainnet
export const getOneTokenAttributes = function (tokenName: TokenName, chainId: ChainId): OneTokenTemplate {
  const token = getToken(tokenName, chainId);

  if (!token) {
    throw new Error(`Could not find token with name ${tokenName} on ${chainId}`);
  }

  let template: OneTokenTemplate = {
    address: token.address,
    decimals: token.decimals,
    strategy: token.strategy,
    aux_strategy: token.auxStrategy,
    ally_swap: token.allySwap ? token.allySwap : '',
    tradeUrl: token.tradeUrl,
    stimulus_address: '',
    stimulus_name: token.stimulusName,
    stimulus_display_name: token.stimulusDisplayName,
    stimulus_decimals: 18,
    abi_type: 'ONETOKEN',
    base_name: tokenName,
    collateral_name: TokenName.USDC,
    isV2: token.isV2,
    ichiVault: {
      address: token.ichiVault ? token.ichiVault.address : '',
      farm: token.ichiVault ? token.ichiVault.farm : 0,
      externalFarm: token.ichiVault ? token.ichiVault.externalFarm : '',
      scarceTokenName: token.ichiVault ? token.ichiVault.scarceTokenName : '',
      scarceTokenDecimals: token.ichiVault ? token.ichiVault.scarceTokenDecimals : 18,
      scarceToken: token.ichiVault ? token.ichiVault.scarceToken : ''
    },
    collateralToken: getToken(TokenName.USDC, chainId)
  };

  if (tokenName == TokenName.ONE_GIV) {
    template.collateralToken = getToken(TokenName.DAI, chainId);
  }
  if (tokenName == TokenName.ONE_BTC) {
    template.stimulus_decimals = 8;
    template.display_name = 'oneBTC';
  }
  if (tokenName == TokenName.ONE_VBTC) {
    (template.abi_type = 'ONEETH'), (template.base_name = TokenName.VBTC);
  }
  if (tokenName == TokenName.ONE_WING) {
    template.stimulus_decimals = 9;
  }
  if (tokenName == TokenName.ONE_ETH) {
    (template.abi_type = 'ONEETH'), (template.base_name = TokenName.ETH);
  }
  if (tokenName == TokenName.ONE_LINK) {
    (template.abi_type = 'ONELINK'), (template.base_name = TokenName.LINK);
  }

  // TODO: I assume the stimulus token is always on the same networ
  const stimulusToken = getToken(template.stimulus_name as TokenName, chainId);
  template.stimulus_address = stimulusToken.address;

  return template;
};

export async function getTotalSupply(poolContract: Contracts) {
  try {
    const tLP = await asGenericPool(poolContract).totalSupply();
    return tLP.toString();
  } catch (e) {
    console.error(`Could not get total supply`, e);
    throw e;
  }
}
