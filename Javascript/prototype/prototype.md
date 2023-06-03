## Prototype:

Prototypes are the mechanism by which JavaScript objects inherit features from one another.
[MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

**prototype [[Prototype]] hocche javascript object jar moddhe method and property thake. JavaScript e Protita object kono ekta certain prototype object er sathe linked kora thake and protita object tar linked kora prototype object er method and property gulo k access and use korte pare.**

Creating a Date object
```Javascript
const myDate = new Date();
```
To get proto type of myDate we can use 
```javascript
const prototypeOfMyDate = myDate.__proto__ //Prototype of mydate
```
Or we can use
```javascript
const prototypeOfMyDate = Object.getPrototypeOf(myDate) //Prototype of my date object
```
Here,
```js
myDate.__proto__ === Date.prototype
```

As prototype of an object is also an object so prototype also has prototype
```javascript
    myDate.__proto__.__proto__ === Date.prototype.__proto__
```
------------------------------
## Setting prototype:
#### Using Object.create()
```javascript
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```
Here we create a object car1 where personPrototype is the prototype of car1 object.

### Using a constructor
```javascript
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
```

Here we set personPrototype object as a prototype of Person constructor function. So if we create a new object using Person function then new object's prototype(__proto__) will be personPrototype

```javascript
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

```javascript 
reuben.__proto__ === Person.prototype
```
