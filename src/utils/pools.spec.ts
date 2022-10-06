// https://stackoverflow.com/questions/58999086/cypress-causing-type-errors-in-jest-assertions
import { expect } from '@jest/globals';
import { getIchiVaultContract } from './contracts';
import { getProvider } from '../crypto/providers';
import { ChainId } from '../crypto/networks';
import { getPoolReserves } from './pools';
import { getVault } from '../constants/vaults';
import { VaultName } from '../enums/vaultName';
import { MainnetPoolNumbers } from '../enums/poolNumber';
import * as dotenv from "dotenv";
import { connectToProvider } from '../crypto/providers';

dotenv.config();

const testChainId = ChainId.Mainnet
const normalAddress = getVault(VaultName.USDC_ICHI, ChainId.Mainnet).address;
const normalPoolID: MainnetPoolNumbers = MainnetPoolNumbers.USDC_VAULT;

const exceptionVaultAddress = getVault(VaultName.ICHI, ChainId.Mainnet).address;
const exceptionPoolID: MainnetPoolNumbers = MainnetPoolNumbers.ONE_UNI_VAULT_LP;

describe('utils/pools', () => {
  describe('Check Pool Reserves', () => {
    it('Should use totalAmounts for normal case', async () => {
      let provider;
      try { 
        provider = await getProvider(ChainId.Mainnet) 
      } catch(e) {
        console.log(e);
        console.log("Trying local environment variable ...");
        provider = await connectToProvider(ChainId.Mainnet, [process.env.MAINNET_RPC_URL!]);
      }
      let ichiVault = getIchiVaultContract(normalAddress, provider!);
      let {_reserve0, _reserve1} = await getPoolReserves(ichiVault, ChainId.Mainnet, { poolId: normalPoolID });
      let {total0, total1} = await ichiVault.getTotalAmounts();
      return expect(_reserve1.toString()).toEqual(total1.toString());
    });
    it('Should use getBasePosition for exception case', async () => {
      let provider;
      try { 
        provider = await getProvider(ChainId.Mainnet); 
      } catch(e) {
        console.log(e);
        console.log("Trying local environment variable ...");
        provider = await connectToProvider(ChainId.Mainnet, [process.env.MAINNET_RPC_URL!]);
      }
      let ichiVault = getIchiVaultContract(exceptionVaultAddress, provider!);
      let {_reserve0, _reserve1} = await getPoolReserves(ichiVault, ChainId.Mainnet, { poolId: exceptionPoolID });
      let {liquidity, amount0, amount1} = await ichiVault.getBasePosition();
      return expect(_reserve1.toString()).toEqual(amount1.toString());
    });
  });
});

