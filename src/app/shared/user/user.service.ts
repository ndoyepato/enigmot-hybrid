import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";
import {tap, catchError} from "rxjs/operators";

import {User} from "./user.model";
import {Config} from "../config";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    requestAcode(user: User) {
        return this.http.post(
            Config.requestAcode,
            JSON.stringify({
                telephone: user.telephone
            }),
            {
                headers: UserService.getCommonHeaders()
            }
        )
    }

    validateCode(user: User) {
        console.log("Validate code");
        return this.http.post(
            Config.verifierCode,
            JSON.stringify({
                code: user.code,
                telephone: user.telephone
            }),
            {
                headers: UserService.getCommonHeaders()
            }
        )
    }

    private static getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json",
            //"Authorization": Config.token_key,
        });
    }

    private handleErrors(error: HttpErrorResponse) {
        console.log("requestCodeError");
        console.log(JSON.stringify(error));
        return throwError(error);
    }
}
