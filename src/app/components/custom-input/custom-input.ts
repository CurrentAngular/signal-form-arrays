import { Component, ElementRef, model, viewChild } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'sfa-custom-input',
  imports: [],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.scss',
})
export class CustomInput implements FormValueControl<string> {
  value = model('');
  inputRef = viewChild<HTMLInputElement>('inputRef');

  focus(): void {
    const input = this.inputRef();
    if (!input) return;

    input.focus();
    input.select();
  }
}
