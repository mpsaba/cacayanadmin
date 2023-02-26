import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  constructor() {
    console.log("CustomerTableComponent");
   }

  ngOnInit(): void {
  }

}
