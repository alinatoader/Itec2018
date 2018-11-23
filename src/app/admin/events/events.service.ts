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

    delete(name: string) {
        return this.http.delete(this.apiUrl + name);
    }

    getByName(name: string) {
        return this.http.get(this.apiUrl + name);
    }

    create(event: any) {
        return this.http.post(this.apiUrl, event);
    }

    update(name: string, event: any) {
        return this.http.put(this.apiUrl + name, event);
    }

    ngOnInit(): void {
    }
}