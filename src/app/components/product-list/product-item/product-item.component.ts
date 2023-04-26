import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'product-item-component',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  private _number$: number = 0;
  public isLove: boolean = false;
  public price: number = 0;
  public urlImage: string = "assets/heart-solid.svg";
  @Output() numberEvent: any;
  @Output() isLoveEvent: any;
  @Input() totalCountEvent:number
  constructor() { 
    this.numberEvent = new EventEmitter();
    this.isLoveEvent = new EventEmitter();
  }
  
  public onAdd() {
    this._number$ += 1;
    console.log(this._number$)
    this.numberEvent.emit(this._number$);
  }
  public onRemove() {
    if( this._number$ > 0) {
      this._number$ -= 1;
      console.log(this._number$)
    }
    else {
      this._number$ = 0;
    }
    this.numberEvent.emit(this._number$);
  }
  public onHandleLove() {
    this.isLove = !this.isLove;
    this.urlImage = this.isLove ? "assets/heart-solid-red.svg" : "assets/heart-solid.svg";
    console.log(this.isLove);
    this.isLoveEvent.emit(this.isLove);
  }
}