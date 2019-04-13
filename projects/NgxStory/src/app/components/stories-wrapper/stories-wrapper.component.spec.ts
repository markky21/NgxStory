import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesWrapperComponent } from './stories-wrapper.component';

describe('StoriesWrapperComponent', () => {
  let component: StoriesWrapperComponent;
  let fixture: ComponentFixture<StoriesWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
