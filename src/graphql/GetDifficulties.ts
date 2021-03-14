import gql from 'graphql-tag'

export const GET_DIFFICULTIES = gql`
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
