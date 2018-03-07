import { Component, ViewChild, ElementRef } from "@angular/core";
import { Color } from "color";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { MyHttpPostService } from './post.service';

@Component({
    selector: "ns-post",
    moduleId: module.id,
    templateUrl: "./post.component.html",
    providers: [MyHttpPostService]
})
export class PostComponent {
    public name: string;
    public message:string;
    
    // >> (hide)
    public isItemVisible: boolean = false;
    // << (hide)
    constructor(private myPostService: MyHttpPostService) { }

    public submit() {
        this.makePostRequest();
    }

    private makePostRequest() {
        this.myPostService
            .postData({ username: this.name,  })
            .subscribe(res => {
                this.message = (<any>res).json.data.username;
                // >> (hide)
                this.isItemVisible = true;
                // << (hide)
            });
    }
}