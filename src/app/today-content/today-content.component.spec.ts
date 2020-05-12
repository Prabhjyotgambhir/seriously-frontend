import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayContentComponent } from './today-content.component';

describe('TodayContentComponent', () => {
  let component: TodayContentComponent;
  let fixture: ComponentFixture<TodayContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
