import { ApiPostsService } from './services/api-posts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { RouterModule } from "@angular/router";
import { app_routes } from "./app.routes";
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    Content1Component,
    Content2Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(app_routes)
  ],
  providers: [ApiPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
