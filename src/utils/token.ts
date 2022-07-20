import { ChainId } from '../crypto/networks';
import { TokenName } from '../enums/tokenName';
import { getToken } from '../constants/tokens';

export function isOneToken(tokenName: TokenName | string, chainId: ChainId): boolean {
  try {
    const token = getToken(tokenName as TokenName, chainId);
    return token.isOneToken;
  } catch {
    try {
      const token = getToken(tokenName.toLowerCase() as TokenName, chainId);
      return token.isOneToken;
    } catch {
      return false;
    }
  }
}
