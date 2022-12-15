export default class Optional<T> {
  private value: T | null;

  public constructor(value: T | null = null) {
    this.value = value;
  }
}
