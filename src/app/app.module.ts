import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StartComponent } from './start/start.component'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './core/header/header.component'

@NgModule({
  declarations: [AppComponent, StartComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
