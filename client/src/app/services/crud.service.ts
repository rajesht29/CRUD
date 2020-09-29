
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
  [x: string]: any;

   
  constructor(private http: HttpClient  ) { }

  private extractData1(res: any) {

    let body = res;
    return body || {};
  }

  getData(): Observable<any> {
    return this.http.get('http://localhost:4000/api/crud/').pipe(
      map(this.extractData1));
  }
  deleteData(id): Observable<any> {
    return this.http.delete('http://localhost:4000/api/crud/' + id ).pipe(
      map(this.extractData1));
  }
  addData(a): Observable<any> {
    return this.http.post('http://localhost:4000/api/crud/' ,a).pipe(
      map(this.extractData1));
  }
  
  editData(id,datas): Observable<any> {
    debugger;  
    return this.http.put('http://localhost:4000/api/crud/' + id,datas).pipe(
    map(this.extractData1));  }


}
