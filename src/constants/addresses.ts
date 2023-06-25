import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';
import { AddressName, AddressNames } from '../enums/addressName';

type AddressMapping = {
  [addressValue in AddressNames]: PartialRecord<ChainId, string>;
};

// TODO: I think we can totally remove this and merge it into the TOKENS?  So here are some overlap here, really we want
// tokens to be in tokens.ts and other contracts are fine to be in here...
export const ADDRESSES: AddressMapping = {
  // to look for BNT Converter addresses use this contract: 0xC0205e203F423Bcd8B2a4d6f8C8A154b0Aa60F19
  [AddressName.ICHI_BNT]: { [ChainId.Mainnet]: '0x4a2F0Ca5E03B2cF81AebD936328CF2085037b63B' },
  [AddressName.ICHI_BNT_V3]: { [ChainId.Mainnet]: '0x36FAbE4cAeF8c190550b6f93c306A5644E7dCef6' },
  [AddressName.ICHIBPT]: { [ChainId.Mainnet]: '0x96855eDEfC3Ad2d9eFD0421F301d1324e1e93a52' },
  // TODO: do we still need these ETH addresses?
  [AddressName.ETH]: {
    [ChainId.Mainnet]: '0x0000000000000000000000000000000000000000',
    [ChainId.Polygon]: '0x0000000000000000000000000000000000000000',
    [ChainId.Arbitrum]: '0x0000000000000000000000000000000000000000',
    [ChainId.Avalanche]: '0x0000000000000000000000000000000000000000',
    [ChainId.Mumbai]: '0x0000000000000000000000000000000000000000',
  },
  [AddressName.ALLY]: { [ChainId.Mainnet]: '0x1aa1e61369874bae3444A8Ef6528d6b13D6952EF' },
  [AddressName.FARMING_V1]: { [ChainId.Mainnet]: '0xcC50953A743B9CE382f423E37b07Efa6F9d9B000' },
  [AddressName.FARMING_V2]: {
    [ChainId.Mainnet]: '0x275dFE03bc036257Cd0a713EE819Dbd4529739c8',
    [ChainId.Polygon]: '0x2fb24195c965B4a0cDfc27DD5C85eC1A46d7A931',
    [ChainId.Mumbai]: '0x9c1c486d007B65D5cbaE45811a41E540d304ac9D',
  },
  [AddressName.FARMING_V3]: { [ChainId.Mainnet]: '0x4B162306eE680Bf440541c3E5C70c553f632C8aA' },
  [AddressName.ICHI_COMMUNITY_GNOSIS]: { [ChainId.Mainnet]: '0x8f3c97DdC88D7A75b8c3f872b525B30932D3014c' },
  [AddressName.ICHI_V2_GNOSIS]: { [ChainId.Mainnet]: '0x94A5980d5634533551dcB7108322f6C4f2a80E6B' },
  [AddressName.UNISWAP_V3_POSITIONS]: {
    [ChainId.Mainnet]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
    [ChainId.Polygon]: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
  [AddressName._1INCH_ICHI_LP]: { [ChainId.Mainnet]: '0x1dcE26F543E591c27717e25294AEbbF59AD9f3a5' },
  [AddressName._1INCH_STAKING]: { [ChainId.Mainnet]: '0x0F85A912448279111694F4Ba4F85dC641c54b594' },
  [AddressName.ST1INCH]: { [ChainId.Mainnet]: '0xA0446D8804611944F1B527eCD37d7dcbE442caba' },
  [AddressName.BMI_STAKING]: { [ChainId.Mainnet]: '0x6771Fd8968488Eb590Dff1730FE099c0eFA415bF' },
  // risk_harbor: "0x635F549a5502CCF73b97A6df2C3644ed804b250d",
  [AddressName.RARI_POOL_LENS]: { [ChainId.Mainnet]: '0x6Dc585Ad66A10214Ef0502492B0CC02F0e836eec' },
  [AddressName.RARI_POOL_LENS_SECONDARY]: { [ChainId.Mainnet]: '0xc76190E04012f26A364228Cfc41690429C44165d' },
  [AddressName.RARI_ONEUNI_TOKEN]: { [ChainId.Mainnet]: '0x342AC2C024f214a711356F48326614E1d8Dd0420' },
  [AddressName.RARI_ICHI_VAULT_LP_TOKEN]: { [ChainId.Mainnet]: '0x78DcC36DC532b0dEF7b53a56A91610C44DD09444' },
  [AddressName.RARI_ONEBTC_VAULT_LP_TOKEN]: { [ChainId.Mainnet]: '0x90313731C407376535ac1bFae14D45C7f964edeE' },
  [AddressName.RARI_COMPTROLLER]: { [ChainId.Mainnet]: '0xAbDFCdb1503d89D9a6fFE052a526d7A41f5b76D6' },
  [AddressName.RARI_ONEUNI]: { [ChainId.Mainnet]: '0x342AC2C024f214a711356F48326614E1d8Dd0420' },
  [AddressName.RARI_ONEBTC]: { [ChainId.Mainnet]: '0x43854261848F67b04a6bf9E6fC757e0F8993fc81' },
  [AddressName.RARI_USDC]: { [ChainId.Mainnet]: '0xecE2c0aA6291e3f1222B6f056596dfE0E81039b9' },
  [AddressName.RARI_WBTC]: { [ChainId.Mainnet]: '0x5933F2109652C019CEab70dabf4Bc9E0E29873F5' },
  [AddressName.GSR]: { [ChainId.Mainnet]: '0x93ab6342d64d717Ac4B6468240BBa4915BDbB4B3' },
  // BSC primarily
  [AddressName.GNOSIS]: { [ChainId.Bsc]: '0xdbB0DfcB3601e15541c072B2a866C0D53D6c6627' },
  [AddressName.USDC]: { [ChainId.Bsc]: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d' },
  [AddressName.ONE_DODO]: { [ChainId.Bsc]: '0x2c30b4cb4b3001afa5b8c43c5a7ca548067562a0' },
  [AddressName.DLP]: { [ChainId.Bsc]: '0x018e41228b1ebc2f81897150877edbb682272c64' },
  // OneToken Factories
  [AddressName.ONE_TOKEN_FACTORY]: { 
    [ChainId.Mainnet]: '0xd0092632b9ac5a7856664eec1abb6e3403a6a36a', 
    [ChainId.Polygon]: '0x101eB16BdbA37979a771c86e1CAAfbaDbABfc879' 
  },
  // Keeper Registry
  [AddressName.KEEPER_REGISTRY]: {
    [ChainId.Mainnet]: '0x02777053d6764996e594c3E88AF1D58D5363a2e6',
    [ChainId.Polygon]: '0x02777053d6764996e594c3E88AF1D58D5363a2e6',
    [ChainId.Arbitrum]: '0x75c0530885F385721fddA23C539AF3701d6183D4',
    [ChainId.Avalanche]: '0x02777053d6764996e594c3E88AF1D58D5363a2e6',
  },

};

export function getAddress(addressName: AddressName, chainId: ChainId): string {
  const address = ADDRESSES[addressName] != null ? ADDRESSES[addressName][chainId] : undefined;
  if (!address) {
    throw new Error(`Could not find ${addressName} on ${chainId}`);
  }
  return address;
}
