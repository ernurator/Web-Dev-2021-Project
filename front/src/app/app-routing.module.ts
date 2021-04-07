import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  // TODO add other paths
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // TODO { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
