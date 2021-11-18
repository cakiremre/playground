import { Injectable } from '@angular/core';
import { Account, Role } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  account: Account = {
    username: 'emre',
    role: Role.ROLE_USER,
  };

  constructor() {}

  getAccount(): Account {
    return this.account;
  }

  hasRole(role: Role) {
    return this.account.role == role;
  }
}
