import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorsSubscription: Subscription;

  constructor( private postService: PostsService ) {}
  
  ngOnInit(): void {
    this.errorsSubscription = this.postService.error
    .subscribe(errorMsg => {
      this.error = errorMsg
    });

    this.isFetching = true;
    this.postService.fetchPosts()
    .subscribe(
      posts => {
        this.isFetching =false;
        this.loadedPosts = posts
    }, 
      error => {
        this.isFetching = false;
        this.error = error.message
    })
  }

  ngOnDestroy(): void {
    this.errorsSubscription.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts()
    .subscribe(
      posts => {
        this.isFetching =false;
        this.loadedPosts = posts
    }, 
      error => {
        this.isFetching = false;
        this.error = error.message
    })
  }

  onClearPosts() {
    this.postService.deletePost()
      .subscribe( () => {
          this.loadedPosts = [];
        }
      )
  }

  onHandleError() {
    this.error = null
  }

}
