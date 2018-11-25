import { OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class QuizService {
    apiUrl = 'https://apiitec2018tm.herokuapp.com/';

    constructor(private http: HttpClient) { }

    getQuestions(quizId: number) {
        return this.http.get(this.apiUrl + '/question/test/' + quizId);
    }

    postResult(result:any){
        return this.http.post(this.apiUrl + '/result', result);
    }

    getQuizCompleted(email:string, quizId: number){
        return this.http.get(this.apiUrl + '/result/' + email + '/' + quizId);
    }
}