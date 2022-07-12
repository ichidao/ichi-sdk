export enum DebankProtocolName {
  // Mainnet
  UNI_V3 = 'uniswap3',
  YEARN_V2 = 'yearn2',
  // Polygon
  MATIC_UNI_V3 = 'matic_uniswap3'
}
export type DebankProtocolNames = keyof typeof DebankProtocolName;
export type DebankProtocalValues = typeof DebankProtocolName[keyof typeof DebankProtocolName];
