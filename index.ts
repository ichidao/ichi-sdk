export { getProvider } from './src/crypto/providers';
export { ChainId } from './src/crypto/networks';
export { EnvUtils } from './src/utils/env';

// External APIs
export { CoinGeckoPrice, CoinGeckoPriceResponse, CoinGeckoTokenInfoResponse } from './src/models/coinGecko';
export { PlatformData, QuotePriceData, QuoteData, CoinMarketCapTokenInfo, CoinMarketCapTokenInfoResponse } from './src/models/coinMarketCap';
export { lookUpTokenPrices, getTokenPrice, getTokenInfo } from './src/external/coinGecko';
export { getTokenPriceFromCoinMarketCap, getTokenInfoFromCoinMarketCap } from './src/external/coinMarketCap';
export { getDebankPortfolio } from './src/external/debank';
export { get1InchPools } from './src/external/oneInch';
export { getBancorV3Pools } from './src/external/bancor';

// Number utils
export { bnToNumberWithoutDecimals } from './src/utils/number';

// Token Utils
export { isOneToken, getTokenMetrics, tokenNameWithChainPrefix } from './src/utils/token';

// Promise Utils
export { alwaysResolve } from './src/utils/promises';

// Vault utils
export { getPrice, getBarShift, getRebalanceTicks } from './src/utils/vault';
export {
  isFarmV1,
  isFarmV2,
  adjustedPid,
  isUnretired,
  isFarmGeneric,
  isFarmExternal,
  isFarmV2Mumbai,
  isFarmV2Polygon,
  isOnChain,
  adjustedPidString,
  getPoolTokens,
  getPoolReserves,
  getTokenData,
  getOneTokenAttributes,
  getTotalSupply
} from './src/utils/pools';

// Exchange Utils
export { getExchangeName } from './src/utils/exchange';

// Contract Factories
export * from './src/generated/index';
export {
  Contracts,
  FarmingContracts,
  getContract,
  getContractByAddress,
  getBalancerPoolContract,
  getBalancerSmartLpContract,
  getGenericPoolContract,
  getIchiBntContract,
  getIchiVaultContract,
  getIchiContract,
  getAllyContract,
  getErc20Contract,
  getOneTokenV1Contract,
  getFarmingV1Contract,
  getFarmingV2Contract,
  getGenericFarmingV2Contract,
  getUniswapV3PositionsContract,
  getUniswapV3PoolContract,
  getAlgebraPoolContract,
  getUniswapV3FactoryContract,
  getIchiBntV3Contract,
  getDodoLiquidityPoolContract,
  getRariPoolContract,
  getRariPoolLensContract,
  getRariPoolLensSecondaryContract,
  getDodoFarmContract,
  getBmiStakingContract,
  get1InchStakingContract,
  getCommonOracleContract,
  getIchiOracleAggregatorContract,
  getOneTokenFactoryContract,
  getXIchiContract,
} from './src/utils/contracts';
export {
  isErc20,
  asErc20,
  isIchi,
  asIchi,
  isIchiVault,
  asIchiVault,
  isIchiBnt,
  asIchiBnt,
  isOneEth,
  asOneEth,
  isOneLink,
  asOneLink,
  isOneTokenV1,
  asOneTokenV1,
  isBalancerPool,
  asBalancerPool,
  isGenericPool,
  asGenericPool,
  isStablecoinV2,
  asStablecoinV2,
  asFarmingV1,
  asFarmingV2,
  asGenericFarmingV2
} from './src/utils/contractGuards';

// Types
export { Optional } from './src/types/optional';
export { PartialRecord } from './src/types/common';

// Models
export { Token } from './src/models/token';
export { Vault } from './src/models/vault';
export { Pool, PoolLabel, PoolRecord } from './src/models/pool';
export { OneTokenTemplate } from './src/models/oneTokenTemplate';
export { VerboseTransaction } from './src/models/verboseTransaction';
export { DistilledTransaction } from './src/models/distilledTransaction';

// Enums
export { MainnetPoolNumbers, PolygonPoolNumbers, MumbaiPoolNumbers, ArbitrumPoolNumbers, AvalanchePoolNumbers } from './src/enums/poolNumber';
export { PoolName, PoolNames } from './src/enums/poolName';
export { AddressName, AddressNames } from './src/enums/addressName';
export { TokenName, TokenNames } from './src/enums/tokenName';
export { VaultName, VaultNames } from './src/enums/vaultName';
export { OracleName, OracleNames } from './src/enums/oracleName';
export { TreasuryName, TreasuryNames } from './src/enums/treasuryName';
export { DebankProtocolName, DebankProtocolNames, DebankProtocalValues } from './src/enums/debankProtocolName';
export { PoolGroupName } from './src/enums/poolManagementName';

// Constants
export { Apis } from './src/constants/apis';
export { getToken, getTokens, getOneTokens, getUniswapToken } from './src/constants/tokens'; // TOKENS,
export { getAllOneTokenOracles, getOneTokenOracles, getOracleAddress } from './src/constants/oracles'; // TOKENS,
export { getVault, getVaults } from './src/constants/vaults'; // VAULTS,
export { PoolMapping, getPool, getPools, Pools } from './src/constants/pools';
export {
  PoolLabels,
  getPoolLabel,
  getMainnetPoolLabel,
  getArbitrumPoolLabel,
  getAvalanchePoolLabel,
  getBscPoolLabel,
  getPolygonPoolLabel,
  getMumbaiPoolLabel
} from './src/constants/poolLabels';
export { TreasuryManagement, getTreasuries, getLegacyTreasuries } from './src/constants/treasuries';
export { getAddress } from './src/constants/addresses';
export { BlocksPerDay, getBlocksPerDay } from './src/constants/blocksPerDay';

// Prices
export {
  getXICHIPrice,
  getVBTCPrice,
  getMemberTokenPrice,
  getStimulusUSDPrice,
  getStimulusOraclePrice
} from './src/crypto/prices';
