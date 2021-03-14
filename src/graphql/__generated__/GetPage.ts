/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPage
// ====================================================

export interface GetPage_page {
  __typename: "Page";
  /**
   * All the body of the page.
   */
  pageBody: string | null;
}

export interface GetPage {
  /**
   * Retrieve a single page
   */
  page: GetPage_page | null;
}

export interface GetPageVariables {
  pageId?: string | null;
}
