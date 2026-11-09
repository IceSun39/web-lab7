import { Component, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OneDimArray } from '../../classes/one-dim-array';

const WORD = /^[\p{L}'’-]+$/u;
const LETTER = /^\p{L}$/u;

@Component({
  selector: 'app-array-one',
  imports: [ReactiveFormsModule],
  templateUrl: './array-one.html',
  styleUrl: './array-one.css',
})
export class ArrayOne {
  readonly form = new FormGroup({
    surnames: new FormArray(
      Array.from(
        { length: 5 },
        () =>
          new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.maxLength(30), Validators.pattern(WORD)],
          }),
      ),
    ),
    letter: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(LETTER)],
    }),
  });

  readonly result = signal<string[] | null>(null);

  get surnames() {
    return this.form.controls.surnames;
  }

  calculate(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.result.set(null);
      return;
    }
    const arr = new OneDimArray(this.surnames.getRawValue());
    this.result.set(arr.startsWith(this.form.controls.letter.value));
  }
}
