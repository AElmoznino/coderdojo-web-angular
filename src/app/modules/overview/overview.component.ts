import { Component, OnInit } from '@angular/core'
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'
import { ActivatedRoute } from '@angular/router'

const GET_OVERVIEW = gql`
  query getOverview($level: String) {
    difficulty(where: { difficultyId: $level }) {
      difficultyName
      difficultyId
      difficultyOverviewDescription
      difficultyDescription
      courses(where: { status: PUBLISHED }) {
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
    words(where: { wordId_in: ["overviewOf", "getStarted"] }) {
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
  overviewOf: string
  getStarted: string
  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
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
        this.overviewOf = data.words.find(w => w.wordId === 'overviewOf').word
        this.getStarted = data.words.find(w => w.wordId === 'getStarted').word
      })
  }
}
