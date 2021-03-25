import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
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
import { GET_DIFFICULTIES, StartComponent } from './start.component'

describe('StartComponent', () => {
  let component: StartComponent
  let controller: ApolloTestingController
  let fixture: ComponentFixture<StartComponent>

  const result = {
    data: {
      difficulties: [
        {
          difficultyDescription: `Har du inte kodat förrut? Då börjar du här. Lär dig:
            - strukturera upp hemsidor med **HTML**
            - snygga till din hemsida med **CSS**
            - bygga din första hemsida, ett Pokédex
            - lösa dina matteläxor med **JavaScript**`,
          difficultyId: 'beginner',
          difficultyName: 'Nybörjare',
          difficultyOverviewDescription: `Välj ett spår nedan. Du kan göra dem i vilken ordning du vill.
          Med **HTML** kan du bygga enklare hemsidor.
            **JavaScript** hjälper dig att göra dem interaktiva, och mycket annat.`,
          __typename: 'Difficulty',
        },
      ],
      page: {
        pageBody: `# Välkommen till CoderDojo Online\n\nHär kan du lära dig koda för webben.
          När du är klar kommer du kunna bygga hemsidor, lösa din matteläxor med hjälp av kod,
          och mycket annat skoj. CoderDojo Online är helt gratis och du behöver inget konto.`,
        __typename: 'Page',
      },
      words: [
        {
          word: 'Kom igång',
          __typename: 'Word',
        },
      ],
    },
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StartComponent],
        imports: [ApolloTestingModule, MarkdownModule, RouterTestingModule],
        providers: [
          MarkdownService,
          MarkedOptions,
          { provide: SECURITY_CONTEXT, useValue: 0 },
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(StartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    controller = TestBed.get(ApolloTestingController)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display a spinner if no data', () => {
    const spinner = fixture.nativeElement.querySelector('mat-progress-spinner')

    expect(spinner).toBeTruthy()
  })

  describe('with data', () => {
    beforeEach(() => {
      const op = controller.expectOne(GET_DIFFICULTIES)
      op.flush(result)
      fixture.detectChanges()
    })

    it('should not show any spinner', () => {
      const spinner = fixture.nativeElement.querySelector(
        'mat-progress-spinner'
      )

      expect(spinner).toBeFalsy()
    })

    it('should display a header', () => {
      const header = fixture.nativeElement.querySelector('h1').textContent

      expect(header).toContain('Välkommen till CoderDojo Online')
    })

    it('should add the correct href on the beginner getting started button', () => {
      const linkHref = fixture.nativeElement.querySelector('a').href

      expect(linkHref).toContain('/overview/beginner')
    })
  })
})
