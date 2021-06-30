import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuToggle = false;
  public scrollPostion = 0;

  constructor( ) {

   }

  ngOnInit(): void {
    // window.addEventListener("scroll", (event) => {
    //   this.scrollPostion = window.scrollY;
    // });
  }

  toggleMenu(){
    this.menuToggle = !this.menuToggle;
  }

}
