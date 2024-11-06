# Blog 1: The significance of union and intersection types in Typescript

TypeScript allows us to define the type of variables,functions etc this can help us in error handling.

### Union Type :

Union Type are used to allow multiple type defining . like a variable can be string or number by defining union type but if we put another type in it like boolean we will get error. we use `|` as the symbol of union type  

Example:

```typescript
let value: string | number;
value = "Hello"; // Valid
value = 42;      // Also valid
value = true;    // Error: Type 'boolean' is not assignable to type 'string | number'

```


### Intersection Type :

Intersection type also gives us power to assign multiple type but ths is little different.usually intersection Type are used on objects,array which has multiple values.So Intersection gives us power to combine multiple type in a single type. like there could be 2 object type if we use Intersection and create a new type then new type will requires all properties of those two object. we use `&` symbol to create Intersection type


Example:

```typescript
type Person {
    name: string;
    age: number;
}

type Employee {
    employeeId: number;
}

type EmployeeProfile = Person & Employee;

const profile: EmployeeProfile = {
    name: "Alice",
    age: 30,
    employeeId: 12345
};
