import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class QuestionsService {
    apiUrl = 'https://apiitec2018tm.herokuapp.com/question/';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(this.apiUrl);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + id);
    }

    getById(id: number) {
        return this.http.get(this.apiUrl + id);
    }

    create(question: any) {
        return this.http.post(this.apiUrl, question);
    }

    update(id: number, question: any) {
        return this.http.put(this.apiUrl + id, question);
    }
}