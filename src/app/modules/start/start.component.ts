import { Component, OnInit } from '@angular/core'
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'

const GET_DIFFICULTIES = gql`
  query difficulties {
    difficulties {
      difficultyDescription
      difficultyId
      difficultyName
      difficultyOverviewDescription
    }
    page(where: { pageId: "start" }) {
      pageBody
    }
    words(where: { wordId: "getStarted" }) {
      word
    }
  }
`
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  difficulties: any
  pageBody: any
  getStarted: string

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.difficulties = this.apollo
      .watchQuery<any>({
        query: GET_DIFFICULTIES,
      })
      .valueChanges.subscribe(({ data }) => {
        this.difficulties = data.difficulties
        this.pageBody = data.page.pageBody
        this.getStarted = data.words[0].word
      })
  }
}
