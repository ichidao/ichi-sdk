export function alwaysResolve<T = undefined>(p: Promise<T>): Promise<T> {
  return new Promise<T>((resolve) => {
    p.then((r) => resolve(r)).catch((e) => {
      console.warn(`Error in promise, resolving anyway...`, e);
      resolve(undefined as unknown as T);
    });
  });
}
