import { PartialRecord } from '../types/common';
import { Token } from '../models/token';
import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { Token as UniswapToken } from '@uniswap/sdk';

type TokenMapping = PartialRecord<TokenName, PartialRecord<ChainId, Token>>;

export const TOKENS: TokenMapping = {
  [TokenName.ICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ICHI,
      tableName: TokenName.ICHI,
      address: '0x903bEF1736CDdf2A537176cf3C64579C3867A881',
      decimals: 9,
      displayName: 'ICHI',
      symbol: 'ICHI',
      isOneToken: false,
      atCoingecko: false,
      targetVaultStrength: .11
    },
    // NOTE: This is the same ICHI as ICHI_V2, but since Polygon my reference TokenName.ICHI, then we need to duplicate it here for that reference
    [ChainId.Polygon]: {
      tokenName: TokenName.ICHI,
      tableName: `pol_${TokenName.ICHI}`,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: .11
    },
    // Unclear if this should be here or below, in the ichi-api-updater it uses ichi not ichi_v2, but that's ambiguous regardless
    [ChainId.Mumbai]: {
      tokenName: TokenName.ICHI,
      tableName: `mum_${TokenName.ICHI}`,
      symbol: 'ICHI',
      atCoingecko: false,
      address: '0x36D7A88Df8B44D966DaC25c0DB0C000AE4d2306a',
      decimals: 18,
      displayName: 'ICHI',
      isOneToken: false,
      targetVaultStrength: .11
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.ICHI,
      tableName: `test_${TokenName.ICHI}`,
      symbol: 'ICHI',
      atCoingecko: false,
      address: '0x883Cc74d965edB77311A3f9a93649e92E2aa14ba',
      decimals: 9,
      displayName: 'ICHI',
      isOneToken: false,
      targetVaultStrength: .11
    }
  },
  [TokenName.ICHI_V2]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ICHI_V2,
      tableName: TokenName.ICHI_V2,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: .11
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.ICHI_V2,
      tableName: `pol_${TokenName.ICHI_V2}`,
      address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
      decimals: 18,
      displayName: 'ICHI',
      symbol: 'ICHI',
      atCoingecko: false,
      isOneToken: false,
      targetVaultStrength: .11
    }
    // [ChainId.Mumbai]: {
    //   tokenName: TokenName.ICHI_V2,
    //   tableName: `mum_${TokenName.ICHI_V2}`,
    //   symbol: 'ICHI',
    //   atCoingecko: false,
    //   address: '0x36D7A88Df8B44D966DaC25c0DB0C000AE4d2306a',
    //   decimals: 18,
    //   displayName: 'ICHI',
    //   isOneToken: false
    // }
  },
  [TokenName.XICHI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.XICHI,
      tableName: TokenName.XICHI,
      address: '0x70605a6457B0A8fBf1EEE896911895296eAB467E',
      decimals: 9,
      displayName: 'xICHI',
      symbol: 'xICHI',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.XICHI,
      tableName: TokenName.XICHI,
      symbol: 'xICHI',
      atCoingecko: false,
      address: '0x4a8a50cd18ccd55078630a4b17d16c892ff7f4db',
      decimals: 9,
      displayName: 'xICHI',
      isOneToken: false
    }
  },
  [TokenName.RENFIL]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.RENFIL,
      tableName: TokenName.RENFIL,
      address: '0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5',
      decimals: 18,
      displayName: 'renFIL',
      symbol: 'renFIL',
      parentOneToken: TokenName.ONE_FIL,
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.RENFIL,
      tableName: `test_${TokenName.RENFIL}`,
      symbol: 'renFIL',
      atCoingecko: true,
      address: '0x3CB15c7048e7CfAcFBc8eFe9362fAC5e60012BD1',
      decimals: 18,
      displayName: 'renFIL',
      isOneToken: false
    }
  },
  [TokenName.BNT]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.BNT,
      tableName: TokenName.BNT,
      address: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
      decimals: 18,
      displayName: 'BNT',
      symbol: 'BNT',
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
      symbol: 'CEL',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.GIV]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GIV,
      tableName: TokenName.GIV,
      address: '0x900dB999074d9277c5DA2A43F252D74366230DA0',
      decimals: 18,
      displayName: 'GIV',
      symbol: 'GIV',
      parentOneToken: TokenName.ONE_GIV,
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: .1
    }
  },
  [TokenName.GNO]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.GNO,
      tableName: TokenName.GNO,
      address: '0x6810e776880C02933D47DB1b9fc05908e5386b96',
      decimals: 18,
      displayName: 'GNO',
      symbol: 'GNO',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.DAI]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.DAI,
      tableName: TokenName.DAI,
      address: '0x6b175474e89094c44da98b954eedeac495271d0f',
      decimals: 18,
      displayName: 'DAI',
      symbol: 'DAI',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.DAI,
      tableName: `test_${TokenName.DAI}`,
      address: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
      decimals: 18,
      displayName: 'DAI',
      symbol: 'DAI',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName['1INCH']]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName['1INCH'],
      tableName: TokenName['1INCH'],
      address: '0x111111111117dC0aa78b770fA6A738034120C302',
      decimals: 18,
      displayName: '1INCH',
      symbol: '1INCH',
      isOneToken: false,
      atCoingecko: true
    }
  },
  [TokenName.ALLY]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ALLY,
      tableName: TokenName.ALLY,
      address: '0x1aa1e61369874bae3444A8Ef6528d6b13D6952EF',
      decimals: 18,
      displayName: 'ALLY',
      symbol: 'ALLY',
      isOneToken: false,
      atCoingecko: false
    }
  },
  [TokenName.OJA]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.OJA,
      tableName: TokenName.OJA,
      address: '0x0aA7eFE4945Db24d95cA6E117BBa65Ed326e291A',
      decimals: 18,
      displayName: 'OJA',
      symbol: 'OJA',
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
      symbol: 'pWING',
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
      symbol: 'QRDO',
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: .1
    }
  },
  [TokenName.WBTC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WBTC,
      tableName: TokenName.WBTC,
      address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.WBTC,
      tableName: `pol_${TokenName.WBTC}`,
      address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
      decimals: 8,
      displayName: 'wBTC',
      symbol: 'wBTC',
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
      symbol: 'wETH',
      isOneToken: false,
      atCoingecko: true
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.WETH,
      tableName: `test_${TokenName.WETH}`,
      symbol: 'wETH',
      atCoingecko: false,
      address: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
      decimals: 18,
      displayName: 'WETH',
      isOneToken: false
    }
  },
  [TokenName.WNXM]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.WNXM,
      tableName: TokenName.WNXM,
      address: '0x0d438F3b5175Bebc262bF23753C1E53d03432bDE',
      decimals: 18,
      displayName: 'wNXM',
      symbol: 'wNXM',
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
      symbol: 'VBTC',
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
      symbol: 'LINK',
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
      symbol: 'UNI',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.UNI,
      tableName: `test_${TokenName.UNI}`,
      symbol: 'UNI',
      atCoingecko: false,
      address: '0xdF2661E2E6A35B482E3F105bDE628B5e1F68aB41',
      decimals: 18,
      displayName: 'UNI',
      isOneToken: false
    }
  },
  [TokenName.USDC]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.USDC,
      tableName: TokenName.USDC,
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      isOneToken: false,
      atCoingecko: false
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.USDC,
      tableName: `pol_${TokenName.USDC}`,
      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      decimals: 6,
      displayName: 'USDC',
      symbol: 'USDC',
      atCoingecko: false,
      isOneToken: false
    },
    [ChainId.Mumbai]: {
      tokenName: TokenName.USDC,
      tableName: `mum_${TokenName.USDC}`,
      symbol: 'USDC',
      atCoingecko: false,
      address: '0x0FA8781a83E46826621b3BC094Ea2A0212e71B23',
      decimals: 6,
      displayName: 'USDC',
      isOneToken: false
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.USDC,
      tableName: `test_${TokenName.USDC}`,
      symbol: 'USDC',
      atCoingecko: false,
      address: '0x21632981cBf52eB788171e8dcB891C32F4834239',
      decimals: 6,
      displayName: 'USDC',
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
      symbol: 'FUSE',
      parentOneToken: TokenName.ONE_FUSE,
      isOneToken: false,
      atCoingecko: true,
      targetVaultStrength: .1
    }
  },
  [TokenName.MPH]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.MPH,
      tableName: TokenName.MPH,
      address: '0x8888801aF4d980682e47f1A9036e589479e835C5',
      decimals: 18,
      displayName: 'MPH',
      symbol: 'MPH',
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
      symbol: 'PERL',
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
      symbol: 'DODO',
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
      symbol: 'FOX',
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
      symbol: 'BOOT',
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
      symbol: 'oneETH',
      isOneToken: true,
      stimulusName: TokenName.WETH,
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
    symbol: "oneBTC",
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
      symbol: 'oneVBTC',
      isOneToken: true,
      stimulusName: TokenName.VBTC,
      stimulusDisplayName: 'VBTC',
      isV2: false,
      atCoingecko: false
    }
  },
  [TokenName.ONE_LINK]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_LINK,
      tableName: TokenName.ONE_LINK,
      address: '0x18Cc17a1EeD37C02A77B0B96b7890C7730E2a2CF',
      strategy: '',
      auxStrategy: [],
      decimals: 9,
      displayName: 'oneLINK',
      symbol: 'oneLINK',
      isOneToken: true,
      stimulusName: TokenName.LINK,
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
      symbol: 'oneFIL',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.RENFIL,
      stimulusDisplayName: 'renFIL',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd5147bc8e386d91cc5dbe72099dac6c9b99276f5'
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.ONE_FIL,
      tableName: TokenName.ONE_FIL,
      symbol: 'oneFIL',
      atCoingecko: false,
      address: '0x50633E780803b56a0d8606a3C674993080Ea98c1',
      strategy: '0xf2c642b993e98298477f3f20ea2de8e6f29db534',
      decimals: 18,
      displayName: 'oneFIL',
      isOneToken: true,
      isV2: true,
      testVault: {
        address: '0xA0D500fd3479CBCb64a2238082b7a1Df9f87d98D',
        farm: 4,
        ichi: 'token1'
      },
      stimulusName: TokenName.RENFIL,
      stimulusDisplayName: 'renFIL',
      tradeUrl: ''
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
      symbol: 'one1INCH',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName['1INCH'],
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
      symbol: 'oneBTC',
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
      stimulusName: TokenName.WBTC,
      stimulusDisplayName: 'wBTC',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599&chain=mainnet'
    },
    [ChainId.Polygon]: {
      tokenName: TokenName.ONE_BTC,
      tableName: `pol_${TokenName.ONE_BTC}`,
      address: '0x1f194578e7510A350fb517a9ce63C40Fa1899427',
      strategy: '0x51803f621c5e90011DE58b57fD5b7A92e0e39B08',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneBTC',
      symbol: 'oneBTC',
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
      stimulusName: TokenName.WBTC,
      stimulusDisplayName: 'wBTC',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6&chain=polygon'
    },
    [ChainId.Mumbai]: {
      tokenName: TokenName.ONE_BTC,
      tableName: `mum_${TokenName.ONE_BTC}`,
      symbol: 'oneBTC',
      atCoingecko: false,
      address: '0xeE0de02B5aFb77aD8718bA6C24A93fF3ea4e5637',
      strategy: '',
      decimals: 18,
      displayName: 'oneBTC',
      isOneToken: true,
      isV2: true,
      ichiVault: {
        address: '0xA3a17a728534Dc72A9865469C292C0b7D055D97d',
        farm: 0,
        externalFarm: '',
        scarceToken: 'token0',
        scarceTokenName: TokenName.ICHI,
        scarceTokenDecimals: 18
        //graphEndpoint: 'https://api.thegraph.com/subgraphs/name/ichi-org/wing-vault'
      },
      stimulusName: TokenName.TOKEN_6,
      stimulusDisplayName: 'Token6',
      tradeUrl: ''
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
      symbol: 'oneFUSE',
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
      stimulusName: TokenName.FUSE,
      stimulusDisplayName: 'FUSE',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d'
    }
  },
  [TokenName.ONE_GIV]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_GIV,
      tableName: TokenName.ONE_GIV,
      address: '0x17e6BA2519B4d15199B6529dB340910Ae031b1B0',
      strategy: '0x8A17A9ACF32811b0d2a10Bd97839643e8AD14B1B',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneGIV',
      symbol: 'oneGIV',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: 'giv',
      stimulusDisplayName: 'GIV',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x900dB999074d9277c5DA2A43F252D74366230DA0'
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
      symbol: 'oneMPH',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.MPH,
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
      symbol: 'onePERL',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.PERL,
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
      symbol: 'oneOJA',
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
      stimulusName: TokenName.OJA,
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
      symbol: 'oneUNI',
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
      stimulusName: TokenName.UNI,
      stimulusDisplayName: 'UNI',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.ONE_UNI,
      tableName: TokenName.ONE_UNI,
      symbol: 'oneUNI',
      atCoingecko: false,
      address: '0x4238C45783551be0D848BbAdA853cCa6b265322f',
      strategy: '',
      decimals: 18,
      displayName: 'oneUNI',
      isOneToken: true,
      isV2: true,
      // ichiVault: {
      //   address: '',
      //   farm: 0,
      //   ichi: ''
      // },
      stimulusName: TokenName.UNI,
      stimulusDisplayName: 'UNI',
      tradeUrl: ''
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
      symbol: 'oneDODO',
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.DODO,
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
      symbol: 'oneFOX',
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
      stimulusName: TokenName.FOX,
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
      symbol: 'oneWING',
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
      stimulusName: TokenName.PWING,
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
      symbol: 'BOOTusd',
      isOneToken: true,
      atCoingecko: false,
      isV2: true,
      stimulusName: TokenName.BOOT,
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
      symbol: 'oneICHI',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.ICHI_V2,
      stimulusDisplayName: 'ICHI',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6&chain=mainnet'
    }
  },
  [TokenName.ONE_GIV]: {
    [ChainId.Mainnet]: {
      tokenName: TokenName.ONE_GIV,
      tableName: TokenName.ONE_GIV,
      address: '0x17e6BA2519B4d15199B6529dB340910Ae031b1B0',
      strategy: '0x8A17A9ACF32811b0d2a10Bd97839643e8AD14B1B',
      auxStrategy: [],
      decimals: 18,
      displayName: 'oneGIV',
      symbol: 'oneGIV',
      atCoingecko: false,
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.GIV,
      stimulusDisplayName: 'GIV',
      tradeUrl:
        'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x900dB999074d9277c5DA2A43F252D74366230DA0'
    }
  },
  [TokenName.TOKEN_6]: {
    [ChainId.Mumbai]: {
      tokenName: TokenName.TOKEN_6,
      tableName: `mum_${TokenName.TOKEN_6}`,
      symbol: 'Token6',
      atCoingecko: false,
      address: '0x13EDD87281803AF4178E7b30631ab7Cbb6819441',
      decimals: 6,
      displayName: 'Token6',
      isOneToken: false
    },
    [ChainId.Kovan]: {
      tokenName: TokenName.TOKEN_6,
      tableName: `test_${TokenName.TOKEN_6}`,
      symbol: 'Token6',
      atCoingecko: false,
      address: '0xb994c68b4ed03d8f0aa9cb1b1729fa9bbbaa75e7',
      decimals: 6,
      displayName: 'Token6',
      isOneToken: false
    }
  },
  [TokenName.TOKEN_18]: {
    [ChainId.Kovan]: {
      tokenName: TokenName.TOKEN_18,
      tableName: `test_${TokenName.TOKEN_18}`,
      symbol: 'Token18',
      atCoingecko: false,
      address: '0x670d1C929e7d6B9F847c60A35750A440cB0f9308',
      decimals: 18,
      displayName: 'Token18',
      isOneToken: false
    }
  },
  [TokenName.OTI]: {
    [ChainId.Kovan]: {
      tokenName: TokenName.OTI,
      tableName: `test_${TokenName.OTI}`,
      symbol: 'OTI',
      atCoingecko: false,
      address: '0x5BF9b9bB304672c3d006955AbFC516e8b37693F9',
      strategy: '',
      decimals: 18,
      displayName: 'OTI',
      isOneToken: true,
      isV2: true,
      stimulusName: TokenName.TOKEN_18,
      stimulusDisplayName: 'Token18',
      tradeUrl: 'https://app.1inch.io/#/1/dao/farming'
    }
  },
  [TokenName.WEENUS]: {
    [ChainId.Kovan]: {
      tokenName: TokenName.WEENUS,
      tableName: `test_${TokenName.WEENUS}`,
      symbol: 'WEENUS',
      atCoingecko: false,
      address: '0xaFF4481D10270F50f203E0763e2597776068CBc5',
      decimals: 18,
      displayName: 'WEENUS',
      isOneToken: false
    }
  }
};

export function getToken(tokenName: TokenName, chainId: ChainId): Token {
  const token = TOKENS[tokenName] != null ? TOKENS[tokenName]![chainId] : undefined;
  if (!token) {
    throw new Error(`Could not find ${tokenName} on ${chainId}`);
  }
  return token;
}

export function getUniswapToken(tokenName: TokenName, chainId: ChainId): UniswapToken {
  const token = TOKENS[tokenName] != null ? TOKENS[tokenName]![chainId] : undefined;

  if (!token) {
    throw new Error(`Could not find ${tokenName} on ${chainId}`);
  }

  const uniswapToken = new UniswapToken(chainId as number, token.address, token.decimals);
  return uniswapToken;
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
