import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(
        private http: HttpClient,
        private storageService: StorageService) { } 

    private getUrl(resource: string) {
        return `${environment.baseUrl}${resource}/`;
    }
    private createHeaders() {
        const token ='Bearer '+`${this.storageService.load('token')}`;
        return { headers: new HttpHeaders().set('Authorization', token) };
    }
    public get<TResonse>(resource: string): Observable<TResonse> {
        return this.http.get<TResonse>(this.getUrl(resource), this.createHeaders());
    }
    public getById<TResonse>(resource: string, id: number): any {
        return this.http.get<TResonse>(`${environment.baseUrl}${resource}?id=` + id, this.createHeaders());
    }
    public post<TResonse>(resource: string, model: any): Observable<TResonse> {
        return this.http.post<TResonse>(this.getUrl(resource), model, this.createHeaders());
    }
    public put<TResonse>(resource: string, model: any): Observable<TResonse> {
        return this.http.put<TResonse>(this.getUrl(resource), model, this.createHeaders());
    }
    public delete(resource: string, id: any): Observable<any> {
        return this.http.delete(this.getUrl(resource) + id, this.createHeaders());
    }
   

}
