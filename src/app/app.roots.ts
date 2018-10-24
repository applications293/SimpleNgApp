import { Component } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AboutComponent } from "./about/about.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { DetalsComponent } from "./detals/detals.component";

export const AppRoutes = [
    //{path: '', component:LoginComponent}
        {path: 'details', component: DetalsComponent, children: [
        {path: 'about', component:AboutComponent},
        {path: 'statistics', component: StatisticsComponent}
    ]}

]