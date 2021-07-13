import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public articles = [] as any;

  constructor(
    private meta: Meta,
    private title: Title,
    private mainService: MainService
  ) {
    this.meta.addTags([
      {name: 'description', content: 'Home page of SEO friendly app'},
      {name: 'author', content: 'buttercms'},
      {name: 'keywords', content: 'Angular, ButterCMS'}
    ]);
    this.title.setTitle('Home | College Option');
   }

  ngOnInit(): void {
    this.mainService.getArticles().subscribe((articles:any)=>{
      this.articles = articles.data
      console.log(this.articles)
    })
  }

}
