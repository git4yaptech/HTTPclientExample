import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-list/user.service';
import {MatDialog} from '@angular/material';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private userList;
  displayedColumns: string[];
  dataSource;
  constructor(private userService: UserService) {}
  ngOnInit() {
   this.userList = this.userService.getUsers();
   this.displayedColumns = ['name', 'gender', 'age', 'thumbnail'];
   this.userList.subscribe((res => {
   this.dataSource = res.results;
   }));
  }
  showDetail(row) {
    console.log(row);
  }
}

