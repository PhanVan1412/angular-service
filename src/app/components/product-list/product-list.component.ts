import { Component } from '@angular/core';

@Component({
  selector: 'product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  public count: number = 0;
  public isLove: boolean = false;
  public numberLove: number = 0;
  public totalCount: number;
  constructor() { }
  public getCount($event: any) {
    this.count = $event;
  }
  public getIsLove($event: any) {
    this.isLove = $event;
  }
  public onHandlePay() {
    this.totalCount = this.count * 10000;
    console.log(this.totalCount)
  }
}