## Node.js backend developer test

1. Explain why { a: 1 } === { a: 1 } is false in JavaScript

Answer:
In JavaScript, { a: 1 } === { a: 1 } is false because objects are compared by reference, not by their content.
When you create two separate object literals like { a: 1 } and { a: 1 }, even though they have the same key and value, they are two different objects stored in different locations in memory.

2. Describe the runtime difference(s) between for await (const a of [p1, p2, p3]) { ... } vs [p1, p2, p3].forEach(async (p) { await p })

Answer:
for await...of is better for sequential and error-handling scenarios.
forEach with async/await is not ideal for async loops and causes parallel execution without proper error handling.

3. Explain the difference between nodejs and V8
Answer: 
V8: Just the engine that runs JavaScript code, developed by Google.
Node.js: A runtime environment that uses V8 and adds extra functionality (like handling files, networking, etc.) to build server-side applications.

4. Using typescript, what is the difference between an enum and an object?
Answer:
Enums:

```
enum UserRole {
    Admin = 'ADMIN',
    User = 'USER',
    Guest = 'GUEST'
}

const role: UserRole = UserRole.Admin;
```

Objects:

```
// Object
const ColorObj = {
  Red: 'RED',
  Green: 'GREEN',
  Blue: 'BLUE'
};

const myColorObj: string = ColorObj.Red; // Not as type-safe, needs manual typing
```


Enums are better for fixed, immutable sets of values with strong typing, while objects offer more flexibility for dynamic or changing data.

5. Write a typescript variable declaration for a variable a that will guarantee that it is a property name or key of object b

Answer:
```
const b = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// 'a' must be a key of object 'b'
let a: keyof typeof b;

a = 'name'; // This is valid
a = 'age';  // This is valid
a = 'city'; // This is valid
a = 'country'; // Error: Type '"country"' is not assignable to type '"name" | "age" | "city"'
```

Explanation:
`keyof typeof b`: This extracts the keys of object b and makes sure that a can only be assigned one of those keys.
If you try to assign a key that does not exist on b, TypeScript will give you a type error.
This guarantees type safety, ensuring that a is always a valid key of b.


Describe some drawbacks or common pitfalls when using typescript in large applications

Answer:
- TypeScript adds complexity, but makes your code safer.
- It can slow down development and is tricky to use with older code or third-party libraries.
- It doesn’t catch all errors at runtime, and refactoring (changing things) can be a lot of work in big projects.
- Using advanced TypeScript features like generics can make your code hard to read.
- Upgrading TypeScript can sometimes break things.
- Switching from JavaScript to TypeScript in a big project can be tough.

Question 7:
Go to the project folder, run `npm run question-7`

Question 8:
Go to the project folder, run `npm run question-8`

Question 9:
Simply run, `npm test`


