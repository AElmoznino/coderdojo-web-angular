import { NgModule } from '@angular/core'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { environment } from '../environments/environment'
import { HttpHeaders } from '@angular/common/http'

const uri = environment.graphCMSEndpoint // <-- add the URL of the GraphQL server here

const getUserLanguage = () => {
  const userLanguage = localStorage.getItem('userLanguage')

  return userLanguage ? userLanguage : 'SV'
}

const createApollo = (httpLink: HttpLink) => {
  return {
    link: httpLink.create({
      uri,
      headers: new HttpHeaders({
        Authorization: environment.graphCMSToken,
        locale: getUserLanguage(),
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
