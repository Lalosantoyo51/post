import { Injectable } from "@angular/core";
import { Observable as RxObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable()
export class MyHttpPostService {
    private serverUrl = "https://httpbin.org/post";

    constructor(private http: HttpClient) { }

    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { data }, { headers: options })
            .map(res => res);
    }

    private createRequestOptions() {
        let headers = new HttpHeaders();

        return headers;
    }
}
