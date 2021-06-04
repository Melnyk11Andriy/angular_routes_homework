import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient ) { }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url);
  }

  getPost(id: string): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/' + id);
  }
}
