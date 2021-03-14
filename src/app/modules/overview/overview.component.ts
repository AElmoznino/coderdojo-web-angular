import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Apollo } from 'apollo-angular'
import { handleWords } from '../../shared/wordHelper'
import {
  getOverview,
  getOverviewVariables,
} from 'src/graphql/__generated__/getOverview'
import { GET_OVERVIEW } from 'src/graphql/GetOverview'

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
      .watchQuery<getOverview, getOverviewVariables>({
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
