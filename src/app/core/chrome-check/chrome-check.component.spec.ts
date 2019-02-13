import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromeCheckComponent } from './chrome-check.component';

describe('ChromeCheckComponent', () => {
  let component: ChromeCheckComponent;
  let fixture: ComponentFixture<ChromeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
