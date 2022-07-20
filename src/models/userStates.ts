import { UserStateInVault } from './userState';

export interface UserStates {
  [account: string]: UserStateInVault;
}
