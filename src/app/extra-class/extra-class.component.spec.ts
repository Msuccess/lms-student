import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraClassComponent } from './extra-class.component';

describe('ExtraClassComponent', () => {
  let component: ExtraClassComponent;
  let fixture: ComponentFixture<ExtraClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
