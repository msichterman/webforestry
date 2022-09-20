import { UnknownObject } from "./typeUtils";

export function pickBy(
  object: UnknownObject,
  predicate: (arg: string) => boolean
) {
  const obj: UnknownObject = {};
  for (const key in object) {
    if (predicate(object[key])) {
      obj[key] = object[key];
    }
  }
  return obj;
}
