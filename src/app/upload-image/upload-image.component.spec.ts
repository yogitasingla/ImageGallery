import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIMageComponent } from './upload-image.component';

describe('UploadIMageComponent', () => {
  let component: UploadIMageComponent;
  let fixture: ComponentFixture<UploadIMageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadIMageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadIMageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
