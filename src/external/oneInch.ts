import { OneInchPool } from '../models/oneInch';
import { Apis } from '../constants/apis';

export const get1InchPools = async (): Promise<OneInchPool[]> => {
  const url = Apis.ONE_INCH_POOL;
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (e) {
    console.error(`Error calling ${url}`);
    throw e;
  }
};

// TODO: Genericize this with a default type of the above
// export const call1Inch = async (address: string, protocol: string) => {
//   const url = `${Apis.ONE_INCH_POOL}?id=${address}&protocol_id=${protocol}`;
//   // const x = true;
//   // if (x) {
//   //   console.log(`TODO: Genericize the function after url`, url);
//   //   throw new Error(url);
//   // }
//   try {
//     const result = await fetch(url);
//     const json = await result.json();
//     return json;
//   } catch (e) {
//     console.error(`Error calling ${url}`);
//     throw e;
//   }
// };
