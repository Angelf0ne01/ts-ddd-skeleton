export abstract class StringValueObject {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }

  toSting(): string {
    return this.value;
  }
}
