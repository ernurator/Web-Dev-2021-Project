import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {posts} from '../posts';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute) {
  }

  like(post: any): void {
    post.likes += 1;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postIDFromRoute = Number(routeParams.get('id'));
    this.post = posts.find(post => post.id === postIDFromRoute);
  }

}
