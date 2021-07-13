import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  getReviews(){
    return this.http.get(environment.api+'reviews')
  }

  filteredReviews(filter:any){
    return this.http.get(environment.api+'reviews?'+filter)
  }

  getReview(slug:any){
    return this.http.get(environment.api+'reviews/'+slug)
  }

  getCutoff(id:any, year:any){
    return this.http.get(environment.api+'reviews/'+id+'/cutoffs?year='+year)
  }

  getExams(){
    return this.http.get(environment.api+'exams')
  }
  getExam(slug:any){
    return this.http.get(environment.api+'exams/'+slug)
  }

  getArticles(){
    return this.http.get(environment.api+'articles')
  }
  getArticle(slug:any){
    return this.http.get(environment.api+'articles/'+slug)
  }

}
