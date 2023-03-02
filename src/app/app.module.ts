import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResponnsiveNavbarOverlayComponent } from './responnsive-navbar-overlay/responnsive-navbar-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResponnsiveNavbarOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
