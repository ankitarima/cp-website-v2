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
import { MainService } from './shared/services/main.service';
import { SafeHtmlPipe } from './shared/pipe/safeHtml.pipe';
import { ReviewmenuComponent } from './pages/college/reviewmenu/reviewmenu.component';
import { SocialshareComponent } from './pages/college/socialshare/socialshare.component';
import { SidebarComponent } from './pages/college/sidebar/sidebar.component';
import { CutoffComponent } from './pages/cutoff/cutoff.component';
import { CutoffsComponent } from './pages/cutoffs/cutoffs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CollegesComponent,
    CollegeComponent,
    ExamsComponent,
    ExamComponent,
    ContactComponent,
    ReviewmenuComponent,
    SocialshareComponent,
    SidebarComponent,
    CutoffComponent,
    CutoffsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
