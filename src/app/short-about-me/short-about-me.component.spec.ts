import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAboutMeComponent } from './short-about-me.component';

describe('ShortAboutMeComponent', () => {
  let component: ShortAboutMeComponent;
  let fixture: ComponentFixture<ShortAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
