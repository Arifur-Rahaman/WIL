class Shape{
    #name;
    constructor(name){
        this.#name = name
    }
    get getName(){
        return this.#name
    }
    set setName(name){
        this.#name = name
    }
}

class Circle extends Shape{
    #radius
    constructor(name, radius){
        super(name)
        this.#radius = radius
    }
}

const circle1 = new Circle('Circle1', 3)

circle1.setName = "Rectangle"
console.log(circle1.getName)

