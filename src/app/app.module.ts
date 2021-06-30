import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { CollegeComponent } from './pages/college/college.component';
import { CollegesComponent } from './pages/colleges/colleges.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExamComponent } from './pages/exam/exam.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { HomeComponent } from './pages/home/home.component';
import { MainService } from './shared/main.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CollegesComponent,
    CollegeComponent,
    ExamsComponent,
    ExamComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' })
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
