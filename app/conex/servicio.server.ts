import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from "./conex.service";
import { Observable } from "rxjs/Observable";
import {userR} from "../modeluser/user.model";
import { Frame } from "tns-core-modules/ui/frame/frame";

@Injectable()
export class ProfileService {
    constructor(private http: HttpClient, private authService: AuthService) {}
  
    create(form: userR){
        console.log(JSON.stringify(form))
        return this.http.post<any>(this.URL, form, this.authService.HTTP_AUTH_OPTIONS);
    }
    get URL() {
        return this.authService.API_URL + 'addUser';
    }
}