import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StartComponent } from './modules/start/start.component'
import { OverviewComponent } from './modules/overview/overview.component'

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'overview/:level', component: OverviewComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
