import { PartialRecord } from '../types/common';
import { Token } from '../models/token';
import { ChainId } from '../crypto/networks';
import { TokenName } from '../models/tokenNames';

type TokenMapping = {
  [tokenName in TokenName]: PartialRecord<ChainId, Token>;
};

export const TOKENS: TokenMapping = {
  [TokenName.ICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ICHI,
      tableName: TokenName.ICHI,
      address: '0x903bEF1736CDdf2A537176cf3C64579C3867A881',
      decimals: 9,
      displayName: 'ICHI',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.ICHI_V2]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ICHI_V2,
      tableName: TokenName.ICHI_V2,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.ICHI_V2,
      tableName: `pol_${TokenName.ICHI_V2}`,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      atCoingecko: false,
      isOneToken: false
    }
  },
  [TokenName.XICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.XICHI,
      tableName: TokenName.XICHI,
      address: '0x70605a6457B0A8fBf1EEE896911895296eAB467E',
      decimals: 9,
      displayName: 'xICHI',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.RENFIL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.RENFIL,
      tableName: TokenName.RENFIL,
      address: '0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5',
      decimals: 18,
      displayName: 'renFIL',
      parentOneToken: TokenName.ONE_FIL,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BNT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BNT,
      tableName: TokenName.BNT,
      address: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
      decimals: 18,
      displayName: 'BNT',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.CEL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.CEL,
      tableName: TokenName.CEL,
      address: '0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d',
      decimals: 4,
      displayName: 'CEL',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.GNO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GNO,
      tableName: TokenName.GNO,
      address: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
      decimals: 18,
      displayName: 'GNO',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName['1INCH']]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName['1INCH'],
      tableName: TokenName['1INCH'],
      address: '0x111111111117dC0aa78b770fA6A738034120C302',
      decimals: 18,
      displayName: '1INCH',
      parentOneToken: TokenName.ONE_1INCH,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.OJA]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.OJA,
      tableName: TokenName.OJA,
      address: '0x0aA7eFE4945Db24d95cA6E117BBa65Ed326e291A',
      decimals: 18,
      displayName: 'OJA',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.PWING]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.PWING,
      tableName: TokenName.PWING,
      address: '0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a',
      decimals: 9,
      displayName: 'pWING',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.QRDO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.QRDO,
      tableName: TokenName.QRDO,
      address: '0x4123a133ae3c521FD134D7b13A2dEC35b56c2463',
      decimals: 8,
      displayName: 'QRDO',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.WBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WBTC,
      tableName: TokenName.WBTC,
      address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      decimals: 8,
      displayName: 'wBTC',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.WBTC,
      tableName: `pol_${TokenName.WBTC}`,
      address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
      decimals: 8,
      displayName: 'wBTC',
      atCoingecko: false,
      isOneToken: false
    }
  },
  [TokenName.WETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WETH,
      tableName: TokenName.WETH,
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: 18,
      displayName: 'wETH',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.WNXM]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WNXM,
      tableName: TokenName.WNXM,
      address: '0x0d438F3b5175Bebc262bF23753C1E53d03432bDE',
      decimals: 18,
      displayName: 'wNXM',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.VBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.VBTC,
      tableName: TokenName.VBTC,
      address: '0xe1406825186D63980fd6e2eC61888f7B91C4bAe4',
      decimals: 18,
      displayName: 'VBTC',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.LINK]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.LINK,
      tableName: TokenName.LINK,
      address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
      decimals: 18,
      displayName: 'LINK',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.UNI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.UNI,
      tableName: TokenName.UNI,
      address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      decimals: 18,
      displayName: 'UNI',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.USDC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.USDC,
      tableName: TokenName.USDC,
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimals: 6,
      displayName: 'USDC',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.USDC,
      tableName: TokenName.USDC,
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      decimals: 6,
      displayName: 'USDC',
      atCoingecko: false,
      isOneToken: false
    }
  },
  [TokenName.FUSE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FUSE,
      tableName: TokenName.FUSE,
      address: '0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d',
      decimals: 18,
      displayName: 'FUSE',
      parentOneToken: TokenName.ONE_FUSE,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.MPH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.MPH,
      tableName: TokenName.MPH,
      address: '0x8888801aF4d980682e47f1A9036e589479e835C5',
      decimals: 18,
      displayName: 'MPH',
      parentOneToken: TokenName.ONE_MPH,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.PERL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.PERL,
      tableName: TokenName.PERL,
      address: '0xeca82185adCE47f39c684352B0439f030f860318',
      decimals: 18,
      displayName: 'PERL',
      parentOneToken: TokenName.ONE_PERL,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.DODO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.DODO,
      tableName: TokenName.DODO,
      address: '0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd',
      decimals: 18,
      displayName: 'DODO',
      parentOneToken: TokenName.ONE_DODO,
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.FOX]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.FOX,
      tableName: TokenName.FOX,
      address: '0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d',
      decimals: 18,
      displayName: 'FOX',
      parentOneToken: TokenName.ONE_FOX,
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.BOOT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BOOT,
      tableName: TokenName.BOOT,
      address: '0x0337fe811809A0aaf9B5D07945b39E473dE4c46E',
      decimals: 18,
      displayName: 'BOOT',
      parentOneToken: TokenName.BOOT_USD,
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.ONE_ETH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_ETH,
      tableName: TokenName.ONE_ETH,
      address: '0xEc0d77a58528a218cBf41Fa6E1585c8D7A085868',
      strategy: '',
      auxStrategy: [],
      decimals: 9,
      displayName: 'oneETH',
      isOneToken: true,
      stimulusName: 'weth',
      stimulusDisplayName: 'ETH',
      isV2: false,
      atCoingecko: false
    }
  },
  /*  old_onebtc: { 
    address: "0xC88F47067dB2E25851317A2FDaE73a22c0777c37",
    strategy: "",
    aux_strategy: [],
    decimals: 9,
    displayName: "oneBTC",
    isOneToken: true,
    stimulusName: 'wbtc',
    stimulusDisplayName: 'BTC',
    isV2: false
  },*/
  [TokenName.ONE_VBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_VBTC,
      tableName: TokenName.ONE_VBTC,
      address: '0x7BD198b9107496fD5cC3d7655AF52f43a8eDBc4C',
      strategy: '',
      auxStrategy: [],
      decimals: 9,
      displayName: 'oneVBTC',
      isOneToken: true,
      stimulusName: 'vbtc',
      stimulusDisplayName: 'VBTC',
      isV2: false,
      atCoingecko: false
    }
  },
  [TokenName.ONE_LINK]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_VBTC,
      tableName: TokenName.ONE_VBTC,
      address: '0x18Cc17a1EeD37C02A77B0B96b7890C7730E2a2CF',
      strategy: '',
      auxStrategy: [],
      decimals: 9,
      displayName: 'oneLINK',
      isOneToken: true,
      stimulusName: 'link',
      stimulusDisplayName: 'LINK',
      isV2: false,
      atCoingecko: false
    }
  },
  [TokenName.ONE_FIL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_FIL,
      tableName: TokenName.ONE_FIL,
      address: '0x6d82017e55b1D24C53c7B33BbB770A86f2ca229D',
      strategy: '0xc9682298cd1C39145EB34614a0B4356c7F29c92e',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneFIL',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: 'renfil',
      stimulusDisplayName: 'renFIL',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5'
    }
  },
  [TokenName.ONE_1INCH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_1INCH,
      tableName: TokenName.ONE_1INCH,
      address: '0x853bb55c1f469902f088a629db8c8803a9be3857',
      strategy: '0x97B380Ae50160E400d68c92ABeAf24402C9CaA62',
      auxStrategy: [],
      decimals: 18,
      displayName: 'one1INCH',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: '1inch',
      stimulusDisplayName: '1INCH',
      tradeUrl: 'https://app.1inch.io/#/1/swap/ETH/1inch'
    }
  },
  [TokenName.ONE_BTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_BTC,
      tableName: TokenName.ONE_BTC,
      address: '0xEc4325F0518584F0774b483c215F65474EAbD27F',
      strategy: '0x435B65196f302b04bAabcc1E5f07CA1192736771',
      auxStrategy: [],
      allySwap: '0xB973C8BE7d9A5a6dB9B227555C70C8f4De3FB82D',
      decimals: 18,
      displayName: 'oneBTC',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      ichiVault: {
        address: '0x5318c21c96256ce4b73c27D405147df97d28E0Be',
        farm: 0,
        externalFarm: '',
        scarceToken: 'token0',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 9
      },
      stimulusName: 'wbtc',
      stimulusDisplayName: 'wBTC',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599&chain=mainnet'
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.ONE_BTC,
      tableName: TokenName.ONE_BTC,
      address: '0x1f194578e7510A350fb517a9ce63C40Fa1899427',
      strategy: '0x51803f621c5e90011DE58b57fD5b7A92e0e39B08',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneBTC',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0xE5bf5D33C617556B91558aAfb7BeadB68E9Cea81',
        farm: 0,
        externalFarm: '',
        scarceToken: 'token0',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 18
      },
      stimulusName: 'pol_wbtc',
      stimulusDisplayName: 'wBTC',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6&chain=polygon'
    }
  },
  [TokenName.ONE_FUSE]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_FUSE,
      tableName: TokenName.ONE_FUSE,
      address: '0xBbcE03B2E7f53caDCA93251CA4c928aF01Db6404',
      strategy: '0x8740C9f316241F905323920F4f4FA8A4d6aB100b',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneFUSE',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      ichiVault: {
        address: '0x3A4411a33CfeF8BC01f23ED7518208aA38cca824',
        farm: 0,
        externalFarm: '0xBDf32c838e1b5d927B9ecb099b1f01F81d677A30',
        scarceToken: 'token0',
        scarceTokenName: TokenName.FUSE,
        scarceTokenDecimals: 18
      },
      stimulusName: 'fuse',
      stimulusDisplayName: 'FUSE',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d'
    }
  },
  [TokenName.ONE_MPH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_MPH,
      tableName: TokenName.ONE_MPH,
      address: '0xBE3F88E18BE3944FdDa830695228ADBB82fA125F',
      strategy: '0xF1587Cb51349CDf5bb408845249De36466C35F41',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneMPH',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: 'mph',
      stimulusDisplayName: 'MPH',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x8888801aF4d980682e47f1A9036e589479e835C5'
    }
  },
  [TokenName.ONE_PERL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_PERL,
      tableName: TokenName.ONE_PERL,
      address: '0xD9A24485e71B9148e0Fd51F0162072099DF0dB67',
      strategy: '0x2Dfb5348CC20218426e566C1bD7B8b3789CBa9d5',
      auxStrategy: [],
      decimals: 18,
      displayName: 'onePERL',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: 'perl',
      stimulusDisplayName: 'PERL',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xeca82185adCE47f39c684352B0439f030f860318&use=V2'
    }
  },
  [TokenName.ONE_OJA]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_OJA,
      tableName: TokenName.ONE_OJA,
      address: '0xbB9E5DB6F357BB4dF35E8B90B37b8A3F33031D86',
      strategy: '0x2E76A8D053f839A04235341dF1f25235437fEDd6',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneOJA',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      ichiVault: {
        address: '0x98bAd5Ce592DcfE706CC95a1B9dB7008B6D418F8',
        farm: 0,
        externalFarm: '0x4C8E041157f3DC06D6Cc5670EdE41aBA881D66e8',
        scarceToken: 'token0',
        scarceTokenName: TokenName.OJA,
        scarceTokenDecimals: 18
      },
      stimulusName: 'oja',
      stimulusDisplayName: 'OJA',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x0aA7eFE4945Db24d95cA6E117BBa65Ed326e291A&use=V2'
    }
  },
  [TokenName.ONE_UNI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_UNI,
      tableName: TokenName.ONE_UNI,
      address: '0x8290d7a64f25e6b5002d98367e8367c1b532b534',
      strategy: '0x6287d56e246EEE33beAd2D7DD3a99Db693f4554C',
      auxStrategy: ['0x55922Fa5084f9367B73FC0df9163B089D8Ac4CB7', '0x0b10e483aac4340256772754d23131b6e0dc31ea'],
      allySwap: '0x9Fd678389480590511302922ccA092482816D564',
      decimals: 18,
      displayName: 'oneUNI',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0xfaeCcee632912c42a7c88c3544885A8D455408FA',
        farm: 16,
        externalFarm: '',
        scarceToken: 'token1',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 9
      },
      stimulusName: 'uni',
      stimulusDisplayName: 'UNI',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
    }
  },
  [TokenName.ONE_DODO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_DODO,
      tableName: TokenName.ONE_DODO,
      address: '0xcA37530E7c5968627BE470081d1C993eb1dEaf90',
      strategy: '0x1faac4842054F2dB2DdDFC8152D7C259d5102c13',
      auxStrategy: [],
      allySwap: '0x3f57443040cC438d5d6108Fd024DfBFd048d9503',
      decimals: 18,
      displayName: 'oneDODO',
      isOneToken: true,
      isV2: true,
      stimulusName: 'dodo',
      stimulusDisplayName: 'DODO',
      tradeUrl: 'https://app.dodoex.io/exchange/USDC-DODO?network=mainnet',
      atCoingecko: false
    }
  },
  [TokenName.ONE_FOX]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_FOX,
      tableName: TokenName.ONE_FOX,
      address: '0x03352D267951E96c6F7235037C5DFD2AB1466232',
      strategy: '0xeB370EE6927e4655a463F898fFF30479b34708f6',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneFOX',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0x779F9BAd1f4B1Ef5198AD9361DBf3791F9e0D596',
        farm: 0,
        externalFarm: '0x81A19b061d6a726b3268FF13cB0f9eb1b6f2DDA5',
        scarceToken: 'token1',
        scarceTokenName: TokenName.FOX,
        scarceTokenDecimals: 18
      },
      stimulusName: 'fox',
      stimulusDisplayName: 'FOX',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d'
    }
  },
  [TokenName.ONE_WING]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_WING,
      tableName: TokenName.ONE_WING,
      address: '0x5047fc5C9D7c49Ab22e390d13646a6A3a2476eff',
      strategy: '0xac20007A5CBDA40d8E16df26bAD89E8738404691',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneWING',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0x2a8E09552782563f7A076ccec0Ff39473B91Cd8F',
        farm: 0,
        externalFarm: '0xa87c231A2311B9484bfC9BF90C51C3181161eCB0',
        scarceToken: 'token1',
        scarceTokenName: TokenName.PWING,
        scarceTokenDecimals: 9
      },
      stimulusName: 'pwing',
      stimulusDisplayName: 'pWING',
      tradeUrl: 'https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xDb0f18081b505A7DE20B18ac41856BCB4Ba86A1a'
    }
  },
  [TokenName.BOOT_USD]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BOOT_USD,
      tableName: TokenName.BOOT_USD,
      address: '0x78a3b2f1e7eec1073088ea4a193618743f81cef8',
      strategy: '0x4ed128f3087DB2D9F6Ea0f1dca3b7FC716EC256C',
      auxStrategy: [],
      decimals: 18,
      displayName: 'BOOTusd',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      stimulusName: 'boot',
      stimulusDisplayName: 'BOOT',
      tradeUrl: 'https://www.boot.finance'
    }
  },
  [TokenName.ONE_ICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_ICHI,
      tableName: TokenName.ONE_ICHI,
      address: '0x4db2c02831c9ac305FF9311Eb661f80f1dF61e07',
      strategy: '0xAC225b5Be5b2EBe53b75798366287626b9881BC8',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneICHI',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: 'ichi_v2',
      stimulusDisplayName: 'ICHI',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=mainnet'
    }
  }
};

export function getToken(
  tokenName: TokenName,
  opts: { chainId: ChainId; throwIfNotFound?: boolean } = { chainId: ChainId.Mainnet, throwIfNotFound: true }
): Token {
  const token = TOKENS[tokenName][opts.chainId] as Token;
  if (!token) {
    if (opts.throwIfNotFound) {
      throw new Error(`Could not find ${tokenName} on ${opts.chainId}`);
    } else {
      console.warn(`Could not find ${tokenName} on ${opts.chainId}`);
    }
  }
  return token;
}

export function getTokens(chainId: ChainId): Token[] {
  const names = Object.keys(TOKENS);
  const vaults: Token[] = [];
  for (let name of names) {
    if (chainId in TOKENS[name]) {
      vaults.push(TOKENS[name][chainId]);
    }
  }
  return vaults;
}
