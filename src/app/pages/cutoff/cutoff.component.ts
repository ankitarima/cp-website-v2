import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-cutoff',
  templateUrl: './cutoff.component.html',
  styleUrls: ['./cutoff.component.scss']
})
export class CutoffComponent implements OnInit {

  public list = [] as any;
  public cutoffs = [] as any;

  filterForm = new FormGroup({
    gender: new FormControl(''),
    SeatType: new FormControl(''),
    round: new FormControl(''),
  })

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const year = params.year
      this.route.fragment.subscribe((fragment: string) => {
        const id = fragment;
        if(id){
          console.log(id, year)
          this.mainService.getCutoff(id,year).subscribe((res:any)=>{
            console.log(res.data[0].list)
            this.list = res.data[0].list;
            this.cutoffs = res.data[0].list;
          })
        }
      })
    });

  }

  filter(){
    console.log(this.filterForm.value)
    const gender= this.filterForm.value.gender;
    const SeatType= this.filterForm.value.SeatType;
    const round= this.filterForm.value.round;
    this.cutoffs = this.list;
    if(gender ==="" && SeatType ==="" && round === ""){
      this.cutoffs = this.list;
    }else if(gender !==""  && SeatType ==="" && round === ""){
      this.cutoffs = this.cutoffs.filter((val)=>{
        if(val.Gender === gender){
          return val
        }
      })
    }else if(gender !==""  && SeatType !=="" && round === ""){
      this.cutoffs = this.cutoffs.filter((val)=>{
        if(val.Gender === gender && val.SeatType === SeatType){
          return val
        }
      })
    }else if(gender !==""  && SeatType !=="" && round !== ""){
      this.cutoffs = this.cutoffs.filter((val)=>{
        if(val.Gender === gender && val.SeatType === SeatType && val.Round === round){
          return val
        }
      })
    }else if(gender ===""  && SeatType !=="" && round === ""){
      this.cutoffs = this.cutoffs.filter((val)=>{
        if(val.SeatType === SeatType){
          return val
        }
      })
    }else if(gender ===""  && SeatType !=="" && round !== ""){
      this.cutoffs = this.cutoffs.filter((val)=>{
        if(val.Round === round && val.SeatType === SeatType){
          return val
        }
      })
    }else if(gender ===""  && SeatType ==="" && round !== ""){
      this.cutoffs = this.cutoffs.filter((val)=>{
        if(val.Round === round){
          return val
        }
      })
    }

  }

  reset(){
    this.filterForm.reset()
  }

}
