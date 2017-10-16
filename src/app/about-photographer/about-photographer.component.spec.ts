import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhotographerComponent } from './about-photographer.component';

describe('AboutPhotographerComponent', () => {
  let component: AboutPhotographerComponent;
  let fixture: ComponentFixture<AboutPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
