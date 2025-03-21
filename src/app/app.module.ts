import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { HomeComponent } from './pages/home/home.component';
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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    StatsComponent,
    HomeComponent,
    AboutusComponent,
    PlaguesComponent,
    HeaderComponent,
    FooterComponent,
    PlagaCardComponent,
    PlagaDetailComponent,
    PlagaImagePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    RouterLink
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],  bootstrap: [AppComponent]
})
export class AppModule { }