import gql from 'graphql-tag'
export const GET_LESSON = gql`
  query GetLesson($lesson: String) {
    lesson(where: { lessonId: $lesson }) {
      difficultyLevel
      lessonBody
      lessonIntro
      lessonObjectives
      lessonShortFacts
      lessonTitle
      nextLesson {
        lessonId
        lessonTitle
      }
      references
      instructor
    }
    words(
      where: {
        wordId_in: [
          "nextLesson"
          "continue"
          "greatJobLesson"
          "back"
          "writtenBy"
        ]
      }
    ) {
      word
      wordId
    }
  }
`
