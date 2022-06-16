import { expect } from '@jest/globals';
import { VaultName } from '../models/vaultNames';
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
        name: VaultName.ONEUNI_ICHI,
        chainId: ChainId.Mainnet,
        expectedAddress: VAULTS[VaultName.ONEUNI_ICHI][ChainId.Mainnet]?.address
      },
      {
        name: VaultName.ONEFOX_FOX,
        chainId: ChainId.Mainnet,
        expectedAddress: VAULTS[VaultName.ONEFOX_FOX][ChainId.Mainnet]?.address
      },
      {
        name: VaultName.WBTC_ICHI,
        chainId: ChainId.Polygon,
        expectedAddress: VAULTS[VaultName.WBTC_ICHI][ChainId.Polygon]?.address
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        const actualResult = getVault(testParam.name, { chainId: testParam.chainId });
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
        name: VaultName.WBTC_ICHI,
        // Look for ICHI on a unknown chainId
        chainId: 999 as ChainId,
        expectedErrorMessage: `Could not find ${VaultName.WBTC_ICHI} on 999`
      }
    ];

    testParams.forEach((testParam) => {
      it(JSON.stringify(testParam), async () => {
        expect(() => getVault(testParam.name, { chainId: testParam.chainId, throwIfNotFound: true })).toThrow(
          testParam.expectedErrorMessage
        );
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
