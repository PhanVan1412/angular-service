import { Component } from '@angular/core';
import { ComponentShareService } from 'src/app/service/component-share.service';
@Component({
    selector: 'app-left-bar',
    templateUrl: './left-bar.component.html',
    styleUrls: ['./left-bar.component.css']
})

export class LeftBarComponent {
    public isStar: boolean = false;
    public isTitle: boolean = false;
    public isChecked: boolean = false; 
    public urlSrc: string = 'assets/star-solid.svg';
    public number: number = 0;
    public count: number = 0;
    public title: string = "";
    constructor(private componentShareService: ComponentShareService) {

    }
    handleClickTitle($event: MouseEvent) {
        // this.isTitle = !this.isTitle;
        // this.title = this.isTitle ? $event.target : '';
        const el = $event.target as HTMLInputElement
        this.componentShareService.setTitleValue(el?.textContent);
        console.log($event.target);
        
    }
    handleClickStar() {
        this.isStar = !this.isStar;
        this.urlSrc = this.isStar ? 'assets/star-solid-yellow.svg' : 'assets/star-solid.svg';
        this.number += 1;
        console.log(this.number);
        this.componentShareService.setCountValue(this.number);
        
    }
    handleClickCheck($event: MouseEvent) {
        // const checkBox: HTMLInputElement = document.getElementById('checkId') as HTMLInputElement;
        
        // this.isChecked = !this.isChecked;
        // if(this.isChecked != null) {
        //    checkBox.checked = this.isChecked;
        // }
        this.count += 1;
        // console.log(this.count);
        this.componentShareService.setValueChecked(this.count);
    }
}
