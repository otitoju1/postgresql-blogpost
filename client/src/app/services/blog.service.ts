import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url:any = environment.apiUrl;
  constructor(private http: HttpClient) { }

  post(apiName: string, data: any) {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
      const url = environment.apiUrl + apiName;
      return this.http.post(url, JSON.stringify(data), HttpOptions)
    }
  
    get(apiName: string) {
      const url = environment.apiUrl + apiName;
      return this.http.get(url);
    }
  
    delete(apiName: string) {
      const url = environment.apiUrl + apiName;
      return this.http.delete(url);
    }
  
    update(apiName: string, data: any) {
      const HttpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
        const url = environment.apiUrl + apiName;
        return this.http.put(url, JSON.stringify(data), HttpOptions)
      }

}
