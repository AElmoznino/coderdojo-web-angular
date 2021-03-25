import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing'
import {
  MarkdownModule,
  MarkdownService,
  MarkedOptions,
  SECURITY_CONTEXT,
} from 'ngx-markdown'
import { of } from 'rxjs'
import { GET_LESSON, LessonComponent } from './lesson.component'

describe('LessonComponent', () => {
  let component: LessonComponent
  let controller: ApolloTestingController
  let fixture: ComponentFixture<LessonComponent>

  const response = {
    data: {
      lesson: {
        difficultyLevel: 'beginner',
        instructor: 'André',
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

  beforeEach(
    waitForAsync(() => {
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
                get: () => 'js-intro',
              }),
            },
          },
          MarkdownService,
          MarkedOptions,
          { provide: SECURITY_CONTEXT, useValue: 0 },
        ],
      }).compileComponents()
    })
  )

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
        'mat-progress-spinner'
      )

      expect(spinner).toBeFalsy()
    })

    it('renders a header when it has received data', () => {
      expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
        'Introduktion till TDD & Siffror i JavaScript'
      )
    })

    it('should have a Next lesson link if there is a NextLesson', () => {
      expect(fixture.nativeElement.querySelector('a').textContent).toContain(
        'Fortsätt'
      )

      expect(fixture.nativeElement.querySelector('a').href).toContain(
        '/lesson/js-intro-2'
      )
    })

    it('should render an info box with lesson objectives', () => {
      const box = fixture.nativeElement.querySelector('.info-box').textContent

      expect(box).toContain('Du kommer lära dig')
    })
  })
})
