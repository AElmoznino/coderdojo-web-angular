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
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { OverviewComponent } from './modules/overview/overview.component'
import { LessonComponent } from './modules/lesson/lesson.component'
import { InfoComponent } from './modules/info/info.component'
import { ChromeCheckComponent } from './core/chrome-check/chrome-check.component'
import { LanguagePickerComponent } from './core/header/language-picker/language-picker.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    StartComponent,
    LessonComponent,
    InfoComponent,
    ChromeCheckComponent,
    LanguagePickerComponent,
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
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
