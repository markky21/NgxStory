import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleStoryComponent } from './sample-story.component';

describe('SampleStoryComponent', () => {
  let component: SampleStoryComponent;
  let fixture: ComponentFixture<SampleStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
