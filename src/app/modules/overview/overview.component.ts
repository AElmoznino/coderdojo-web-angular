import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'
import { handleWords } from '../../shared/wordHelper'

export const GET_OVERVIEW = gql`
  query getOverview($level: String) {
    difficulty(where: { difficultyId: $level }) {
      difficultyName
      difficultyId
      difficultyOverviewDescription
      difficultyDescription
      courses {
        courseDescription
        courseId
        courseName
        lessons {
          lessonId
          lessonShortFacts
          lessonTitle
        }
      }
    }
    words(where: { wordId_in: ["overviewOf", "getStarted", "lesson"] }) {
      word
      wordId
    }
  }
`

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  difficulty: any
  levelId: any
  words: object
  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.levelId = params.get('level')
    })

    this.difficulty = this.apollo
      .watchQuery<any>({
        query: GET_OVERVIEW,
        variables: {
          level: this.levelId,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        this.difficulty = data.difficulty
        this.words = handleWords(data.words)
      })
  }
}
