const person1 = {
    name: "Siflu",
    displyName(){
        console.log(this.name)
    }
}
const displyName = person1.displyName
const person2 = {name:'Arifur', displyName}
person2.displyName()
