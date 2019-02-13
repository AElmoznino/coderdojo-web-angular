import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-chrome-check',
  templateUrl: './chrome-check.component.html',
  styleUrls: ['./chrome-check.component.scss'],
})
export class ChromeCheckComponent implements OnInit {
  hasDismissedChromeCheck: boolean
  isChrome: boolean

  ngOnInit() {
    this.isChrome = navigator.userAgent.indexOf('Chrome') !== -1

    const hasDismissedCheck = Boolean(
      JSON.parse(localStorage.getItem('chromeCheck')),
    )
    this.hasDismissedChromeCheck = hasDismissedCheck
  }

  dismissCheck() {
    localStorage.setItem('chromeCheck', 'true')
    this.hasDismissedChromeCheck = true
  }
}
