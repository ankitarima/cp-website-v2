import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      {name: 'description', content: 'Home page of SEO friendly app'},
      {name: 'author', content: 'buttercms'},
      {name: 'keywords', content: 'Angular, ButterCMS'}
    ]);
    this.title.setTitle('About us | College Option');
   }

  ngOnInit(): void {
  }

}
