// Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

// For example

type Test1 = [1, 1, 1];

type Test2 = [1, 1, 2];

type Todo = All<Test1, 1>; // should be same as true

type Todo2 = All<Test2, 1>; // should be same as false

type All<T extends any[], U> = {
  [K in keyof T]: U extends T[K] ? true : false;
} extends [...infer R]
  ? false extends R[number]
    ? false
    : true
  : false;

export {};
