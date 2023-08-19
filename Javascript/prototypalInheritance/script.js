// Example:1

// const player = {
//     displayName(){
//         console.log(this.name)
//     }
// }

// const shakib = Object.create(player)
// const tamim = Object.create(player)
// shakib.name = 'Shakib'
// tamim.name = 'Tamim'


// shakib.displayName()
// tamim.displayName()




// Example:2

function Player (name){
    this.name = name
}

Player.prototype.displayName = function(){
    console.log(this.name)
}

function Cricketer(name, role){
    Player.call(this, name)
    this.role = role
}

Cricketer.prototype = Object.create(Player.prototype)
Cricketer.prototype.constructor = Cricketer

const Shakib = new Cricketer('Shakib', 'All-rounder')

Shakib.displayName()

