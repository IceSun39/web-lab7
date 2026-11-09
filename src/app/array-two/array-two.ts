import { Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { TwoDimArray } from '../../classes/two-dim-array';

function integerValidator(c: AbstractControl): ValidationErrors | null {
  const v = c.value;
  return v === null || v === '' || Number.isInteger(v) ? null : { integer: true };
}

@Component({
  selector: 'app-array-two',
  imports: [ReactiveFormsModule],
  templateUrl: './array-two.html',
  styleUrl: './array-two.css',
})
export class ArrayTwo {
  readonly min = TwoDimArray.MIN;
  readonly max = TwoDimArray.MAX;

  readonly grid = new FormArray(
    Array.from(
      { length: TwoDimArray.ROWS },
      () =>
        new FormArray(
          Array.from(
            { length: TwoDimArray.COLS },
            () =>
              new FormControl<number | null>(null, [
                Validators.required,
                Validators.min(TwoDimArray.MIN),
                Validators.max(TwoDimArray.MAX),
                integerValidator,
              ]),
          ),
        ),
    ),
  );

  readonly sum = signal<number | null>(null);

  constructor() {
    this.generate();
  }

  isCounted(i: number, j: number): boolean {
    return TwoDimArray.isOddIndexCell(i, j);
  }

  generate(): void {
    const arr = TwoDimArray.random();
    arr.data.forEach((row, i) => row.forEach((v, j) => this.grid.at(i).at(j).setValue(v)));
    this.grid.markAsUntouched();
    this.sum.set(null);
  }

  calculate(): void {
    if (this.grid.invalid) {
      this.grid.markAllAsTouched();
      this.sum.set(null);
      return;
    }
    const arr = new TwoDimArray(this.grid.getRawValue() as number[][]);
    this.sum.set(arr.sumOddIndices());
  }
}
