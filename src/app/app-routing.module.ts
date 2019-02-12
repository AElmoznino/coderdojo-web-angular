import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StartComponent } from './modules/start/start.component'

const routes: Routes = [{ path: '', component: StartComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
