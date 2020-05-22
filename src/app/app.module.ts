import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostBoardComponent } from './postboard/postboard.component';
import { PostRenderComponent } from './post-render/post-render.component';
import { FormEditorComponent } from './form-editor/form-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PostBoardComponent,
    PostRenderComponent,
    FormEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
