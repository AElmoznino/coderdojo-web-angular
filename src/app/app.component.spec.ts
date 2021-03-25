import { TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { HeaderComponent } from './core/header/header.component'
import { ChromeCheckComponent } from './core/chrome-check/chrome-check.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ApolloModule } from 'apollo-angular'

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ApolloModule, RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, ChromeCheckComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance

    expect(app).toBeTruthy()
  })
})
