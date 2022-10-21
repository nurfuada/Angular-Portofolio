import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path:'home-component',component: HomeComponent
  },
  {
    path: 'project-component', component: ProjectComponent
  },
  {
    path:'blog-component', component:BlogComponent
  },
  {
    path:'contact-component', component:ContactComponent
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
