import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescentInstagramComponent } from './rescent-instagram.component';

describe('RescentInstagramComponent', () => {
  let component: RescentInstagramComponent;
  let fixture: ComponentFixture<RescentInstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescentInstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescentInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
