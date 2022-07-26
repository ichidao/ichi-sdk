import { TokenName } from '../enums/tokenName';
import { PoolLabel } from '../models/pool';
// import { PartialRecord } from '../types/common';
import { ADDRESSES } from './addresses';
import { AddressName } from '../enums/addressName';
import { getToken } from './tokens';
import { Optional } from '../types/optional';
import {
  KovanPoolNumbers,
  MainnetPoolNumbers,
  MumbaiPoolNumbers,
  PoolNumberValues,
  KovanPoolNumberValues,
  MainnetPoolNumberValues,
  MumbaiPoolNumberValues,
  PolygonPoolNumberValues,
  PolygonPoolNumbers
} from '../enums/poolNumber';
import { ChainId } from '../crypto/networks';
import { PartialRecord } from '../types/common';
import { VaultName, VaultTableName } from '../enums/vaultName';

// type TPoolLabels = PartialRecord<PoolNumber, PartialRecord<ChainId, PoolLabel>>;
// TODO: IMO these should be Record not PartialRecord here, but there are values missing, which we should probably fix
type TPoolLabels = {
  [ChainId.Mainnet]: PartialRecord<MainnetPoolNumberValues, PoolLabel>;
  [ChainId.Kovan]: PartialRecord<KovanPoolNumberValues, PoolLabel>;
  [ChainId.Polygon]: PartialRecord<PolygonPoolNumberValues, PoolLabel>;
  [ChainId.Mumbai]: PartialRecord<MumbaiPoolNumberValues, PoolLabel>;
};

export const PoolLabels: TPoolLabels = {
  [ChainId.Mainnet]: {
    [MainnetPoolNumbers.ICHI_1INCH]: {
      name: 'ICHI-1inch',
      poolNumber: MainnetPoolNumbers.ICHI_1INCH,
      lpName: '1LP-1INCH-ICHI',
      shortLpName: '1LP-1INCH-ICHI',
      externalUrl: 'https://app.1inch.io/#/1/dao/farming',
      externalText: 'Earn $ICHI & $1INCH',
      externalButton: '1INCH'
    },
    [MainnetPoolNumbers.ICHI_BNT]: {
      name: 'ICHI-BNT',
      poolNumber: MainnetPoolNumbers.ICHI_BNT,
      lpName: 'ICHI',
      shortLpName: 'ICHI',
      tradeUrl: 'https://app.bancor.network/portfolio/v2',
      externalUrl: 'https://app.bancor.network/portfolio/v2',
      externalText: 'Migrate',
      externalButton: 'Migrate'
    },
    [MainnetPoolNumbers.ONE_DODO_USDC_MAINNET]: {
      name: 'oneDODO-USDC',
      poolNumber: MainnetPoolNumbers.ONE_DODO_USDC_MAINNET,
      lpName: 'DLP',
      shortLpName: 'DLP',
      farmAddress: '0x748F4DFf5996711A3E127aAba2E9B95347cCDc74',
      externalAddress: '0x748F4DFf5996711A3E127aAba2E9B95347cCDc74',
      externalUrl:
        'https://app.dodoex.io/earn/add-liquidity?network=mainnet&poolAddress=0x138c825d993d5ffb7f028408e870ebf50a019543',
      externalButton: 'DODO'
    },
    [MainnetPoolNumbers.ONE_DODO_USDC_BSC_MAINNET]: {
      name: 'oneDODO-USDC',
      poolNumber: MainnetPoolNumbers.ONE_DODO_USDC_BSC_MAINNET,
      lpName: 'DLP',
      shortLpName: 'DLP',
      farmAddress: '0x4be2d9251849DB6d3980cE3E13915980C1AE3065',
      externalAddress: '0x4be2d9251849DB6d3980cE3E13915980C1AE3065',
      externalUrl:
        'https://app.dodoex.io/mining?network=bsc-mainnet&address=0x4be2d9251849DB6d3980cE3E13915980C1AE3065',
      externalButton: 'DODO'
    },
    [MainnetPoolNumbers.ONE_UNI]: {
      name: 'oneUNI Deposit',
      poolNumber: MainnetPoolNumbers.ONE_UNI,
      lpName: 'oneUNI',
      shortLpName: 'oneUNI',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      externalUrl: 'https://app.rari.capital/fuse/pool/136',
      externalText: 'Earn $ICHI and $oneUNI',
      externalButton: 'RARI'
    },
    [MainnetPoolNumbers.ONE_UNI_VAULT]: {
      name: 'oneUNI Vault',
      vaultName: VaultName.ICHI,
      poolNumber: MainnetPoolNumbers.ONE_UNI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.1inch.io/#/1/swap/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/0x8290D7a64F25e6b5002d98367E8367c1b532b534',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/ichi-vault',
      isInverted: false,
      isHodl: false,
      vaultAddress: '0xfaeCcee632912c42a7c88c3544885A8D455408FA',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0,
      externalUrl: 'https://app.rari.capital/fuse/pool/136',
      externalText: 'Earn $ICHI',
      externalButton: 'RARI'
    },
    [MainnetPoolNumbers.ONE_BTC_VAULT_RARI]: {
      name: 'oneBTC Vault',
      vaultName: VaultName.ONEBTC,
      poolNumber: MainnetPoolNumbers.ONE_BTC_VAULT_RARI,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xEc4325F0518584F0774b483c215F65474EAbD27F&chain=mainnet',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/onebtc-vault',
      isInverted: true,
      isHodl: false,
      vaultAddress: '0x5318c21c96256ce4b73c27D405147df97d28E0Be',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0,
      externalUrl: 'https://app.rari.capital/fuse/pool/136',
      externalText: 'Earn $ICHI',
      externalButton: 'RARI'
    },
    // TODO: I added this by copying from the RARI above, this should be double checked
    // TODO: The vaultAddress and tradeUrl here needs to be double checked
    [MainnetPoolNumbers.ONE_BTC_VAULT_LEGACY]: {
      name: 'oneBTC Vault',
      vaultName: VaultName.ONEBTC,
      poolNumber: MainnetPoolNumbers.ONE_BTC_VAULT_LEGACY,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xEc4325F0518584F0774b483c215F65474EAbD27F&chain=mainnet',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/onebtc-vault',
      isInverted: true,
      isHodl: false,
      vaultAddress: '0x5318c21c96256ce4b73c27D405147df97d28E0Be',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_BTC_DEPOSIT]: {
      name: 'oneBTC Deposit',
      poolNumber: MainnetPoolNumbers.ONE_BTC_DEPOSIT,
      lpName: 'oneBTC',
      shortLpName: 'oneBTC',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      externalUrl: 'https://app.rari.capital/fuse/pool/136',
      externalText: 'Earn $ICHI and $oneBTC',
      externalButton: 'RARI'
    },
    // Hmmm, is this Mainnet or Mumbai?
    // [PoolNumbersMainnet.ONE_BTC_ICHI_VAULT]: {
    //   poolNumber: PoolNumbersMainnet.ONE_BTC_ICHI_VAULT,
    //   name: 'oneBTC-ICHI Vault',
    //   lpName: 'ICHI_VAULT_LP',
    //   shortLpName: 'VAULT_LP',
    //   tradeUrl:
    //     'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x8290d7a64f25e6b5002d98367e8367c1b532b534',
    //   //subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/ichi-vault',
    //   isInverted: false,
    //   vaultName: 'onebtc',
    //   vaultAddress: '0xA3a17a728534Dc72A9865469C292C0b7D055D97d'
    // },
    [MainnetPoolNumbers.ICHI_BNT_V3]: {
      name: 'ICHI-BNT',
      poolNumber: MainnetPoolNumbers.ICHI_BNT_V3,
      lpName: 'ICHI',
      shortLpName: 'ICHI',
      tradeUrl: 'https://app.bancor.network/earn',
      externalUrl: 'https://app.bancor.network/portfolio',
      externalText: 'Earn',
      externalButton: 'Earn'
    },
    [MainnetPoolNumbers._80_20_ICHI_ETH]: {
      name: '80/20 ICHI-ETH',
      poolNumber: MainnetPoolNumbers._80_20_ICHI_ETH,
      lpName: 'BPT (Balancer Pool Token) ICHI-ETH',
      shortLpName: 'BPT ICHI-ETH',
      tradeUrl: 'https://pools.balancer.exchange/#/pool/0x58378f5F8Ca85144ebD8e1E5e2ad95B02D29d2BB'
    },
    [MainnetPoolNumbers.ICHI_ETH_SUSHI]: {
      name: 'ICHI-ETH',
      poolNumber: MainnetPoolNumbers.ICHI_ETH_SUSHI,
      lpName: 'SLP (Sushiswap Liquidity Pool) ICHI-ETH',
      shortLpName: 'SLP ICHI-ETH',
      tradeUrl: 'https://app.sushi.com/add/0x903bEF1736CDdf2A537176cf3C64579C3867A881/ETH'
    },
    [MainnetPoolNumbers.ICHI_ETH_UNI_V2]: {
      name: 'ICHI-ETH',
      poolNumber: MainnetPoolNumbers.ICHI_ETH_UNI_V2,
      lpName: 'UNI-V2 ICHI-ETH',
      shortLpName: 'UNI-V2 ICHI-ETH',
      tradeUrl: 'https://app.uniswap.org/#/add/0x903bEF1736CDdf2A537176cf3C64579C3867A881/ETH'
    },
    [MainnetPoolNumbers.ONE_FIL]: {
      name: 'oneFIL Deposit',
      poolNumber: MainnetPoolNumbers.ONE_FIL,
      lpName: 'oneFIL',
      shortLpName: 'oneFIL',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x6d82017e55b1d24c53c7b33bbb770a86f2ca229d'
    },
    [MainnetPoolNumbers.ONE_1INCH]: {
      name: 'one1INCH Deposit',
      poolNumber: MainnetPoolNumbers.ONE_1INCH,
      lpName: 'one1INCH',
      shortLpName: 'one1INCH',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x853Bb55c1f469902F088A629db8C8803A9BE3857'
    },
    [MainnetPoolNumbers.ONE_MPH]: {
      name: 'oneMPH Deposit',
      poolNumber: MainnetPoolNumbers.ONE_MPH,
      lpName: 'oneMPH',
      shortLpName: 'oneMPH',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xBE3F88E18BE3944FdDa830695228ADBB82fA125F'
    },
    [MainnetPoolNumbers.ONE_PERL]: {
      name: 'onePERL Deposit',
      poolNumber: MainnetPoolNumbers.ONE_PERL,
      lpName: 'onePERL',
      shortLpName: 'onePERL',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xD9A24485e71B9148e0Fd51F0162072099DF0dB67'
    },
    [MainnetPoolNumbers.ONE_UNI]: {
      name: 'oneUNI Deposit',
      poolNumber: MainnetPoolNumbers.ONE_UNI,
      lpName: 'oneUNI',
      shortLpName: 'oneUNI',
      launchDate: 1625245200000,
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x8290d7a64f25e6b5002d98367e8367c1b532b534'
    },
    [MainnetPoolNumbers.ONE_FOX]: {
      name: 'oneFOX Deposit',
      poolNumber: MainnetPoolNumbers.ONE_FOX,
      lpName: 'oneFOX',
      shortLpName: 'oneFOX',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x03352D267951E96c6F7235037C5DFD2AB1466232'
    },
    [MainnetPoolNumbers.ONE_UNI_VAULT_LP]: {
      name: 'oneUNI Vault',
      poolNumber: MainnetPoolNumbers.ONE_UNI_VAULT_LP,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.1inch.io/#/1/swap/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/0x8290D7a64F25e6b5002d98367E8367c1b532b534',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/ichi-vault',
      isInverted: false,
      isHodl: false,
      vaultName: VaultName.ICHI,
      vaultAddress: '0xfaeCcee632912c42a7c88c3544885A8D455408FA',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_DODO]: {
      name: 'oneDODO Deposit',
      poolNumber: MainnetPoolNumbers.ONE_DODO,
      lpName: 'oneDODO',
      shortLpName: 'oneDODO',
      tradeUrl: '/mint?name=onedodo&collateral=USDC'
      // tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x03352D267951E96c6F7235037C5DFD2AB1466232',
    },
    [MainnetPoolNumbers.ONE_WING]: {
      name: 'oneWING Deposit',
      poolNumber: MainnetPoolNumbers.ONE_WING,
      lpName: 'oneWING',
      shortLpName: 'oneWING',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x5047fc5C9D7c49Ab22e390d13646a6A3a2476eff'
    },
    [MainnetPoolNumbers.GNO_VAULT_LEGACY]: {
      name: 'GNO Vault (legacy)',
      poolNumber: MainnetPoolNumbers.GNO_VAULT_LEGACY,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x6810e776880C02933D47DB1b9fc05908e5386b96&chain=mainnet',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/gno-vault',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.GNO,
      vaultAddress: '0xA380EA6BE1C084851aE7846a8F39def17eCf6ED8',
      irrStartDate: new Date('2022-03-10T14:25:23'),
      irrStartTxAmount: 17916
    },
    [MainnetPoolNumbers.CEL_VAULT_LEGACY]: {
      name: 'CEL Vault (legacy)',
      poolNumber: MainnetPoolNumbers.CEL_VAULT_LEGACY,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d&chain=mainnet',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/cel-vault',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.CEL,
      vaultAddress: '0x82FF3E2eC3bDCa84CF0637402907e26C51d1d676',
      irrStartDate: new Date('2022-03-23T00:13:17'),
      irrStartTxAmount: 346101.2345
    },
    [MainnetPoolNumbers.WNXM_VAULT_LEGACY]: {
      name: 'wNXM Vault (legacy)',
      poolNumber: MainnetPoolNumbers.WNXM_VAULT_LEGACY,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x0d438f3b5175bebc262bf23753c1e53d03432bde&chain=mainnet',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wnxm-vault',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.WNXM,
      vaultAddress: '0xd3FeD75d934Ab824Ff7FEcd0f8A70f204e61769b',
      irrStartDate: new Date('2022-03-15T19:04:48'),
      irrStartTxAmount: 222193
    },
    [MainnetPoolNumbers.WBTC_VAULT_LEGACY]: {
      name: 'wBTC Vault (legacy)',
      poolNumber: MainnetPoolNumbers.WBTC_VAULT_LEGACY,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599&chain=mainnet',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wbtc-vault',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.WBTC,
      vaultAddress: '0xeF88913c674a9cA1E79b3986e4b222F3E75c7d05',
      irrStartDate: new Date('2022-03-30T18:17:57'),
      irrStartTxAmount: 75.482852739
    },
    [MainnetPoolNumbers.WNXM_VAULT]: {
      name: 'wNXM Vault',
      poolNumber: MainnetPoolNumbers.WNXM_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x0d438f3b5175bebc262bf23753c1e53d03432bde&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.WNXM_V2,
      vaultAddress: '0x8abb986fB2C72aBc5a08f4D34BaF15279Dd5581F',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.CEL_VAULT]: {
      name: 'CEL Vault',
      poolNumber: MainnetPoolNumbers.CEL_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.CEL_V2,
      vaultAddress: '0x5fEb9A87A9C7d05C9Fbf7D24e753ceEE6696f10D',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.GNO_VAULT]: {
      name: 'GNO Vault',
      poolNumber: MainnetPoolNumbers.GNO_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x6810e776880C02933D47DB1b9fc05908e5386b96&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.GNO_V2,
      vaultAddress: '0xd9E3646f5f6F491c0011796C0f7eC45C6639c4C6',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.WBTC_VAULT]: {
      name: 'wBTC Vault',
      poolNumber: MainnetPoolNumbers.WBTC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.WBTC_V2,
      vaultAddress: '0x913b7D91e019402233d2f75863133925CE658CD9',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.BNT_VAULT]: {
      name: 'BNT Vault',
      poolNumber: MainnetPoolNumbers.BNT_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.bancor.network/trade?from=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&to=0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.BNT_V2,
      vaultAddress: '0x4DFa8455658f4d6D2eeb91CbeFb0Ee94056bB3dC',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.FUSE_ICHI_VAULT]: {
      name: 'FUSE Vault',
      poolNumber: MainnetPoolNumbers.FUSE_ICHI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.FUSE_ICHI,
      vaultAddress: '0xF6d4cdF6A9a82Aa56d2F2E1825B9f8E6052d8C46',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_FUSE_VAULT]: {
      name: 'oneFUSE Vault',
      poolNumber: MainnetPoolNumbers.ONE_FUSE_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0xBDf32c838e1b5d927B9ecb099b1f01F81d677A30',
      farmId: 0,
      farmRewardTokenName: TokenName.FUSE,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: '0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xbbce03b2e7f53cadca93251ca4c928af01db6404',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/fuse-vault',
      isInverted: true,
      isHodl: false,
      vaultName: VaultName.FUSE,
      vaultAddress: '0x3A4411a33CfeF8BC01f23ED7518208aA38cca824',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_FUSE_LEGACY]: {
      name: 'oneFUSE Vault',
      poolNumber: MainnetPoolNumbers.ONE_FUSE_LEGACY,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0xBDf32c838e1b5d927B9ecb099b1f01F81d677A30',
      farmId: 0,
      farmRewardTokenName: TokenName.FUSE,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: '0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xbbce03b2e7f53cadca93251ca4c928af01db6404',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/fuse-vault',
      isInverted: true,
      isHodl: false,
      vaultName: VaultName.FUSE,
      vaultAddress: '0x3A4411a33CfeF8BC01f23ED7518208aA38cca824',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_WING_VAULT]: {
      name: 'oneWING Vault',
      poolNumber: MainnetPoolNumbers.ONE_WING_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0xa87c231A2311B9484bfC9BF90C51C3181161eCB0',
      farmId: 0,
      farmRewardTokenName: TokenName.PWING, // pWING
      farmRewardTokenDecimals: 9,
      farmRewardTokenAddress: '0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x5047fc5C9D7c49Ab22e390d13646a6A3a2476eff',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wing-vault',
      isInverted: false,
      isHodl: false,
      vaultName: VaultName.WING,
      vaultAddress: '0x2a8E09552782563f7A076ccec0Ff39473B91Cd8F',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_FOX_VAULT]: {
      name: 'oneFOX Vault',
      poolNumber: MainnetPoolNumbers.ONE_FOX_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0x81A19b061d6a726b3268FF13cB0f9eb1b6f2DDA5',
      farmId: 0,
      farmRewardTokenName: TokenName.FOX, // fox'FOX',
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: '0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x03352D267951E96c6F7235037C5DFD2AB1466232',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/fox-vault',
      isInverted: false,
      isHodl: false,
      vaultName: VaultName.FOX,
      vaultAddress: '0x779F9BAd1f4B1Ef5198AD9361DBf3791F9e0D596',
      irrStartDate: new Date('2022-03-09T02:00:00'),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_OJA_VAULT]: {
      name: 'oneOJA Vault',
      poolNumber: MainnetPoolNumbers.ONE_OJA_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0x4C8E041157f3DC06D6Cc5670EdE41aBA881D66e8',
      farmId: 0,
      farmRewardTokenName: TokenName.OJA, // 'OJA',
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: '0x0aA7eFE4945Db24d95cA6E117BBa65Ed326e291A',
      tradeUrl: '/mint?name=oneoja&collateral=USDC',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/oja-vault',
      isInverted: true,
      isHodl: false,
      vaultName: VaultName.OJA,
      vaultAddress: '0x98bAd5Ce592DcfE706CC95a1B9dB7008B6D418F8',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.QRDO_VAULT]: {
      name: 'QRDO Vault',
      poolNumber: MainnetPoolNumbers.QRDO_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0x15187432d28d8Ee94957a3277A51708b707D374e',
      farmId: 0,
      farmRewardTokenName: TokenName.QRDO, // 'QRDO',
      farmRewardTokenDecimals: 8,
      farmRewardTokenAddress: '0x4123a133ae3c521FD134D7b13A2dEC35b56c2463',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: false,
      vaultName: VaultName.QRDO,
      vaultAddress: '0x784Ac9aaeaB58AAf904cc69e105aa51343E4C693',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.USDC_VAULT]: {
      name: 'USDC Vault',
      poolNumber: MainnetPoolNumbers.USDC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V3][ChainId.Mainnet],
      farmId: 0,
      // TODO: Logic change, review this
      // farmRewardTokenName: getToken(TokenName.ICHI_V2, ChainId.Mainnet).displayName,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      // TODO: Note this is not parameterized to the network and assumes Mainnet
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: false,
      vaultName: VaultName.USDC_ICHI,
      vaultAddress: '0x683F081DBC729dbD34AbaC708Fa0B390d49F1c39',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_ICHI_VAULT]: {
      name: 'oneICHI Vault',
      poolNumber: MainnetPoolNumbers.ONE_ICHI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V3][ChainId.Mainnet],
      farmId: 1,
      // TODO: Logic change, review
      // farmRewardTokenName: getToken(TokenName.ICHI_V2, ChainId.Mainnet).displayName,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4db2c02831c9ac305FF9311Eb661f80f1dF61e07&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: false,
      // vaultName: VaultName.ONE_ICHI, // old
      vaultName: VaultName.ONEICHI_ICHI,
      vaultAddress: '0x46f9490bcbcd0A12d3d8578B5b3AB19f8EF0617D',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    // doublicate oneFUSE vault record for legacy UI
    [MainnetPoolNumbers.ONE_FUSE_VAULT]: {
      name: 'oneFUSE Vault',
      poolNumber: MainnetPoolNumbers.ONE_FUSE_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0xBDf32c838e1b5d927B9ecb099b1f01F81d677A30',
      farmId: 0,
      farmRewardTokenName: TokenName.FUSE, // 'FUSE',
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: '0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xbbce03b2e7f53cadca93251ca4c928af01db6404',
      subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/fuse-vault',
      isInverted: true,
      isHodl: false,
      vaultName: VaultName.FUSE,
      vaultAddress: '0x3A4411a33CfeF8BC01f23ED7518208aA38cca824',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ONE_GIV]: {
      name: 'GIV Vault',
      poolNumber: MainnetPoolNumbers.ONE_GIV,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0x944344CD4014305e1fFAA613396D82eAf5b67B2D',
      farmId: 0,
      farmRewardTokenName: TokenName.GIV, // 'GIV',
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: '0x900dB999074d9277c5DA2A43F252D74366230DA0',
      tradeUrl: '/mint?name=onegiv&collateral=DAI',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: false,
      vaultName: VaultName.ONEGIV_GIV,
      vaultAddress: '0xc3151A58d519B94E915f66B044De3E55F77c2dd9',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    }
  },
  [ChainId.Kovan]: {
    [KovanPoolNumbers.WEENUS_WETH]: {
      name: 'WEENUS-WETH',
      poolNumber: KovanPoolNumbers.WEENUS_WETH,
      lpName: 'UNI-V2',
      shortLpName: 'UNI-V2'
    },
    [KovanPoolNumbers.ICHI_WETH]: {
      name: 'ICHI-WETH',
      poolNumber: KovanPoolNumbers.ICHI_WETH,
      lpName: 'UNI-V2',
      shortLpName: 'UNI-V2'
    },
    [KovanPoolNumbers.OTI_DEPOSIT]: {
      name: 'OTI Deposit',
      poolNumber: KovanPoolNumbers.OTI_DEPOSIT,
      lpName: 'OTI',
      shortLpName: 'OTI'
    },
    [KovanPoolNumbers.ONE_FIL_DEPOSIT]: {
      name: 'oneFIL Deposit',
      poolNumber: KovanPoolNumbers.ONE_FIL_DEPOSIT,
      lpName: 'oneFIL',
      shortLpName: 'oneFIL'
    },
    [KovanPoolNumbers.ONE_FIL_VAULT]: {
      name: 'oneFIL Vault',
      poolNumber: KovanPoolNumbers.ONE_FIL_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x6d82017e55b1d24c53c7b33bbb770a86f2ca229d'
    },
    [KovanPoolNumbers.ONE_UNI_VAULT]: {
      name: 'oneUNI Vault',
      poolNumber: KovanPoolNumbers.ONE_UNI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x8290d7a64f25e6b5002d98367e8367c1b532b534'
    },
    [KovanPoolNumbers.WEENUS_VAULT]: {
      name: 'Weenus Vault',
      poolNumber: KovanPoolNumbers.WEENUS_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x8290d7a64f25e6b5002d98367e8367c1b532b534'
    },
    [KovanPoolNumbers.ONE_UNI_UNI_VAULT]: {
      name: 'oneUNI-UNI Vault',
      poolNumber: KovanPoolNumbers.ONE_UNI_UNI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0x393A4c7F8D8aE114728C03C26bd08468C8b7f6c7',
      farmId: 0,
      farmRewardTokenName: TokenName.UNI, // 'UNI',
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: '0xdF2661E2E6A35B482E3F105bDE628B5e1F68aB41',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x8290d7a64f25e6b5002d98367e8367c1b532b534'
    }
  },
  [ChainId.Polygon]: {
    [PolygonPoolNumbers.ONE_BTC_VAULT]: {
      name: 'oneBTC Vault',
      poolNumber: PolygonPoolNumbers.ONE_BTC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0x1f194578e7510A350fb517a9ce63C40Fa1899427&chain=polygon',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: false,
      // vaultName: 'polygon_onebtc', // old polygon_onebtc
      vaultName: VaultName.POLYGON_ONEBTC, // old polygon_onebtc
      vaultAddress: '0xE5bf5D33C617556B91558aAfb7BeadB68E9Cea81',
      //irrStartDate: new Date('2022-05-26T02:00:00'),
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.WBTC_VAULT]: {
      name: 'wBTC Vault',
      poolNumber: PolygonPoolNumbers.WBTC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6&chain=polygon',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.POLYGON_WBTC, // old polygon_wbtc
      vaultAddress: '0x4aEF5144131dB95c110af41c8Ec09f46295a7C4B',
      //irrStartDate: new Date('2022-05-26T02:00:00'),
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.USDC_VAULT]: {
      name: 'USDC Vault',
      poolNumber: PolygonPoolNumbers.USDC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&chain=polygon',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: false,
      vaultName: VaultName.USDC_ICHI, // old polygon_usdc
      vaultAddress: '0x711901e4b9136119Fb047ABe8c43D49339f161c3',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    }
  },
  [ChainId.Mumbai]: {
    [MumbaiPoolNumbers.ONE_BTC_ICHI_VAULT]: {
      poolNumber: MumbaiPoolNumbers.ONE_BTC_ICHI_VAULT,
      name: 'oneBTC-ICHI Vault',
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0x8290d7a64f25e6b5002d98367e8367c1b532b534',
      //subgraphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/ichi-vault',
      isInverted: false,
      vaultName: VaultName.ONEBTC,
      vaultAddress: '0xA3a17a728534Dc72A9865469C292C0b7D055D97d'
    }
  }
  /* LABELS[1003] = {
  name: 'Smart ICHI-ETH',
  lpName: 'ICHI_ETH_SBPT',
  shortLpName: 'ICHI_ETH_SBPT',
  tradeUrl: 'https://pools.balancer.exchange/#/pool/0x6dB2d9841b3Fe166F258221c5502dc6Eb465b38D'
} */
  /* LABELS[1006] = {
  name: 'ICHI-BNT',
  lpName: 'ICHIBNT',
  shortLpName: 'ICHIBNT',
  tradeUrl: 'https://app.bancor.network/eth/pool/add/0x563f6e19197A8567778180F66474E30122FD702A'
} */
  /* LABELS[1007] = {
  name: 'ICHI oneToken Pool (ICHIBPT)',
  lpName: 'ICHIBNT',
  shortLpName: 'ICHIBNT',
  tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputCurrency=0x96855edefc3ad2d9efd0421f301d1324e1e93a52'
} */
  /* LABELS[1008] = {
  name: '67/33 ICHI-LINK',
  lpName: 'BPT (Balancer Pool Token) ICHI-LINK',
  shortLpName: 'BPT ICHI-LINK',
  tradeUrl: 'https://pools.balancer.exchange/#/pool/0x960c437E2A9A9a25e0FEDC0C8A5899827B10F63c'
} */
  /*LABELS[1011] = {
  name: 'oneFUSE Deposit',
  lpName: 'oneFUSE',
  shortLpName: 'oneFUSE',
  tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&outputCurrency=0xbbce03b2e7f53cadca93251ca4c928af01db6404'
}*/
  // Kovan
};
// These are commented out for now
/* LABELS[8] = {
  name: 'oneBTC-wBTC',
  lpName: 'SLP (Sushiswap Liquidity Pool) OneBTC-WBTC',
  shortLpName: 'SLP OneBTC-WBTC',
  tradeUrl: 'https://app.sushi.com/add/0xC88F47067dB2E25851317A2FDaE73a22c0777c37/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
} */
/* LABELS[9] = {
  name: 'oneLINK-LINK',
  lpName: 'SLP (Sushiswap Liquidity Pool) OneLINK-LINK',
  shortLpName: 'OneLINK-LINK',
  tradeUrl: 'https://app.sushi.com/add/0x18Cc17a1EeD37C02A77B0B96b7890C7730E2a2CF/0x514910771af9ca656af840dff83e8264ecf986ca'
} */
/* LABELS[10] = {
  name: 'ICHI-ETH',
  lpName: 'SLP (Sushiswap Liquidity Pool) ICHI-ETH',
  shortLpName: 'SLP ICHI-ETH',
  tradeUrl: 'https://app.sushi.com/add/0x903bEF1736CDdf2A537176cf3C64579C3867A881/ETH'
} */
/* LABELS[12] = {
  name: 'oneETH-USDC',
  lpName: 'SLP (Sushiswap Liquidity Pool) OneETH-USDC',
  shortLpName: 'SLP OneETH-USDC',
  tradeUrl: 'https://app.sushi.com/add/0xec0d77a58528a218cbf41fa6e1585c8d7a085868/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
} */
/* LABELS[13] = {
  name: 'oneWING-USDC',
  lpName: 'SLP (Sushiswap Liquidity Pool) OneWING-USDC',
  shortLpName: 'SLP OneWING-USDC',
  tradeUrl: 'https://app.sushi.com/add/0x8F041A3940a5e6FB580075C3774E15FcFA0E1618/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
} */
/* LABELS[19] = {
  name: 'oneVBTC-vBTC',
  lpName: 'SLP (Sushiswap Liquidity Pool) OneVBTC-vBTC',
  shortLpName: 'OneVBTC-vBTC',
  tradeUrl: 'https://app.sushi.com/add/0x7BD198b9107496fD5cC3d7655AF52f43a8eDBc4C/0xe1406825186D63980fd6e2eC61888f7B91C4bAe4'
} */
/* LABELS[10002] = {
  name: 'ICHI-ETH',
  lpName: '1LP-1INCH-ICHI',
  shortLpName: '1LP-1INCH-ICHI',
  externalUrl: 'https://exchange.loopring.io/pool',
  externalText: 'Earn $ICHI',
  externalButton: 'Loopring'
} */

export function getPoolLabel(poolNumber: PoolNumberValues, chainId: ChainId): Optional<PoolLabel> {
  const poolLabel = PoolLabels[chainId] != null ? PoolLabels[chainId][poolNumber] : undefined;
  if (!poolLabel) {
    throw new Error(`Could not find ${poolNumber} on ${chainId}`);
  }

  return poolLabel;
}

export function getMainnetPoolLabel(poolNumber: MainnetPoolNumberValues): Optional<PoolLabel> {
  return getPoolLabel(poolNumber, ChainId.Mainnet);
}

export function getKovanPoolLabel(poolNumber: MainnetPoolNumberValues): Optional<PoolLabel> {
  return getPoolLabel(poolNumber, ChainId.Kovan);
}

export function getPolygonPoolLabel(poolNumber: MainnetPoolNumberValues): Optional<PoolLabel> {
  return getPoolLabel(poolNumber, ChainId.Polygon);
}

export function getMumbaiPoolLabel(poolNumber: MainnetPoolNumberValues): Optional<PoolLabel> {
  return getPoolLabel(poolNumber, ChainId.Mumbai);
}
