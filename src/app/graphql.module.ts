import { NgModule } from '@angular/core'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { environment } from '../environments/environment.local'
import { HttpHeaders } from '@angular/common/http'

const uri = environment.graphCMSEndpoint // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({
      uri,
      headers: new HttpHeaders({
        Authorization: environment.graphCMSToken,
      }),
    }),
    cache: new InMemoryCache(),
  }
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
