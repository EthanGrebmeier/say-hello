import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-render',
  templateUrl: './post-render.component.html',
  styleUrls: ['./post-render.component.scss']
})
export class PostRenderComponent implements OnInit {

  constructor() { 
    
  }

  @Input() message: string =  'Sample Message'; 
  @Input() name: string = 'John Doe'; 
  @Input() color: string = '';
  @Input() emoji: string = ''; 

  ngOnInit(): void {
  }

  postColor(){
    return {
      'background': this.color
    } 
  }

}
