import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { OverviewComponent, GET_OVERVIEW } from './overview.component'
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown'
import { RouterTestingModule } from '@angular/router/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing'

describe('OverviewComponent', () => {
  let controller: ApolloTestingController
  let component: OverviewComponent
  let fixture: ComponentFixture<OverviewComponent>

  const response = {
    data: {
      difficulty: {
        difficultyName: 'Nybörjare',
        difficultyId: 'beginner',
        difficultyOverviewDescription: `Välj ett spår nedan. Du kan göra dem i vilken ordning du vill.
          Med **HTML** kan du bygga enklare hemsidor.
          **JavaScript** hjälper dig att göra dem interaktiva, och mycket annat.`,
        difficultyDescription: `Har du inte kodat förrut? Då börjar du här. Lär dig:
          - strukturera upp hemsidor med **HTML**
          - snygga till din hemsida med **CSS**
          - bygga din första hemsida, ett Pokédex
          - lösa dina matteläxor med **JavaScript**`,
        courses: [
          {
            courseDescription: `Du får lära dig JavaScript genom så kallad Testdriven utveckling (förkortas **TDD**)
              som är det rätta sättet att koda. Har du aldrig skrivit JavaScript förrut så börjar du här.`,
            courseId: 'js-intro',
            courseName: 'Introduktion till JavaScript',
            lessons: [
              {
                lessonId: 'js-intro-1',
                lessonShortFacts:
                  'Lär dig vad TDD är och lös enklare matte-uppgifter',
                lessonTitle: 'Introduktion till TDD & Siffror i JavaScript',
                __typename: 'Lesson',
              },
              {
                lessonId: 'js-intro-2',
                lessonShortFacts: 'Lär dig använda text i JavaScript',
                lessonTitle: 'Text i JavaScript',
                __typename: 'Lesson',
              },
            ],
            __typename: 'Course',
          },
        ],
        __typename: 'Difficulty',
      },
      words: [
        {
          word: 'Översikt av',
          wordId: 'overviewOf',
          __typename: 'Word',
        },
        {
          word: 'Kom igång',
          wordId: 'getStarted',
          __typename: 'Word',
        },
      ],
    },
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      imports: [ApolloTestingModule, MarkdownModule, RouterTestingModule],
      providers: [MarkdownService, MarkedOptions],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    controller = TestBed.get(ApolloTestingController)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display a spinner when no data', () => {
    const spinner = fixture.nativeElement.querySelector('mat-progress-spinner')

    expect(spinner).toBeTruthy()
  })

  describe('with data', () => {
    beforeEach(() => {
      const op = controller.expectOne(GET_OVERVIEW)
      op.flush(response)
      fixture.detectChanges()
    })

    it('should display no spinner', () => {
      const spinner = fixture.nativeElement.querySelector(
        'mat-progress-spinner',
      )

      expect(spinner).toBeFalsy()
    })

    it('should display a header', () => {
      const header = fixture.nativeElement.querySelector('h1').textContent

      expect(header).toContain('Översikt av Nybörjare')
    })

    it('should display a subheader for the first course', () => {
      const header = fixture.nativeElement.querySelector('h2').textContent

      expect(header).toContain('Introduktion till JavaScript')
    })

    it('should have the correct link for the first lesson', () => {
      const link = fixture.nativeElement.querySelector('a').href

      expect(link).toContain('/lesson/js-intro-1')
    })
  })
})
