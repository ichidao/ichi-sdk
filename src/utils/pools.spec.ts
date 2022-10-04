// https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
import { expect } from '@jest/globals';
import { getIchiVaultContract } from './contracts';
import { getProvider } from '../crypto/providers';
import { ChainId } from '../crypto/networks';
import { getPoolReserves } from './pools';
import { VAULTS } from 'src/constants/vaults';
import {BigNumber} from '@ethersproject/bignumber';

const normalAddress = VAULTS[ChainId.Mainnet].FUSE.address;
const exceptionVaultAddress = VAULTS[ChainId.Mainnet].ICHI.address;

describe('utils/pools', () => {
  describe('Check Pool Reserves', async () => {
    const provider = await getProvider(ChainId.Mainnet);
    if (!provider) {
      throw new Error(`Could not get provider`);
    }
    it('Should use totalAmounts for normal case', async () => {
      let ichiVault = getIchiVaultContract(normalAddress, provider);
      let {_reserve0, _reserve1} = await getPoolReserves(ichiVault, ChainId.Mainnet);
      let {total0, total1} = await ichiVault.getTotalAmounts();
      return expect(BigNumber.from(_reserve1)).toEqual(total1);
    });
    it('Should use getBasePosition for exception case', async () => {
      let ichiVault = getIchiVaultContract(exceptionVaultAddress, provider);
      let {_reserve0, _reserve1} = await getPoolReserves(ichiVault, ChainId.Mainnet);
      let {liquidity, amount0, amount1} = await ichiVault.getBasePosition();
      return expect(BigNumber.from(_reserve1)).toEqual(amount1);
    });
  });
});
