import { Component, OnInit } from '@angular/core';
import {PostService} from "../../servises/post.service";
import {ActivatedRoute} from "@angular/router";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";
import {IPost} from "../../models/post.model";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
postContent: IPost[];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.postService.getPost(params.id).subscribe(value => {
        console.log(value);
        this.postContent = value;
      });
    });

  }

  ngOnInit(): void {
  }

}
