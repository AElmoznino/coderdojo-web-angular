import gql from 'graphql-tag'
export const GET_PAGE = gql`
  query GetPage($pageId: String) {
    page(where: { pageId: $pageId }) {
      pageBody
    }
  }
`
