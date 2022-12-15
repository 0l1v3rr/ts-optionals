import Optional from "./optional";
import { NonNull, Nullable } from "./types";

/**
 * Returns an empty Optional instance.
 */
export const empty = <T extends NonNull>(): Optional<T> => {
  return new Optional<T>();
};

/**
 * Returns an Optional with the specified present non-null value.
 */
export const of = <T extends NonNull>(value: T): Optional<T> => {
  return new Optional<T>(value);
};

/**
 * Returns an Optional describing the specified value,
 * if non-null, otherwise returns an empty Optional.
 */
export const ofNullable = <T extends Nullable>(value: T): Optional<T> => {
  if (value === null) {
    return empty<T>();
  }

  return of<T>(value);
};
