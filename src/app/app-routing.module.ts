import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StartComponent } from './modules/start/start.component'
import { OverviewComponent } from './modules/overview/overview.component'
import { LessonComponent } from './modules/lesson/lesson.component'
import { InfoComponent } from './modules/info/info.component'

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'overview/:level', component: OverviewComponent },
  { path: 'lesson/:lessonId', component: LessonComponent },
  { path: 'info/:pageId', component: InfoComponent },
  { path: '**', component: StartComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
