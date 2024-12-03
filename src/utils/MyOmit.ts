// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

// For example

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
type TodoPreview = MyOmit<Todo, "description" | "title">;
const todo: TodoPreview = {
  completed: false,
};
export {};
