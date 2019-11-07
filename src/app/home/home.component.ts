import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Fontawesome} from 'nativescript-fontawesome';

Fontawesome.init();

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    selectedIndex0 = true;
    selectedIndex1 = false;
    selectedIndex2 = false;
    selectedIndex3 = false;
    @ViewChild("tab", {static: false}) tab: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    onIndexChanged() {
        console.log(this.tab.nativeElement.selectedIndex);
        if (this.tab.nativeElement.selectedIndex == 0) {
            this.selectedIndex0 = true;
            this.selectedIndex1 = false;
            this.selectedIndex2 = false;
            this.selectedIndex3 = false;
        } else if (this.tab.nativeElement.selectedIndex == 1) {
            this.selectedIndex0 = false;
            this.selectedIndex1 = true;
            this.selectedIndex2 = false;
            this.selectedIndex3 = false;
        } else if (this.tab.nativeElement.selectedIndex == 2) {
            this.selectedIndex0 = false;
            this.selectedIndex1 = false;
            this.selectedIndex2 = true;
            this.selectedIndex3 = false;
        } else if (this.tab.nativeElement.selectedIndex == 3) {
            this.selectedIndex0 = false;
            this.selectedIndex1 = false;
            this.selectedIndex2 = false;
            this.selectedIndex3 = true;
        }
    }

    onMessage(){
        console.log("Message icon clicked");
    }

}
