import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Routes } from "@angular/router";
export const app_routes:Routes=[
//    {path:"",component:AppComponent},
    {path:"content1",component:Content1Component},
    {path:"content2",component:Content2Component},
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
];