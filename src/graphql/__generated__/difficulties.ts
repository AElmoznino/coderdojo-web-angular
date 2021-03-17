/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: difficulties
// ====================================================

export interface difficulties_difficulties {
  __typename: "Difficulty";
  /**
   * Description shown on start page.
   */
  difficultyDescription: string;
  difficultyId: string;
  difficultyName: string;
  /**
   * Description that shows on the overview page for the particular difficulty.
   */
  difficultyOverviewDescription: string | null;
}

export interface difficulties_page {
  __typename: "Page";
  /**
   * All the body of the page.
   */
  pageBody: string | null;
}

export interface difficulties_words {
  __typename: "Word";
  /**
   * The string of a word or multiple words
   */
  word: string | null;
}

export interface difficulties {
  /**
   * Retrieve multiple difficulties
   */
  difficulties: difficulties_difficulties[];
  /**
   * Retrieve a single page
   */
  page: difficulties_page | null;
  /**
   * Retrieve multiple words
   */
  words: difficulties_words[];
}
