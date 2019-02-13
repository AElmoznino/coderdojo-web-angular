import { Component } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'coderdojo-web-angular'

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        window.scroll(0, 0)
      }
    })
  }
}
