import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostboardComponent } from './postboard.component';

describe('PostboardComponent', () => {
  let component: PostboardComponent;
  let fixture: ComponentFixture<PostboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
