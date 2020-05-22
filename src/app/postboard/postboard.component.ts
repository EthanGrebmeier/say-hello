import { Component, OnInit } from '@angular/core';
import { PostRenderComponent } from '../post-render/post-render.component';
import {trigger, keyframes, transition, style, animate, stagger, query} from '@angular/animations';


@Component({
  selector: 'app-post-board',
  templateUrl: './postboard.component.html',
  styleUrls: ['./postboard.component.scss'],
  animations: [
    trigger('fade', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', [
          stagger('500ms', [
            animate('.5s', keyframes([
              style({opacity: 0}),
              style({opacity: 100})
            ]))
          ])
        ], {optional: true})
      ])
    ])
  ]
})


export class PostBoardComponent implements OnInit {
  postArray: any[] = new Array(); 
  subArrays: any[] = new Array(); 
  subPostArray1: any[] = new Array();
  subPostArray2: any[] = new Array();
  subPostArray3: any[] = new Array();
  subPostArray4: any[] = new Array();
  subPostArray5: any[] = new Array();

  API_URL: string = 'https://say-hello-server.herokuapp.com/post';  
  hello: string = 'hello';


  loading: boolean = true; 

  placeHolder: object = {
    color: "#2b95dbcc",
    emoji: "🐶",
    message: "Placeholder",
    name: "Ethan Grebmeier",
    posted: "5/5/2020",
    _id: "5eb22004561b584e96e36687",
  }

  constructor() { }

  ngOnInit(): void {
    this.loader();
  }


  async loader(){
    this.subArrays = []; 
    this.subArrays.push(this.subPostArray1);
    this.subArrays.push(this.subPostArray2);
    this.subArrays.push(this.subPostArray3);
    this.subArrays.push(this.subPostArray4);
    this.subArrays.push(this.subPostArray5);


    this.postArray = [];
    await this.getAllPosts();
    
    
    if(this.postArray.length == 0){
    
      setTimeout(() => {

        if(this.postArray.length != 0){
          console.log(this.postArray);
          this.loading = false;
          this.splitPosts();
          for (let i = 0; i < this.subArrays.length; i++){
            let j = this.subArrays[i].length; 
            while(this.subArrays[i].length < 5){
              this.subArrays[i][j] = this.placeHolder;
              j++;
            }
          }
        }
       
        else{
          this.loader() 
        }
        
      }, 2000); 
    }
    
  }

  postColor(post){
    return {
      'background': post.color
    } 
  }

  async getAllPosts(){
    fetch(this.API_URL)
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
      posts.forEach(post => { 
        this.postArray.push(post);
      });
    });
  }

  splitPosts(){
    console.log("Array: " + this.postArray);
    console.log("Length: "+ this.postArray.length);
    for (let post = 0; post < this.postArray.length ; post++){
      console.log(post);
      if(this.postArray[post].posted){
        let converted = new Date (this.postArray[post].posted);
        this.postArray[post].posted = `${converted.getMonth() + 1}/${converted.getDate()}/${converted.getFullYear()}`;
      }
      if (post < 5){
      
        this.subArrays[0].push(this.postArray[post]);
      } else if (post < 10){
        this.subArrays[1].push(this.postArray[post]);
      } else if (post < 15){
        this.subArrays[2].push(this.postArray[post]);
      } else if (post < 20){
        this.subArrays[3].push(this.postArray[post]);
      } else {
        this.subArrays[4].push(this.postArray[post]);
      }
    }
  }

  
}
