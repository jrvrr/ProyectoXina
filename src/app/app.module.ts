import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { HomeComponent } from './pages/home/home.component';
import { PlagasComponent } from './pages/plagas/plagas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    StatsComponent,
    HomeComponent,
    PlagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
