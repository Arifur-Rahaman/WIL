class Shape {
    constructor(name){
        this._name = name;
    }

    set setName(name){
        this._name = name
    }

    get getName(){
        return this._name
    }

    calculateArea(){
        return 'Calculating the area of shape'
    }
}

class Rectangle extends Shape{
    constructor(name, length, width){
        super(name)
        this._length = length
        this._width = width
    }

    calculateArea(){
        return this._length * this._width
    }
}

const r1 = new Rectangle('Rectangle1', 30, 10)
console.log(r1.calculateArea())

// Abstraction: Hiding the implementation of a method, expose only the features outside of the function

//Encapsulation: Hiding data of a class so that it can not access directly from outside of the class rather expose
//Function using that data can be access and modify

//Inheritance: Inherit method and properties from parent calss is inheritance

//Polymorphism: Multiple form of a function is called polymorphism