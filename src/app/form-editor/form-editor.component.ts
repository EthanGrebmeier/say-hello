import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {trigger, keyframes, transition, style, animate, stagger, query} from '@angular/animations';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
  animations: [
    trigger('fade', [
      transition('boardView => aboutView', [
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
export class FormEditorComponent{


  message: string =  'Sample Message'; 
  name: string = 'John Doe'; 
  color: string = '';
  emoji: string = ''; 
  API_URL: string = 'https://say-hello-server.herokuapp.com/post';  
  
  boardView: boolean = true;
  formView: boolean = false;
  aboutView: boolean = false; 

  successfulPost: boolean = false; 

  postedMessage: string;
  postedName: string;
  postedColor: string;
  postedEmoji: string; 

  viewStatus: string = "Make a Post";
  aboutStatus: string = "About"

  modalShow: boolean = false; 
  modalContent: string; 
  modalContent2: string; 

  messageWhole = this.fb.group({
    message: ['', Validators.required],
    name: [''],
    color: [''],
    emoji: ['']
  });

  onSubmit(){
    console.log("hello");
    fetch(this.API_URL, {
      method: 'POST', 
      body: JSON.stringify(this.messageWhole.value),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      console.log(response);
      if(response.status === 200){
        console.log("success");

        this.postedMessage = this.message;
        this.postedName = this.name;
        this.postedColor = this.color;
        this.postedEmoji = this.emoji; 

        this.boardView = true;
        this.successfulPost = true;
        this.formView = false; 
        this.viewStatus = "Make a Post"
        this.modalContent = '';
        this.modalContent2 = '';
    } else {
      this.handleFail(response.status);
    }
  }
    )  
  }

  handleFail(status: number){
    console.log("failed");
    if (status == 696){
      this.modalContent = "Error: Post contains profanity";
    } else if (status = 322){
      this.modalContent = "Error: Too many post attempts";
      this.modalContent2 = "One post per 15 minutes"
    }
  }
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    console.log("test");
  }


  changeViewPostBoard(){
    if (this.boardView){
      this.boardView = false;
      this.viewStatus = "View 'Hellos'";
      this.formView = true;
      this.aboutView = false; 
    } else {
      this.boardView = true;
      this.viewStatus = "Make a Post"
      this.formView = false;
      this.aboutView = false; 
      this.aboutStatus = "About";
    }
  }

  changeViewAbout(){
    if (this.boardView || this.formView){
      this.boardView = false;
      this.formView = false;
      this.aboutView = true;
      this.viewStatus = "View 'Hellos'";
      this.aboutStatus = "Make a Post";
    } else {
      this.aboutView = false; 
      this.boardView = false;
      this.aboutStatus = "About"
      this.formView = true;
    }
  }

  modalClass(){
    let myClasses = {
      modalShow: this.modalShow,
      modalNotShow: !this.modalShow
    };

    return myClasses; 
  }

}
