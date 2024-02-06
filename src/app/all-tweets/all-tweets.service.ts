import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class AllTweetsService {

  constructor(private http:HttpClient) { }

  getAllTweets(filter:string):Observable<Array<Post>>{
    var url="";
    if(filter=="top")url="http://localhost:5000/ogreddit/posts/top";
    else if (filter=="newest")url="http://localhost:5000/ogreddit/posts/newest";
    return this.http.get<Array<Post>>(url);
    
  }

  getTweet(id:number):Observable<Post>{
    var url="http://localhost:5000/ogreddit/post/"+id;
    return this.http.get<Post>(url);
  }
  addLike(id:number,value:number):Observable<String>{
    var url="http://localhost:5000/ogreddit/like/"+id;
    return this.http.put<String>(url,value);
  }
  addDislike(id:number,value:number):Observable<String>{
    var url="http://localhost:5000/ogreddit/dislike/"+id;
    return this.http.put<String>(url,value);
  }
  addComment(id:number,body:String):Observable<String>{
    var url="http://localhost:5000/ogreddit/addcomment/"+id;
    return this.http.put<String>(url,body);
  }
  searchTweet(body:String):Observable<number>{
    console.log(body);
    var url="http://localhost:5000/ogreddit/searchtweet";
    return this.http.post<number>(url,body);
  }
  searchTrends():Observable<String[]>{
    var url="http://localhost:5000/ogreddit/searchtrends";
    return this.http.get<String[]>(url);
  }
}
