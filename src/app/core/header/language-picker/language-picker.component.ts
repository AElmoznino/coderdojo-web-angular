import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent implements OnInit {
  @Input() languageString: string
  userLanguage: string

  ngOnInit() {
    const langFromToken = localStorage.getItem('userLanguage')

    if (langFromToken) {
      this.userLanguage = langFromToken
    }
  }

  handleClickLanguage(event: any) {
    const clickedLanguage = event.target.value

    if (clickedLanguage === this.userLanguage) {
      return
    }

    localStorage.setItem('userLanguage', event.target.value.toLowerCase())

    document.documentElement.setAttribute(
      'lang',
      event.target.value.toLowerCase()
    )

    window.location.reload()
  }
}
