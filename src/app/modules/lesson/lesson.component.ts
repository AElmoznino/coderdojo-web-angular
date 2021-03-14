import { Component, OnInit } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { ActivatedRoute } from '@angular/router'
import { handleWords } from '../../shared/wordHelper'
import {
  GetLesson,
  GetLessonVariables,
} from 'src/graphql/__generated__/GetLesson'
import { GET_LESSON } from 'src/graphql/GetLesson'

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  lesson: any
  lessonId: any
  words: object

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.lessonId = params.get('lessonId')
      this.fetchData()
    })

    this.lesson = this.fetchData()
  }

  fetchData() {
    this.apollo
      .watchQuery<GetLesson, GetLessonVariables>({
        query: GET_LESSON,
        variables: {
          lesson: this.lessonId,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        this.lesson = data.lesson
        this.words = handleWords(data.words)
      })
  }
}
