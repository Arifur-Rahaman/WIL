"Prototype chain" and "prototypal inheritance" are related concepts in the context of object-oriented programming and JavaScript.

1. **Prototype Chain:**
The prototype chain is a fundamental mechanism in JavaScript that allows objects to inherit properties and methods from other objects. Every object in JavaScript has an associated prototype object, which is used as a fallback when the object itself does not have a specific property or method. If you try to access a property or method on an object and it doesn't exist on that object, JavaScript will look for it in the object's prototype, and if not found there, it will continue to look up the prototype chain until it reaches the root object, usually the `Object.prototype` object.

For example, if you have an object `obj` and you try to access a property `x` on it, JavaScript will first look for `x` in `obj`. If `x` is not found in `obj`, it will then look for it in `obj`'s prototype, and if still not found, it will continue up the prototype chain.

2. **Prototypal Inheritance:**
Prototypal inheritance is a way of creating objects based on existing objects. In JavaScript, objects can serve as prototypes for other objects, allowing you to create new objects that inherit properties and methods from a prototype object. This is a core aspect of JavaScript's object-oriented nature.

When you create a new object using prototypal inheritance, the new object's prototype is set to the object you used as a basis. This means that the new object will inherit all properties and methods from the prototype object, and if you try to access a property or method on the new object that it doesn't have, JavaScript will follow the prototype chain to look for it in the prototype object and its ancestors.

Here's a simple example in JavaScript:

```javascript
// Creating a prototype object
const personPrototype = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Creating a new object using prototypal inheritance
const person1 = Object.create(personPrototype);
person1.name = "Alice";

// Using the inherited method
person1.greet(); // Output: Hello, my name is Alice
```

In this example, `person1` is created by inheriting from the `personPrototype` object through the `Object.create()` method.

In summary, the prototype chain is the mechanism that allows objects to inherit properties and methods from their prototypes, and prototypal inheritance is the practice of creating new objects based on existing prototype objects to establish inheritance relationships.