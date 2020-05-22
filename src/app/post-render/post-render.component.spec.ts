import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRenderComponent } from './post-render.component';

describe('PostRenderComponent', () => {
  let component: PostRenderComponent;
  let fixture: ComponentFixture<PostRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
