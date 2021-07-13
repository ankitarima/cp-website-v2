import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-socialshare',
  templateUrl: './socialshare.component.html',
  styleUrls: ['./socialshare.component.scss']
})
export class SocialshareComponent implements OnInit {

  @Input() title:any

  public url:any;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.url = 'http://www.collegeoption.in'+this.router.url;
    console.log(this.url)
  }

}
