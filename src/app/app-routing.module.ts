import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './pages/stats/stats.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { XinaComponent } from './pages/xina/xina.component';
import { PlaguesComponent } from './pages/plagues/plagues.component';
import { PlagaDetailComponent } from './components/plaga-detail/plaga-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'stas', component: StatsComponent},
  {path: 'xina', component: XinaComponent},
  {path: '**', redirectTo: '/login'}
  { path: 'plaga', component: PlaguesComponent },
  { path: 'plagas/:id', component: PlagaDetailComponent }, // Ruta para detalles de la plaga

  {path: '**', redirectTo: '/home'},
   // Ruta para editar la plaga
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
