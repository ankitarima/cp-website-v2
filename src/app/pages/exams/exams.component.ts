import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  public exams =[] as any;

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getExams().subscribe((exams:any)=>{
      this.exams = exams.data
    })
  }

}
