import { Component, OnInit } from '@angular/core'
import gql from 'graphql-tag'
import { Apollo } from 'apollo-angular'

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
  homePage: string
  references: string
  about: string
  language: string

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({ query: WORDS_QUERY })
      .valueChanges.subscribe(({ data }) => {
        this.homePage = data.words.find(w => w.wordId === 'homePage').word
        this.references = data.words.find(w => w.wordId === 'references').word
        this.about = data.words.find(w => w.wordId === 'about').word
        this.language = data.words.find(w => w.wordId === 'language').word
      })
  }
}
