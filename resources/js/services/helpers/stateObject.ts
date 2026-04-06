// helper functions for the state object, an object with nested objects

export const filterByProperty = (object: {}, prop: string, matchWith: number | string) => {
  const array: { [key: string]: any }[] = Object.values(object);
  return array.filter(el => el[prop] === matchWith);
}