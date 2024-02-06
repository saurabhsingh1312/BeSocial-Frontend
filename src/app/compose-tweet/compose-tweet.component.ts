import { Component, OnInit } from '@angular/core';
import { ComposeTweetServiceService } from './compose-tweet-service.service';

@Component({
  selector: 'app-compose-tweet',
  templateUrl: './compose-tweet.component.html',
  styleUrls: ['./compose-tweet.component.css']
})
export class ComposeTweetComponent implements OnInit {
  message="";
  constructor(private service:ComposeTweetServiceService) { }
  showResult=false;
  success=true;
  ngOnInit(): void {
  }

  addTweet(){
    this.service.tweetMessage(this.message).subscribe(
      data=>{
        console.log(data);
        this.showResult=true;
        this.success=true;
      },
      error=>{
        console.log(error);
        this.showResult=true;
        this.success=false;
      }
    )
  }
  checkMaxLen(text:any):boolean{
    if(text.length>300)return true;
    if(text.length==0)return true;
    return false;
  }
}
