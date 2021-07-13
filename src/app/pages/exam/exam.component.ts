import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  public slug:any;
  public exam: any;

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.mainService.getExam(this.slug).subscribe((exam:any)=>{
      this.exam = exam.data[0];
    })
  }

}
