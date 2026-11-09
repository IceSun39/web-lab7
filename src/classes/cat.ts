import { Animal } from './animal';

export class Cat extends Animal {
  brade: string;

  constructor(name1: string, height1: number, brade1: string) {
    super(name1, height1);
    this.brade = brade1;
  }

  override getWeigth(k: number): number {
    return this.height * this.height * this.height * k * 1000;
  }
}
