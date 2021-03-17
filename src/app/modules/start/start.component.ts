import { Component, OnInit } from '@angular/core'
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'
import { difficulties } from 'src/graphql/__generated__/difficulties'
import { GET_DIFFICULTIES } from 'src/graphql/GetDifficulties'

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
      .watchQuery<difficulties>({
        query: GET_DIFFICULTIES,
      })
      .valueChanges.subscribe(({ data }) => {
        this.difficulties = data.difficulties
        this.pageBody = data.page.pageBody
        this.getStarted = data.words[0].word
      })
  }
}
