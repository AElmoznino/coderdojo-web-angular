import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ChromeCheckComponent } from './chrome-check.component'

describe('ChromeCheckComponent', () => {
  let component: ChromeCheckComponent
  let fixture: ComponentFixture<ChromeCheckComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromeCheckComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromeCheckComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
