/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLesson
// ====================================================

export interface GetLesson_lesson_nextLesson {
  __typename: "Lesson";
  lessonId: string;
  lessonTitle: string | null;
}

export interface GetLesson_lesson {
  __typename: "Lesson";
  difficultyLevel: string;
  /**
   * The body/content of the lesson, with CodeSandboxes and all.
   */
  lessonBody: string;
  /**
   * To be shown in the start of each lesson.
   */
  lessonIntro: string | null;
  lessonObjectives: string | null;
  lessonShortFacts: string | null;
  lessonTitle: string | null;
  /**
   * Returns the next lesson
   */
  nextLesson: GetLesson_lesson_nextLesson | null;
  /**
   * References and extra info about the lesson's topic
   */
  references: string | null;
  /**
   * Name of instructor
   */
  instructor: string | null;
}

export interface GetLesson_words {
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

export interface GetLesson {
  /**
   * Retrieve a single lesson
   */
  lesson: GetLesson_lesson | null;
  /**
   * Retrieve multiple words
   */
  words: GetLesson_words[];
}

export interface GetLessonVariables {
  lesson?: string | null;
}
