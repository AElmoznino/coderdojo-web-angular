import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule, SecurityContext } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MarkdownModule } from 'ngx-markdown'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChromeCheckComponent } from './core/chrome-check/chrome-check.component'
import { HeaderComponent } from './core/header/header.component'
import { LanguagePickerComponent } from './core/header/language-picker/language-picker.component'
import { GraphQLModule } from './graphql.module'
import { InfoComponent } from './modules/info/info.component'
import { LessonComponent } from './modules/lesson/lesson.component'
import { OverviewComponent } from './modules/overview/overview.component'
import { StartComponent } from './modules/start/start.component'

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
    MarkdownModule.forRoot({ sanitize: SecurityContext.NONE }),
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
