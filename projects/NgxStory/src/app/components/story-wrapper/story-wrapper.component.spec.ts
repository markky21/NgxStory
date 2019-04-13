import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryWrapperComponent } from './story-wrapper.component';

describe('StoryWrapperComponent', () => {
  let component: StoryWrapperComponent;
  let fixture: ComponentFixture<StoryWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
