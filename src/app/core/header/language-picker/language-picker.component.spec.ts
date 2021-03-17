import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LanguagePickerComponent } from './language-picker.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { MatMenuModule } from '@angular/material/menu';
import { By } from '@angular/platform-browser'

describe('LanguagePickerComponent', () => {
  let component: LanguagePickerComponent
  let fixture: ComponentFixture<LanguagePickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguagePickerComponent],
      imports: [MatMenuModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagePickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    const store = {}
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`
      },
    }
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem)
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem)
  })

  it('should create LanguagePickerComponent', () => {
    expect(component).toBeTruthy()
  })

  it('should set languageString on button', () => {
    component.languageString = 'Language'

    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('button').textContent).toContain(
      'Language',
    )
  })
  // TODO: Add tests for handleClickLanguage.

  xdescribe('#handleClickLanguage', () => {
    it('should ser userLangage is no language is set', () => {
      // TODO: Error: <spyOn> : reload is not declared writable or has no setter
      spyOn(window.location, 'reload')

      const event = {
        target: {
          value: 'swedish',
        },
      }
      component.handleClickLanguage(event)

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'userLanguage',
        'swedish',
      )
    })
  })
})
