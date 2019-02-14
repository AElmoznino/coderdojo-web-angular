import { Component, OnInit } from '@angular/core'
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'
import { ActivatedRoute } from '@angular/router'

const GET_LESSON = gql`
  query GetLesson($lesson: String) {
    lesson(where: { lessonId: $lesson }) {
      difficultyLevel
      lessonBody
      lessonIntro
      lessonObjectives
      lessonShortFacts
      lessonTitle
      nextLesson {
        lessonId
        lessonTitle
      }
      references
    }
    words(
      where: { wordId_in: ["nextLesson", "continue", "greatJobLesson", "back"] }
    ) {
      word
      wordId
    }
  }
`

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  lesson: any
  lessonId: any
  nextLesson: string
  continue: string
  greatJobLesson: string
  back: string

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.lessonId = params.get('lessonId')
      this.fetchData()
    })

    this.lesson = this.fetchData()
  }

  fetchData() {
    this.apollo
      .watchQuery<any>({
        query: GET_LESSON,
        variables: {
          lesson: this.lessonId,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        this.lesson = data.lesson
        this.nextLesson = data.words.find(w => w.wordId === 'nextLesson').word
        this.continue = data.words.find(w => w.wordId === 'continue').word
        this.greatJobLesson = data.words.find(
          w => w.wordId === 'greatJobLesson',
        ).word
        this.back = data.words.find(w => w.wordId === 'back').word
      })
  }
}
