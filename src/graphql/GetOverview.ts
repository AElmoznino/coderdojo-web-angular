import gql from 'graphql-tag'
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
