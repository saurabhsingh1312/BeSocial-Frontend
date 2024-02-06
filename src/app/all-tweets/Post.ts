export class Post{
    id!:number;
    body!:String;
    publishTime!:Date;
    likes!:number;
    dislikes!:number;
    currentLevel!:number;
    comments!:Array<Post>
}