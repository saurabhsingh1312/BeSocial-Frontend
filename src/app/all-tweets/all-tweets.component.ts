import { Component, OnInit } from '@angular/core';
import { AllTweetsService } from './all-tweets.service';
import {Post} from "./Post";

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.css']
})
export class AllTweetsComponent implements OnInit {
  // tweets=[{"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  // {"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  // {"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  // {"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  // {"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  // {"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  // {"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  //         {"id":28,"body":"Main Tweet2","likes":0,"dislikes":0,"currentLevel":0,"comments":null,"time":"2022-10-27T18:30:00.000+00:00"},
  //         ];

  // currentTrends:String[]=["#INDvsPAK","#ElClassico"];
  // //openedTweet!:Post;
  // openedTweet={"id":34,"body":"Main Tweet1","likes":1111,"dislikes":1,"currentLevel":0,"comments":this.tweets,"time":"2022-10-27T18:30:00.000+00:00"};
  
  //{{{{{CHECK ATRRIBUTES NAMES LIKE PUBLISHTIME OR TIME ACCORDING TO POST AND SQL}}}}}
  tweets:Array<Post>=[];
  currentTrends!:String[];
  openedTweet!:Post;

  message="";
  searchQuery="";
  commentToSend="";
  showSelectedView=false;
  showCommentInput=-1;
  p=1;
  stackPath:Array<number>=[];

  constructor(private service:AllTweetsService) { }

  ngOnInit(): void {
    this.filterTweets("top");
    this.showTrends();
  }
  filterTweets(filter:string){
    this.service.getAllTweets(filter).subscribe(
      (data)=>this.tweets=data,
      (err)=>console.log(err)
    );
  }


  showSpecificTweet(id:number){
    this.service.getTweet(id).subscribe(
      (data)=>{
        this.openedTweet=data;
        this.showSelectedView=true;
      },
      (error)=>console.log(error)
    )
    
    
  }
  likeTweet(id:number,value:number){
    this.message="liked";
    this.service.addLike(id,value+1).subscribe(
      (data)=>console.log(data),
      (error)=>console.log(error)
    )
  }
  dislikeTweet(id:number,value:number){
    this.service.addDislike(id,value+1).subscribe(
      (data)=>console.log(data),
      (error)=>console.log(error)
    )
  }
  commentTweet(id:number){
    this.service.addComment(id,this.commentToSend).subscribe(
      (data)=>{
        console.log(data);
        this.showCommentInput=-1;
      },
      (error)=>console.log(error)
    )
  }
  showSearchedTweet(){
    this.showSelectedView=true;
    this.service.searchTweet(this.searchQuery).subscribe(
      (data)=>this.showSpecificTweet(data),
      (error)=>console.log(error)
    )
  }
  showTrends(){
    this.service.searchTrends().subscribe(
      (data)=>this.currentTrends=data,
      (err)=>console.log(err)
    )
  }


  moveBack(){
    this.stackPath.splice(this.stackPath.length-1, 1);
    if(this.stackPath.length==0){
      this.showSelectedView=false;
      return;
    }
    this.showSpecificTweet(this.stackPath[this.stackPath.length-1]);
  }
}
