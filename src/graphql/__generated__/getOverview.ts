/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOverview
// ====================================================

export interface getOverview_difficulty_courses_lessons {
  __typename: "Lesson";
  lessonId: string;
  lessonShortFacts: string | null;
  lessonTitle: string | null;
}

export interface getOverview_difficulty_courses {
  __typename: "Course";
  courseDescription: string;
  courseId: string;
  /**
   * Name of the course, e.g. "HTML for Beginners"
   */
  courseName: string;
  lessons: getOverview_difficulty_courses_lessons[];
}

export interface getOverview_difficulty {
  __typename: "Difficulty";
  difficultyName: string;
  difficultyId: string;
  /**
   * Description that shows on the overview page for the particular difficulty.
   */
  difficultyOverviewDescription: string | null;
  /**
   * Description shown on start page.
   */
  difficultyDescription: string;
  courses: getOverview_difficulty_courses[];
}

export interface getOverview_words {
  __typename: "Word";
  /**
   * The string of a word or multiple words
   */
  word: string | null;
  /**
   * The human-readable ID of the word
   */
  wordId: string;
}

export interface getOverview {
  /**
   * Retrieve a single difficulty
   */
  difficulty: getOverview_difficulty | null;
  /**
   * Retrieve multiple words
   */
  words: getOverview_words[];
}

export interface getOverviewVariables {
  level?: string | null;
}
