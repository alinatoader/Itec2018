import { OnInit, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class UserService implements OnInit {
    apiUrl = 'https://apiitec2018tm.herokuapp.com';
    //apiUrl = 'http://localhost:8080';
    
    constructor(private http: HttpClient) { }

    login(user: any) {
        return this.http.post(this.apiUrl + '/login', user);
    }

    saveUserInLocalStorage(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    getUserFromLocalStorage() {
        return JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.clear();
    }

    register(user: any) {
        return this.http.post(this.apiUrl + '/register', user);
    }

    confirm(email: string) {
        return this.http.post(this.apiUrl + '/admin/user/update/isConfirmed/' + email, null);
    }

    getAll() {
        return this.http.get(this.apiUrl + '/admin/user');
    }

    modifyAdminRole(email:string){
        return this.http.post(this.apiUrl + '/admin/user/update/isAdmin/' + email, null);
    }

    ngOnInit(): void {
    }
}