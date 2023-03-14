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
import { VaultName } from '../enums/vaultName';

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
    [MainnetPoolNumbers['1INCH_VAULT']]: {
      name: '1INCH Vault',
      poolNumber: MainnetPoolNumbers['1INCH_VAULT'],
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.1inch.io/#/1/swap/ETH/1INCH',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName['1INCH'],
      vaultAddress: '0x65953959EdA6f0085D75B6e6E1F44212AB71c55A',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ALLY_VAULT]: {
      name: 'ALLY Vault',
      poolNumber: MainnetPoolNumbers.ALLY_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://ally.ichi.org/',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.ALLY,
      vaultAddress: '0xE0b60aC202530017E5f06561156531c3AdfC5c8f',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.WETH_VAULT]: {
      name: 'wETH Vault',
      poolNumber: MainnetPoolNumbers.WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.WETH,
      vaultAddress: '0xF5777E4b828Fc08001222eC4A72978Ce727C8a8C',
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
    },
    [MainnetPoolNumbers.HOME_VAULT]: {
      name: 'HOME Vault',
      poolNumber: MainnetPoolNumbers.HOME_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 34,
      farmRewardTokenName: TokenName.ICHI_V2, 
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://curve.fi/factory/123',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.HOME,
      vaultAddress: '0x54114CC2eAFC82410C9c21Bf40519406957d6c44',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.BOBA_VAULT]: {
      name: 'BOBA Vault',
      poolNumber: MainnetPoolNumbers.BOBA_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 35,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x42bbfa2e77757c645eeaad1655e0911a7553efbc&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.BOBA,
      vaultAddress: '0xB1765340b4526aB67B9929546A2Aeeb440326ed0',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.BIT_VAULT]: {
      name: 'BIT Vault',
      poolNumber: MainnetPoolNumbers.BIT_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 38,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.BIT,
      vaultAddress: '0xdc6Ee42cC2B0b0af968Fa27092b5c061CddDA8fE',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.CHO_VAULT]: {
      name: 'CHO Vault',
      poolNumber: MainnetPoolNumbers.CHO_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 37,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xBBa39Fd2935d5769116ce38d46a71bde9cf03099&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.CHO,
      vaultAddress: '0x88dde82A09d35551cE77F206bFB1D27d2fF80fbE',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.AAVE_VAULT]: {
      name: 'AAVE Vault',
      poolNumber: MainnetPoolNumbers.AAVE_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 39,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.AAVE,
      vaultAddress: '0xA4209504c7a56502DaF39110064c49401C77D0B8',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.BAT_VAULT]: {
      name: 'BAT Vault',
      poolNumber: MainnetPoolNumbers.BAT_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 40,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x0D8775F648430679A709E98d2b0Cb6250d2887EF&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.BAT,
      vaultAddress: '0xB6c52337AEc343008cEF9134b80da5429d9196d8',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.COMP_VAULT]: {
      name: 'COMP Vault',
      poolNumber: MainnetPoolNumbers.COMP_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 41,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc00e94Cb662C3520282E6f5717214004A7f26888&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.COMP,
      vaultAddress: '0x1e0C4D5030f3766C1B8A6D46c2f89aA4dbb92448',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.LINK_VAULT]: {
      name: 'LINK Vault',
      poolNumber: MainnetPoolNumbers.LINK_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 42,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x514910771AF9Ca656af840dff83E8264EcF986CA&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.LINK,
      vaultAddress: '0x3C0F29979095dA9a6f0a516c17D4Fe83202ef427',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.MKR_VAULT]: {
      name: 'MKR Vault',
      poolNumber: MainnetPoolNumbers.MKR_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 43,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.MKR,
      vaultAddress: '0xa4aDF19196BC401a31e6E22E203c4A2fA0d1886a',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.SUSHI_VAULT]: {
      name: 'SUSHI Vault',
      poolNumber: MainnetPoolNumbers.SUSHI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 44,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.SUSHI,
      vaultAddress: '0xCa121a7030302c1192896293c8d16d24d323E191',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.UNI_VAULT]: {
      name: 'UNI Vault',
      poolNumber: MainnetPoolNumbers.UNI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 45,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.UNI,
      vaultAddress: '0x9526C7FC4d0d73212d331D84BE6F1EdE06E7BEcD',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.YFI_VAULT]: {
      name: 'YFI Vault',
      poolNumber: MainnetPoolNumbers.YFI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 46,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.YFI,
      vaultAddress: '0x91E4d4d930c5B68B384a81866b03d288223cb41b',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ZRX_VAULT]: {
      name: 'ZRX Vault',
      poolNumber: MainnetPoolNumbers.ZRX_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 47,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xE41d2489571d322189246DaFA5ebDe1F4699F498&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.ZRX,
      vaultAddress: '0xfCB8273E895e8f435153b0e556dB807376032802',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.FIDU_VAULT]: {
      name: 'FIDU Vault',
      poolNumber: MainnetPoolNumbers.FIDU_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 48,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://curve.fi/#/ethereum/pools/factory-crypto-23/swap',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.FIDU,
      vaultAddress: '0x169f655711345FF16dDa4Ccd29cE1cb9C897Eb90',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.GIV_VAULT]: {
      name: 'GIV Vault',
      poolNumber: MainnetPoolNumbers.GIV_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 49,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x900dB999074d9277c5DA2A43F252D74366230DA0&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.GIV,
      vaultAddress: '0x7a2410f9285374C01947B72cB44DD36388582762',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.OUSD_VAULT]: {
      name: 'OUSD Vault',
      poolNumber: MainnetPoolNumbers.OUSD_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 50,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.OUSD,
      vaultAddress: '0x7Ee8773Ab15A237657E418dB3642C2eb1e6Fec7d',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.OGN_VAULT]: {
      name: 'OGN Vault',
      poolNumber: MainnetPoolNumbers.OGN_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 51,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.OGN,
      vaultAddress: '0xF01F687873cAfd318FECB11f8f4fD3D02512c974',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.COW_VAULT]: {
      name: 'COW Vault',
      poolNumber: MainnetPoolNumbers.COW_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 52,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://swap.cow.fi/#/swap?inputCurrency=ETH&outputCurrency=0xDEf1CA1fb7FBcDC777520aa7f396b4E015F497aB&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.COW,
      vaultAddress: '0xE88952D8D7F8ECDf5e54574C5Ef3e198D831ea91',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.LDO_VAULT]: {
      name: 'LDO Vault',
      poolNumber: MainnetPoolNumbers.LDO_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 53,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.LDO,
      vaultAddress: '0x53FcdD1e5C2bC05fc848E7a77273132bF891DE9d',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.SWISE_VAULT]: {
      name: 'SWISE Vault',
      poolNumber: MainnetPoolNumbers.SWISE_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 54,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.SWISE,
      vaultAddress: '0xA3016D1565f97f1600729cAf6E42132188cA100A',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ICHI_ETH_VAULT]: {
      name: 'ICHI-ETH Vault',
      poolNumber: MainnetPoolNumbers.ICHI_ETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 55,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.ICHI_ETH,
      vaultAddress: '0xD22d97bB77e6BDf8D3f81Ca8FFe58f58B7505282',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ICHI_WBTC_VAULT]: {
      name: 'ICHI-wBTC Vault',
      poolNumber: MainnetPoolNumbers.ICHI_WBTC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 56,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.ICHI_WBTC,
      vaultAddress: '0x21e8625531993AC26f0DEAFa4083Fdf8f6EC3771',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ICHI_USDC_VAULT]: {
      name: 'ICHI-USDC Vault',
      poolNumber: MainnetPoolNumbers.ICHI_USDC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 57,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.ICHI_USDC,
      vaultAddress: '0x540b0d9AF7004a78Aa58a391718344c6897AB49A',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.MIDAS_VAULT]: {
      name: 'MIDAS Vault',
      poolNumber: MainnetPoolNumbers.MIDAS_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '0x3b5FCB1D099AE8C7F065DdE579293841c74d9114',
      farmId: 0,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x97e6e31aFb2d93d437301e006D9DA714616766A5&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.MIDAS,
      vaultAddress: '0x5Edda12a9BBfa368c839D9de44047493991084Cb',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.FXS_VAULT]: {
      name: 'FXS Vault',
      poolNumber: MainnetPoolNumbers.FXS_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 58,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.FXS,
      vaultAddress: '0x690654F78988D9C7e0dB40dc4a51e9c3b363DEEB',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.SHIB_VAULT]: {
      name: 'SHIB Vault',
      poolNumber: MainnetPoolNumbers.SHIB_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 59,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.SHIB,
      vaultAddress: '0x93a09a584F26952C0573b46fAA78820C778357B9',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.METIS_VAULT]: {
      name: 'METIS Vault',
      poolNumber: MainnetPoolNumbers.METIS_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 60,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x9E32b13ce7f2E80A01932B42553652E053D6ed8e&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.METIS,
      vaultAddress: '0x18379571f965098D6539726d0E51ea48120C5277',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.UMA_VAULT]: {
      name: 'UMA Vault',
      poolNumber: MainnetPoolNumbers.UMA_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 61,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.UMA,
      vaultAddress: '0x4C9523d75cC520b9ED5f24275A680B95daCA903A',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.BANK_VAULT]: {
      name: 'BANK Vault',
      poolNumber: MainnetPoolNumbers.BANK_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 62,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.BANK,
      vaultAddress: '0x49492cb4e60E32B149C2af35156c3757fCA147a9',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.FRAX_VAULT]: {
      name: 'FRAX Vault',
      poolNumber: MainnetPoolNumbers.FRAX_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 63,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x853d955aCEf822Db058eb8505911ED77F175b99e&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.FRAX,
      vaultAddress: '0x793eD8760f48fB457ABBd646aA3a0e9c0000347b',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.SFRXETH_VAULT]: {
      name: 'SFRXETH Vault',
      poolNumber: MainnetPoolNumbers.SFRXETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 64,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.frax.finance/frxeth/stake',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.SFRXETH,
      vaultAddress: '0xe52bCB075d0dCD994da43a343d16bec77314858d',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.QRDO_ICHI_VAULT]: {
      name: 'QRDO Vault',
      poolNumber: MainnetPoolNumbers.QRDO_ICHI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 65,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.QRDO_ICHI,
      vaultAddress: '0x322971423daf131Ddb3d4C1AC55623C1062cb53b',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.ASTO_VAULT]: {
      name: 'ASTO Vault',
      poolNumber: MainnetPoolNumbers.ASTO_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 66,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x823556202e86763853b40e9cDE725f412e294689&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.ASTO,
      vaultAddress: '0x8B99Fb11Aae84435fD22043a4912090E13Ca0753',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.BOBA_ETH_VAULT]: {
      name: 'BOBA-ETH Vault',
      poolNumber: MainnetPoolNumbers.BOBA_ETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 67,
      farmRewardTokenName: TokenName.WETH,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.WETH, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x42bbfa2e77757c645eeaad1655e0911a7553efbc&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.BOBA_ETH,
      vaultAddress: '0x12a819EC5085A82A72D9BB3Cdf78408271121677',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.GIV_ETH_VAULT]: {
      name: 'GIV-ETH Vault',
      poolNumber: MainnetPoolNumbers.GIV_ETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: ADDRESSES[AddressName.FARMING_V2][ChainId.Mainnet],
      farmId: 68,
      farmRewardTokenName: TokenName.WETH,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.WETH, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x900dB999074d9277c5DA2A43F252D74366230DA0&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.GIV_ETH,
      vaultAddress: '0xd46904b107b249E64D28F66a4B6BAC2E6AC1b953',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.IMX_VAULT]: {
      name: 'IMX-ICHI Vault',
      poolNumber: MainnetPoolNumbers.IMX_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '',
      farmId: 0,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.IMX,
      vaultAddress: '0x742F29C97e2610e1D142C0906C4eC7b38F194DAa',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.IMX_ETH_VAULT]: {
      name: 'IMX-ETH Vault',
      poolNumber: MainnetPoolNumbers.IMX_ETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '',
      farmId: 0,
      farmRewardTokenName: TokenName.WETH,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.WETH, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xF57e7e7C23978C3cAEC3C3548E3D615c346e79fF&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.IMX_ETH,
      vaultAddress: '0x65C6AbAa85Dd7E374502B0101b6C1F54a5aD725f',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.COC_VAULT]: {
      name: 'COC-ICHI Vault',
      poolNumber: MainnetPoolNumbers.COC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '',
      farmId: 0,
      farmRewardTokenName: TokenName.ICHI_V2,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.ICHI_V2, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xC8D9871a79551Ab4439C9E08f12962E3785f0437&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.COC,
      vaultAddress: '0xf38f545F8c3117c00282E85B6Cc12bb2CBBA76C1',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.COC_USDC_VAULT]: {
      name: 'COC-USDC Vault',
      poolNumber: MainnetPoolNumbers.COC_USDC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '',
      farmId: 0,
      farmRewardTokenName: TokenName.USDC,
      farmRewardTokenDecimals: 6,
      farmRewardTokenAddress: getToken(TokenName.USDC, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xC8D9871a79551Ab4439C9E08f12962E3785f0437&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.COC_USDC,
      vaultAddress: '0xE3Ab7528D38214b0D53911fAd72339512873D864',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [MainnetPoolNumbers.COC_ETH_VAULT]: {
      name: 'COC-ETH Vault',
      poolNumber: MainnetPoolNumbers.COC_ETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      farmAddress: '',
      farmId: 0,
      farmRewardTokenName: TokenName.WETH,
      farmRewardTokenDecimals: 18,
      farmRewardTokenAddress: getToken(TokenName.WETH, ChainId.Mainnet).address,
      tradeUrl: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xC8D9871a79551Ab4439C9E08f12962E3785f0437&chain=mainnet',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.COC_ETH,
      vaultAddress: '0xfeee972ffe5F0BDa462130F88076158c1F9e561D',
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
    [PolygonPoolNumbers.GOVI_VAULT]: {
      name: 'GOVI Vault',
      poolNumber: PolygonPoolNumbers.GOVI_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://quickswap.exchange/#/swap?currency0=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619&currency1=0x43Df9c0a1156c96cEa98737b511ac89D0e2A1F46',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.POLYGON_GOVI, 
      vaultAddress: '0x70Aa3c8e256c859e52c0B8C263f763D9051B95e1',
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
    },
    [PolygonPoolNumbers.USDC_WETH_VAULT]: {
      name: 'USDC-wETH Vault',
      poolNumber: PolygonPoolNumbers.USDC_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: false,
      vaultName: VaultName.POLYGON_USDC_WETH, 
      vaultAddress: '0x3ac9b3db3350A515c702ba19a001d099d4a5F132',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.TRADE_USDT_VAULT]: {
      name: 'TRADE-USDT Vault',
      poolNumber: PolygonPoolNumbers.TRADE_USDT_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://quickswap.exchange/#/swap?inputCurrency=ETH&swapIndex=0&currency1=0x692AC1e363ae34b6B489148152b12e2785a3d8d6',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_TRADE_USDT, 
      vaultAddress: '0x21e6910A769d10ef4236107493406a9788C758a3',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.ICHI_USDC_VAULT]: {
      name: 'ICHI-USDC Vault',
      poolNumber: PolygonPoolNumbers.ICHI_USDC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_ICHI_USDC, 
      vaultAddress: '0xc9C785d61455A44E9281C60D19e97A5Fdd858510',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.ICHI_WBTC_VAULT]: {
      name: 'ICHI-WBTC Vault',
      poolNumber: PolygonPoolNumbers.ICHI_WBTC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_ICHI_WBTC, 
      vaultAddress: '0x5394eb43700Ce8fBbF4CB83E8b52ea73b71426B6',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.ICHI_WETH_VAULT]: {
      name: 'ICHI-WETH Vault',
      poolNumber: PolygonPoolNumbers.ICHI_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_ICHI_WETH, 
      vaultAddress: '0x5a0834EBaFdF97DB54f45a43290b6B09D4226ec6',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.ICHI_WMATIC_VAULT]: {
      name: 'ICHI-WMATIC Vault',
      poolNumber: PolygonPoolNumbers.ICHI_WMATIC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=polygon',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.POLYGON_ICHI_WMATIC, 
      vaultAddress: '0xac6c0264511EeEC305Da9Afc2e1ABa08409F99f6',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.BAL_WETH_VAULT]: {
      name: 'BAL-WETH Vault',
      poolNumber: PolygonPoolNumbers.BAL_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3&chain=polygon',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.POLYGON_BAL_WETH, 
      vaultAddress: '0xf461063819fFBC6e22704aDe1861B0dF3BaC9585',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.DPI_WETH_VAULT]: {
      name: 'DPI-WETH Vault',
      poolNumber: PolygonPoolNumbers.DPI_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369&chain=polygon',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.POLYGON_DPI_WETH, 
      vaultAddress: '0x8AC3D7cd56816Da9fB45e7640aA70A24884e02f7',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.GHST_WETH_VAULT]: {
      name: 'GHST-WETH Vault',
      poolNumber: PolygonPoolNumbers.GHST_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_GHST_WETH, 
      vaultAddress: '0xf3De925524cE6bBa606107CFCB2A7A6259CD01EA',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.LINK_WETH_VAULT]: {
      name: 'LINK-WETH Vault',
      poolNumber: PolygonPoolNumbers.LINK_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_LINK_WETH, 
      vaultAddress: '0x692437de2cAe5addd26CCF6650CaD722d914d974',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.SUSHI_WETH_VAULT]: {
      name: 'SUSHI-WETH Vault',
      poolNumber: PolygonPoolNumbers.SUSHI_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_SUSHI_WETH, 
      vaultAddress: '0x74F9d8861D42Ac09759aDE7809A67cF053dc7bA5',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.WMATIC_WETH_VAULT]: {
      name: 'WMATIC-WETH Vault',
      poolNumber: PolygonPoolNumbers.WMATIC_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_WMATIC_WETH, 
      vaultAddress: '0x9ff3C1390300918B40714fD464A39699dDd9Fe00',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.CRV_WETH_VAULT]: {
      name: 'CRV-WETH Vault',
      poolNumber: PolygonPoolNumbers.CRV_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x172370d5Cd63279eFa6d502DAB29171933a610AF&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_CRV_WETH, 
      vaultAddress: '0xf7B1ab2545451b60345FA3aB8C5210d53c703c98',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.WBTC_WETH_VAULT]: {
      name: 'WBTC-WETH Vault',
      poolNumber: PolygonPoolNumbers.WBTC_WETH_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&outputCurrency=0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6&chain=polygon',
      subgraphEndpoint: '',
      isInverted: false,
      isHodl: true,
      vaultName: VaultName.POLYGON_WBTC_WETH, 
      vaultAddress: '0xFc089714519E84B7ce0a4023bfEE0D99F6d767dA',
      irrStartDate: new Date(0),
      irrStartTxAmount: 0
    },
    [PolygonPoolNumbers.WETH_USDC_VAULT]: {
      name: 'WETH-USDC Vault',
      poolNumber: PolygonPoolNumbers.WETH_USDC_VAULT,
      lpName: 'ICHI_VAULT_LP',
      shortLpName: 'VAULT_LP',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270&outputCurrency=0x7ceb23fd6bc0add59e62ac25578270cff1b9f619&chain=polygon',
      subgraphEndpoint: '',
      isInverted: true,
      isHodl: true,
      vaultName: VaultName.POLYGON_WETH_USDC, 
      vaultAddress: '0xB05bE549a570e430e5ddE4A10a0d34cf09a7df21',
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
