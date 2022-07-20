import { expect } from '@jest/globals';
import { VaultName } from '../enums/vaultName';
import { ChainId } from '../crypto/networks';
import { getVault, getVaults, VAULTS } from './vaults';

describe('constants/vaults', () => {
  describe('getVault - valid', () => {
    type TestArgs = {
      name: VaultName;
      chainId: ChainId;
      expectedAddress?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: VaultName.ICHI,
        chainId: ChainId.Mainnet,
        expectedAddress: VAULTS[VaultName.ICHI]![ChainId.Mainnet]?.address
      },
      {
        name: VaultName.FOX,
        chainId: ChainId.Mainnet,
        expectedAddress: VAULTS[VaultName.FOX]![ChainId.Mainnet]?.address
      },
      {
        name: VaultName.WBTC_V2,
        chainId: ChainId.Polygon,
        expectedAddress: VAULTS[VaultName.WBTC_V2]![ChainId.Polygon]?.address
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getVault(testParam.name, testParam.chainId);
        expect(actualResult.address).toEqual(testParam.expectedAddress);
      });
    });
  });

  describe('getVault - invalid', () => {
    type TestArgs = {
      name: VaultName;
      chainId: ChainId;
      expectedErrorMessage?: string;
    };

    const testParams: TestArgs[] = [
      {
        name: VaultName.WBTC,
        // Look for ICHI on a unknown chainId
        chainId: 999 as ChainId,
        expectedErrorMessage: `Could not find ${VaultName.WBTC} on 999`
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        expect(() => getVault(testParam.name, testParam.chainId)).toThrow(testParam.expectedErrorMessage);
      });
    });
  });

  describe('getVaults', () => {
    type TestArgs = {
      chainId: ChainId;
    };

    const testParams: TestArgs[] = [
      {
        chainId: ChainId.Mainnet
      },
      {
        chainId: ChainId.Polygon
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getVaults(testParam.chainId);
        expect(actualResult.length).toBeGreaterThan(0);
      });
    });
  });
});
