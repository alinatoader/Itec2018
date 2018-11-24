import { OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class EventsService implements OnInit {
    apiUrl = 'https://apiitec2018tm.herokuapp.com/event/';

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

    create(event: any) {
        return this.http.post(this.apiUrl, event);
    }

    update(id: number, event: any) {
        return this.http.put(this.apiUrl + id, event);
    }

    filter(body: any) {
        console.log(body);
        return this.http.post(this.apiUrl + 'filter', body);
    }

    createQuiz(quiz: any) {
        return this.http.post('https://apiitec2018tm.herokuapp.com/quiz', quiz);
    }

    ngOnInit(): void {
    }
}