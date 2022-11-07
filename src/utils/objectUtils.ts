export function pickBy<T>(object: T, predicate: (arg: unknown) => boolean) {
  const obj: T = {} as T;
  for (const key in object) {
    if (predicate(object[key])) {
      obj[key] = object[key];
    }
  }
  return obj;
}

export const fallbackAvatar = (name: string | undefined | null) =>
  `https://avatar.tobi.sh/tobiaslins.svg?text=${name && name[0]}`;
