import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  public slug:any;
  public review:any;
  public collapseId:any
  public review_video:any;


  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private metaService: Meta,
    private mainService: MainService
  ) { }

  ngOnInit(): void {

    this.slug = this.route.snapshot.paramMap.get('slug');
    this.mainService.getReview(this.slug).subscribe((res:any)=>{
      this.review = res.data[0];
      this.review_video = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.review.review_video.split('=')[1]);
      // console.log(this.review)
      this.titleService.setTitle(this.review.college_name);
      this.metaService.addTags([
        {name: 'description', content: this.review.basic_info},
        {name: 'author', content: 'college option'},
        {name: 'image', content: this.review.featured_image},
      ]);
    })

  }

  collapse(id:any){
    if(this.collapseId !== id){
      this.collapseId = id
    }else{
      this.collapseId= '';
    }
  }


}
