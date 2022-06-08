import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  register(payload: any): Observable<any>{
    alert('test');
    return this.http.post('http://localhost:8000', payload)
  }

}
