import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing'

import { HeaderComponent, WORDS_QUERY } from './header.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { By } from '@angular/platform-browser'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let controller: ApolloTestingController
  let fixture: ComponentFixture<HeaderComponent>

  const response = {
    data: {
      words: [
        {
          word: 'Startsidan',
          wordId: 'homePage',
          __typename: 'Word',
        },
        {
          word: 'Referenser',
          wordId: 'references',
          __typename: 'Word',
        },
        {
          word: 'Om',
          wordId: 'about',
          __typename: 'Word',
        },
        {
          word: 'Språk',
          wordId: 'language',
          __typename: 'Word',
        },
      ],
    },
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      declarations: [HeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    controller = TestBed.get(ApolloTestingController)

    const op = controller.expectOne(WORDS_QUERY)
    op.flush(response)
    fixture.detectChanges()
  })

  it('should create HeaderComponent', () => {
    expect(component).toBeTruthy()
  })

  it('should have a logo', () => {
    expect(fixture.nativeElement.querySelector('img').src).toEqual(
      'http://localhost:9876/assets/cd-logo.png',
    )
  })

  it('should have 3 buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'))

    expect(buttons.length).toBe(3)
  })

  it('should have a language picker', () => {
    const languagePicker = fixture.nativeElement.querySelector(
      'app-language-picker',
    )

    expect(languagePicker).toBeTruthy()
  })
})
