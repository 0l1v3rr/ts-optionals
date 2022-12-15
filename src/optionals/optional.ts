export default class Optional<T> {
  private value: T | null;

  public constructor(value: T | null = null) {
    this.value = value;
  }

  /**
   * Indicates whether some other object is "equal to" this Optional.
   */
  public equals(obj: T): boolean {
    return this.value === obj;
  }

  /**
   * If a value is present in this Optional,
   * returns the value, otherwise throws an error.
   */
  public get(): T {
    if (this.value === null) {
      throw new Error("The value is null.");
    }

    return this.value;
  }

  /**
   * If a value is present, and the value matches the given predicate,
   * return an Optional describing the value, otherwise return an empty Optional.
   */
  public filter(func: (value: T) => boolean): Optional<T> {
    if (this.value === null) {
      throw new Error("The value is null.");
    }

    if (func(this.value)) {
      return this;
    }

    return new Optional();
  }

  /**
   * Return true if there is a value present, otherwise false.
   */
  public isPresent(): boolean {
    return this.value !== null;
  }

  /**
   * If a value is present, invoke the specified consumer with the value, otherwise do nothing.
   */
  public ifPresent(func: (value: T) => void): void {
    if (this.value === null) {
      throw new Error("The value is null.");
    }

    func(this.value);
  }

  /**
   * Return the value if present, otherwise return other.
   */
  public orElse(value: T): T {
    return this.value === null ? value : this.value;
  }

  /**
   * Return the contained value, if present,
   * otherwise throw an exception to be created by the provided supplier.
   */
  public orElseThrow(err: () => Error): T {
    if (this.value === null) {
      throw err();
    }

    return this.value;
  }

  /**
   * Returns a non-empty string representation of this Optional suitable for debugging.
   */
  public toString(): string {
    return this.value === null ? "null" : this.value!.toString();
  }
}
