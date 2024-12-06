// Implement the built-in Readonly<T> generic without using it.

// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

// For example:
interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property

todo.description = "barFoo"; // Error: cannot reassign a readonly property

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
// ------我是分割线------

// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly.

// When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// For example

interface Todo1 {
  title: string;

  description: string;

  completed: boolean;
}
type MyReadonly2<T, K extends keyof T = keyof T> = {
  +readonly [P in K]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};
type MyReadonly3<T, K extends keyof T> = Omit<T, K> & Readonly<T>;

const todo1: MyReadonly2<Todo1, "title" | "description"> = {
  title: "Hey",

  description: "foobar",

  completed: false,
};
todo1.title = "Hello"; // Error: cannot reassign a readonly property

todo1.description = "barFoo"; // Error: cannot reassign a readonly property

todo1.completed = true; // OK
