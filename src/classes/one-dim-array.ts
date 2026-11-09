export class OneDimArray {
  constructor(private readonly items: string[]) {}

  startsWith(letter: string): string[] {
    const l = letter.toLocaleLowerCase('uk');
    return this.items.filter((s) => s.toLocaleLowerCase('uk').startsWith(l));
  }
}
