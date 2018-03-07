import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { Observable } from "rxjs/Observable";
import { RouterExtensions } from "nativescript-angular/router";
import {userR} from "../../app/modeluser/user.model"

import {ProfileService} from "../conex/servicio.server"

@Component({
    selector: "ns-create",
    moduleId: module.id,
    templateUrl: "./name.component.html",
})
export class CreateComponent implements OnInit {
    name:string = "";
    selectedIndex = 1;

    
    constructor(private router : RouterExtensions, private profileService : ProfileService) {
       
     }
    ngOnInit() : void {
        
    }
    createProfile() : void {
        console.log(this.profileService.URL)
        this.profileService.create({
            name:this.name
        }).subscribe((profile)=>{
            console.log(JSON.stringify(profile));
        },(error)=>{
            console.log(JSON.stringify(error));
            
        });
          
    }
}