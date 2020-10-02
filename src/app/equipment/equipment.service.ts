import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { environment } from "src/environments/environment.prod";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { EquipmentItem } from "./equipment-item";
import { HttpErrorHandler, HandleError } from "../http-error-handler.service";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token",
    }),
};

@Injectable()
export class EquipmentService {
    equipmentUrl = `${environment.apiUrl}/equipment`; // URL to web api
    private handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError(
            "EquipmentService"
        );
    }

    /** GET heroes from the server */
    getEquipment(): Observable<EquipmentItem[]> {
        return this.http
            .get<EquipmentItem[]>(this.equipmentUrl)
            .pipe(catchError(this.handleError("getEquipment", [])));
    }
}
