import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { HomeComponent } from './pages/home/home.component';

import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PlaguesComponent } from './pages/plagues/plagues.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideHttpClient } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { PlagaCardComponent } from './components/plaga-card/plaga-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RouterLink } from '@angular/router';
import { PlagaDetailComponent } from './components/plaga-detail/plaga-detail.component';
import { PlagaImagePipe } from './pipes/plaga-image.pipe';


import { RouterModule } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { Color, ScaleType } from '@swimlane/ngx-charts';
import { XinaComponent } from './pages/xina/xina.component';

import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    StatsComponent,
    HomeComponent,
    NosotrosComponent,
    LoginPageComponent,
    RegisterPageComponent,
   XinaComponent,
   PlagaImagePipe,
    AboutusComponent,
    PlaguesComponent,
    PlagaCardComponent,
    PlagaDetailComponent,
    HeaderComponent,
    FooterComponent,
      ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule,
    NgxChartsModule,
    IonicStorageModule.forRoot(),
    RouterLink,
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],  bootstrap: [AppComponent]
})
export class AppModule { }