import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LessonComponent } from './lesson.component'
import { MarkdownModule } from 'ngx-markdown'
import { ActivatedRoute } from '@angular/router'
import { of } from 'rxjs'
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material'
import { RouterTestingModule } from '@angular/router/testing'
import { ApolloTestingModule } from 'apollo-angular/testing'

fdescribe('LessonComponent', () => {
  let component: LessonComponent
  let fixture: ComponentFixture<LessonComponent>

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
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display a spinner until there is data', () => {
    const spinner = fixture.nativeElement.querySelector('mat-progress-spinner')

    expect(spinner).toBeTruthy()
  })

  xit('renders when it has received data', () => {
    // TODO: Add test
  })
})
