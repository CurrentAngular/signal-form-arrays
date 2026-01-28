import { Component, ElementRef, model, viewChild } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'sfa-custom-input',
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
})
export class CustomInput implements FormValueControl<string> {
  value = model('');
  inputRef = viewChild<ElementRef<HTMLInputElement>>('inputRef');

  focus(): void {
    const inputElementRef = this.inputRef();
    if (!inputElementRef) return;

    const nativeElement = inputElementRef.nativeElement;
    nativeElement.focus();
    nativeElement.select();
    console.log('Focused');
  }
}
