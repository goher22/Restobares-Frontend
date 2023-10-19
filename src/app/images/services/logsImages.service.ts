import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

import { LogsImages } from "../interfaces/logsimages.interfaces";
import { environments } from "../../../environments/environments";
import { GroupHours } from "../interfaces/groupHours.interfaces";

@Injectable({providedIn: 'root'})
export class LogsImagesService {
    private baseUrl: string = environments.baseURL

    constructor(private http: HttpClient){} 

    getSearchLogImages(startDate:string, finalDate:string):Observable<LogsImages[]>{
        return this.http.get<LogsImages[]>(`${this.baseUrl}/images/search/${startDate}/${finalDate}`);
    }

    getGroupHours():Observable<GroupHours[]>{
        return this.http.get<GroupHours[]>(`${this.baseUrl}/images/group/hours`);
    }
}