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

    login(user: User) {
        return this.http.post(
            Config.login,
            JSON.stringify({
                username: user.username
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
