import { randomInt } from './random-int';

export class TwoDimArray {
  static readonly MIN = -10;
  static readonly MAX = 10;
  static readonly ROWS = 10;
  static readonly COLS = 7;

  constructor(readonly data: number[][]) {
    const ok = data.every((row) =>
      row.every((v) => Number.isInteger(v) && v >= TwoDimArray.MIN && v <= TwoDimArray.MAX),
    );
    if (!ok) {
      throw new Error('Елементи мають бути цілими числами в діапазоні [-10, 10]');
    }
  }

  static random(): TwoDimArray {
    const data = Array.from({ length: TwoDimArray.ROWS }, () =>
      Array.from({ length: TwoDimArray.COLS }, () => randomInt(TwoDimArray.MIN, TwoDimArray.MAX)),
    );
    return new TwoDimArray(data);
  }

  // індекси з 1: непарні 1, 3, 5... відповідають індексам 0, 2, 4... у масиві
  static isOddIndexCell(i: number, j: number): boolean {
    return i % 2 === 0 && j % 2 === 0;
  }

  sumOddIndices(): number {
    let sum = 0;
    this.data.forEach((row, i) =>
      row.forEach((v, j) => {
        if (TwoDimArray.isOddIndexCell(i, j)) sum += v;
      }),
    );
    return sum;
  }
}
