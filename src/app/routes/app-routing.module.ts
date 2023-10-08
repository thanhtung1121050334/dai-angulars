import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../pages/index/index.component';
import { InformationComponent } from '../pages/information/information.component';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'info', component: InformationComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
