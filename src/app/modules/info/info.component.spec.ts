import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
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
import { GET_PAGE, InfoComponent } from './info.component'

describe('InfoComponent', () => {
  let component: InfoComponent
  let controller: ApolloTestingController
  let fixture: ComponentFixture<InfoComponent>

  const response = {
    data: {
      page: {
        pageBody:
          '# JavaScript\n\n### Matematik/Aritmetik:\n\n- **Addition**: `const summa = a + b`',
        __typename: 'Page',
      },
    },
  }

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ApolloTestingModule, MarkdownModule],
        declarations: [InfoComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              paramMap: of({
                get: () => 'references',
              }),
            },
          },
          MarkdownService,
          MarkedOptions,
          { provide: SECURITY_CONTEXT, useValue: 0 },
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    controller = TestBed.get(ApolloTestingController)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
    expect(component.pageId).toBe('references')
  })

  xit('calls fetchData on mount', () => {
    /* TODO: Figure out why it doesn't get called
    Getting Error: <toHaveBeenCalled> : Expected a spy, but got Function. */
    expect(component.fetchData).toHaveBeenCalled()
  })

  it('renders a spinner until there is data', () => {
    const spinner = fixture.nativeElement.querySelector('mat-progress-spinner')

    expect(spinner).toBeTruthy()
  })

  it('renders when it has received data', () => {
    const op = controller.expectOne(GET_PAGE)

    op.flush(response)
    fixture.detectChanges()

    const spinner = fixture.nativeElement.querySelector('mat-progress-spinner')

    expect(spinner).toBeFalsy()

    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      'JavaScript'
    )
  })
})
