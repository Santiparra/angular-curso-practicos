import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http: HttpClient) { }

  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content}
    this.http.post<{ name: string }>(
      "https://dummy-backend-70f8e-default-rtdb.firebaseio.com/posts.json", 
      postData,
      {
        observe: "response"
      }
    )
    .subscribe(
      responseData => {
        console.log(responseData)
    }, 
      error => {
        this.error.next(error.message)
    })
  }

  //se puede retornar o usar subject
  //responsetype se puede borrar igual q los search params y headers
  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("print", "pretty");
    searchParams = searchParams.append("custom", "key");
    return this.http
    .get<{ [key: string]: Post }>(
      "https://dummy-backend-70f8e-default-rtdb.firebaseio.com/posts.json",
      {
        headers: new HttpHeaders({
          "Custom-Header": "Hello"
        }),
        params: searchParams,
        responseType: "json"
      }
    )
    .pipe(
      map(responseData => {
      const postArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) { 
        postArray.push({ ...responseData[key], id: key })
        }
      }
      return postArray
    }),
    //este cacherrors es para cosas extras no necesariamente vinculado al ui
    catchError(errorRes => {
      //send to analytics
      return throwError(errorRes)
    })
    )
  }

  deletePost() {
    return this.http
      .delete(
        "https://dummy-backend-70f8e-default-rtdb.firebaseio.com/posts.json",
        {
          observe: "events",
          responseType: "text"
        }
      ).pipe(
        tap(event => {
        console.log(event)
        if ( event.type === HttpEventType.Response) {
          console.log(event.body)
        }
      }))        
  }

}
