export class Animal {
  name: string;
  height: number;

  constructor(name1: string, height1: number) {
    if (name1 && height1 > 0) {
      this.name = name1;
      this.height = height1;
    } else {
      this.name = 'Кіт';
      this.height = 0.3;
    }
  }

  getWeigth(k: number): number {
    return this.height * this.height * this.height * k;
  }
}
