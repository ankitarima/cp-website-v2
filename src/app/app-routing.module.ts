import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CollegeComponent } from './pages/college/college.component';
import { CollegesComponent } from './pages/colleges/colleges.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CutoffComponent } from './pages/cutoff/cutoff.component';
import { CutoffsComponent } from './pages/cutoffs/cutoffs.component';
import { ExamComponent } from './pages/exam/exam.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'colleges',
    component: CollegesComponent
  },
  {
    path: 'college/:slug',
    component: CollegeComponent
  },
  {
    path: 'college/:slug/cutoff',
    component: CutoffComponent
  },
  {
    path: 'cutoffs',
    component:CutoffsComponent
  },
  {
    path: 'exams',
    component: ExamsComponent
  },
  {
    path: 'exam/:slug',
    component: ExamComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
