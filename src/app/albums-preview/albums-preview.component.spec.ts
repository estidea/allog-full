import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsPreviewComponent } from './albums-preview.component';

describe('AlbumsPreviewComponent', () => {
  let component: AlbumsPreviewComponent;
  let fixture: ComponentFixture<AlbumsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
