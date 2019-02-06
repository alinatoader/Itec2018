import { OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CoursesService implements OnInit {
    apiUrl = 'https://apiitec2018tm.herokuapp.com/course/';
    //apiUrl = 'http://localhost:8080/course/';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(this.apiUrl);
    }

    getAllTeachers() {
        return this.http.get(this.apiUrl + 'teachers');
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + id);
    }

    getById(id: number) {
        return this.http.get(this.apiUrl + id);
    }

    create(event: any) {
        console.log(event);
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
        // return this.http.post('http://localhost:8080/quiz', quiz);
    }

    upload(courseId: number, file: any) {
        let data = new FormData();
        data.append('file', file);
        return this.http.post(this.apiUrl + 'upload/' + courseId, data);
    }

    getFiles(courseId: number) {
        return this.http.get(this.apiUrl + 'files/' + courseId);
    }

    downloadFile(fileName: string): Observable<Blob> {
        return this.http.get(this.apiUrl + 'download/' + fileName, { responseType: 'blob' });
    }

    ngOnInit(): void {
    }
}