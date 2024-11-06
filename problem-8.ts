function validateKeys<T extends object, K extends keyof T>(obj: T, keys: K[]): boolean {
    return keys.every(key => key in obj);
}

const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person2, ["name", "age"]));