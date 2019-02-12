import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MarkdownModule } from 'ngx-markdown'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { StartComponent } from './modules/start/start.component'
import { GraphQLModule } from './graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './core/header/header.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material'
import { OverviewComponent } from './modules/overview/overview.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    CommonModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
