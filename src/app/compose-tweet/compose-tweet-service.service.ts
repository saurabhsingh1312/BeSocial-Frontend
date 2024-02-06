import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComposeTweetServiceService {
  constructor(private httpClient:HttpClient) { }
  tweetMessage(message: any) :Observable<any>{
    return this.httpClient.post<string>("http://localhost:5000/ogreddit/createpost",message);
  }

  
}
