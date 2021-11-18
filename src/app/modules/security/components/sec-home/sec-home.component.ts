import { Component, OnInit } from '@angular/core';
import { Account, Role } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sec-home',
  templateUrl: './sec-home.component.html',
  styleUrls: ['./sec-home.component.css'],
})
export class SecHomeComponent implements OnInit {
  roles: Role[] = [Role.ROLE_USER, Role.ROLE_ADMIN];
  account: Account;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.account = this.accountService.getAccount();
  }
}
