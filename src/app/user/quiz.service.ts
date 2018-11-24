import { OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class QuizService {
    apiUrl = 'https://apiitec2018tm.herokuapp.com';

    constructor(private http: HttpClient) { }
}