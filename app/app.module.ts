import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DataService } from './services/data.service';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './views/home/home.component';
import { LoginViewComponent } from './views/login/login.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeViewComponent,
    CatalogViewComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
  ],
  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
