import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateCitationComponent } from './create-citation/create-citation.component';

export const routes: Routes = [
    {path:'home', component:HomepageComponent},
    {path:'citation', component:CreateCitationComponent}
];
