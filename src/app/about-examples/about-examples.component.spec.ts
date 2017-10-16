import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExamplesComponent } from './about-examples.component';

describe('AboutExamplesComponent', () => {
  let component: AboutExamplesComponent;
  let fixture: ComponentFixture<AboutExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
