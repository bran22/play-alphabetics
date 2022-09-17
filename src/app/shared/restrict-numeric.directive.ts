import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRestrictNumeric]'
})
export class RestrictNumericDirective {

  // simple regex to restrict each input key to only numbers
  regexp = new RegExp(/[0-9]/);

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const allowedKeys = ['ArrowRight', 'ArrowLeft', 'Delete', 'Backspace', 'Tab'];
    if (allowedKeys.includes(event.code)) {
      // do nothing. manually allowing some 'keypress' events through the filter
    } else {
      this.restrictToNumeric(event);
    }
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    // prevent pasting if the value contains characters that are not allowed
    event.preventDefault();
    // get the copied text from the clipboard
    const pastedInput = event.clipboardData?.getData('text/plain') ?? '';
    // check the regex
    if (this.regexp.test(pastedInput)) {
      // paste the value if it passes the regex test
      document.execCommand('insertText', false, pastedInput);
    }
  }

  constructor() { }

  restrictToNumeric(event: KeyboardEvent) {
    if (!this.regexp.test(event.key)) {
      event.preventDefault();
    }
  }

}
