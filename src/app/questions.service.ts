import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private baseUrl = 'https://upsknowledgehublinux-cde8hvhwf5esemdb.canadacentral-01.azurewebsites.net/api/questions';
 
 
  constructor(private http: HttpClient) {}
 
  searchQuestions(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search?keyword=${keyword}`);
  }
}
