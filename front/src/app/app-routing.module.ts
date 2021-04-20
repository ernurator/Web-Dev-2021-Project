import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { TopicComponent } from './topic/topic.component';

const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'topics/:id', component: TopicComponent}, // Topic name and this topic's posts (Topic and Post components)
  { path: 'topics/:id/new-post', component: CreatePostComponent},
  { path: 'posts/:id', component: PostDetailComponent}, // PostDetail and Comments
  // ! { path: 'recent-posts', component: NewPostsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
