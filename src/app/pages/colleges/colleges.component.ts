import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss']
})
export class CollegesComponent implements OnInit {

  public states=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry"];

  public cities=['Araria','Arwal','Aurangabad','Banka','Begusarai','Bhagalpur','Bhojpur','Buxar','Darbhanga','East Champaran','Gaya','Gopalganj','Jamui','Jehanabad','Kaimur','Katihar','Khagaria','Kishanganj','Lakhisarai','Madhepura','Madhubani','Munger','Muzaffarpur','Nalanda','Nawada','Patna','Purnia','Rohtas','Saharsa','Samastipur','Saran','Sheikhpura','Sheohar','Sitamarhi','Siwan','Supaul','Vaishali','West Champaran','Chandigarh',];

  public types = ['Govt', 'PPP', 'Private'];

  public data:any;
  public isloading = true;

  public topColleges = false;

  constructor(
    private route: ActivatedRoute,
    private mainService: MainService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if(params.topColleges){
        if(params.topColleges  === 'true'){
          this.topColleges = true;
          this.mainService.filteredReviews('tags=iit').subscribe((res:any)=>{
            this.data = res.data;
            this.isloading = false;
          })
        }
      }else{
        this.mainService.getReviews().subscribe((res:any)=>{
          this.data = res.data;
          this.isloading = false;
        })
      }
    });
  }

  addFilter(value){
    console.log(value)
  }

}
