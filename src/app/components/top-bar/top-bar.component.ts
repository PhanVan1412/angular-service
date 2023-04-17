import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentShareService } from 'src/app/service/component-share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy{
  public count: number = 0;
  public text: string | null = '';
  public countChecked: number = 0;

  public valueFromChildSubscription: Subscription;
  public titleValueFromChildSubscription: Subscription;
  public countValueCheckFromChildSubscription: Subscription;

  constructor(private componentShareService: ComponentShareService){

  }
  public ngOnInit() {
    this.valueFromChildSubscription = this.componentShareService.countValue.subscribe(
      data => {
        this.count = data;
      }
    );
    this.titleValueFromChildSubscription = this.componentShareService.titleValue.subscribe(
      (data: string | null) => {
        this.text = data;
      }
    )
    this.countValueCheckFromChildSubscription = this.componentShareService.valueCheck.subscribe(
      data => {
        this.countChecked = data;
      }
    )
 }
  public ngOnDestroy() {
    this.valueFromChildSubscription.unsubscribe();
    this.countValueCheckFromChildSubscription.unsubscribe();
  }
}