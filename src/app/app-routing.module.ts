import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './pages/stats/stats.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'stas', component: StatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
