import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  onUploadService(fd : FormData):Observable<any>{
    return this.http.post<any>('https://ewproject.org/insert.php', fd);
  }

  onLoadService():Observable<any>{
    return this.http.get<any>("https://ewproject.org/load.php");
  }
}
