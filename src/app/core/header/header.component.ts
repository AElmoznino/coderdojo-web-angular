import { Component, OnInit } from '@angular/core'
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'
import { handleWords } from '../../shared/wordHelper'

const WORDS_QUERY = gql`
  query getWords {
    words(
      where: { wordId_in: ["homePage", "about", "references", "language"] }
    ) {
      word
      wordId
    }
  }
`

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  words: object

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({ query: WORDS_QUERY })
      .valueChanges.subscribe(({ data }) => {
        this.words = handleWords(data.words)
      })
  }
}
