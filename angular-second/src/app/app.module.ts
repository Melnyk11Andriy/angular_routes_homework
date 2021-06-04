import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import {
  UsersComponent, UserComponent, UserDetailsComponent,
  PostsComponent,PostComponent, PostDetailsComponent, CommentsComponent
} from './components/index.components';
import {RouterModule, Routes} from "@angular/router";
import {UserDeactivatorService, PostActivatorService, CommentsResolveService} from "./servises/index.services";

let routes: Routes = [
  {path: 'users', component: UsersComponent,
    canDeactivate: [UserDeactivatorService],
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]},
  {path: 'posts', component: PostsComponent, canActivate: [PostActivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent},
  {path: 'comments', component: CommentsComponent, resolve: {zzz: CommentsResolveService}}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
