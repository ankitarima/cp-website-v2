import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {

  public data:any

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getBootcamps().subscribe((res:any)=>{
      this.data = res.data;
      // console.log(res.data);
    })
  }

}
