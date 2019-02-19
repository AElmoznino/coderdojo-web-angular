import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LessonComponent, GET_LESSON } from './lesson.component'
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material'
import { RouterTestingModule } from '@angular/router/testing'
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing'

describe('LessonComponent', () => {
  let component: LessonComponent
  let controller: ApolloTestingController
  let fixture: ComponentFixture<LessonComponent>

  const response = {
    data: {
      lesson: {
        difficultyLevel: 'beginner',
        lessonBody: `## Varför är TDD så bra då?\nMan använder sig av TDD för att:
          - veta när ens kod fungerar som man har tänkt sig,\n- veta att ens kod inte går sönder av misstag.`,
        lessonIntro: `**TDD** innebär att **man skriver tester innan man skriver sin kod**, 
        det är på så sätt testerna driver på utvecklingen (därav namnet).`,
        lessonObjectives: `Du kommer lära dig:
          1. vad TDD är
          2. skriva JavaScript-funktioner
          3. lösa enklare matteuppgifter med JS`,
        lessonShortFacts: 'Lär dig vad TDD är och lös enklare matte-uppgifter',
        lessonTitle: 'Introduktion till TDD & Siffror i JavaScript',
        nextLesson: {
          lessonId: 'js-intro-2',
          lessonTitle: 'Text i JavaScript',
          __typename: 'Lesson',
        },
        references: `## Fördjupning\n- Lär dig mer om JavaScripts tre typer av variabler **var**, **let** och **const** med denna video (på engelska):
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sjyJBL5fkp8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          - Läs mer om matematik i JavaScript på [Mozillas hemsida (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators).`,
        __typename: 'Lesson',
      },
      words: [
        {
          word: 'Nästa lektion',
          wordId: 'nextLesson',
          __typename: 'Word',
        },
        {
          word: 'Fortsätt',
          wordId: 'continue',
          __typename: 'Word',
        },
        {
          word: 'Bra jobbat, du är färdig! Tillbaka till översiktssidan',
          wordId: 'greatJobLesson',
          __typename: 'Word',
        },
        {
          word: 'Tillbaka',
          wordId: 'back',
          __typename: 'Word',
        },
      ],
    },
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        MarkdownModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterTestingModule,
      ],
      declarations: [LessonComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({
              get: () => {
                return 'js-intro'
              },
            }),
          },
        },
        MarkdownService,
        MarkedOptions,
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    controller = TestBed.get(ApolloTestingController)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display a spinner until there is data', () => {
    const spinner = fixture.nativeElement.querySelector('mat-progress-spinner')

    expect(spinner).toBeTruthy()
  })

  describe('with response', () => {
    beforeEach(() => {
      const op = controller.expectOne(GET_LESSON)

      op.flush(response)
      fixture.detectChanges()
    })

    it('renders no spinner when it has received data', () => {
      const spinner = fixture.nativeElement.querySelector(
        'mat-progress-spinner',
      )

      expect(spinner).toBeFalsy()
    })

    it('renders a header when it has received data', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
        'Introduktion till TDD & Siffror i JavaScript',
      )
    })

    it('should have a Next lesson link if there is a NextLesson', () => {
      expect(fixture.nativeElement.querySelector('a').textContent).toContain(
        'Fortsätt',
      )

      expect(fixture.nativeElement.querySelector('a').href).toContain(
        '/lesson/js-intro-2',
      )
    })

    it('should render an info box with lesson objectives', () => {
      const box = fixture.nativeElement.querySelector('.info-box').textContent

      expect(box).toContain('Du kommer lära dig')
    })
  })
})
