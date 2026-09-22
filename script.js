// const name = prompt("Enter your name")
// const age = +(prompt("Enter your age"))
// const score = +(prompt("Enter your score"))
// const hasTicket = confirm("Do you have a ticket?")

// if (age >= 18) {
//     console.log("You can enter")
// } else {
//     console.log("You are too young")
// }



// console.log("===========================")



// if (age >= 18 && hasTicket === true) {
//     console.log("Entry allowed")
// } else {
//     console.log("Entry denied")
// }



// console.log("===========================")



// if (score > 100 || hasTicket === true) {
//     console.log("Special access")
// } else {
//     console.log("Normal access")
// }



// console.log("===========================")



// console.log("Bonus score:", score + 10)
// console.log("Half score:", score / 2)
// console.log("Remainder:", score % 10)
// console.log("Score - 10:", score - 10)
// console.log("Score * 2:", score * 2)



// console.log("===========================")


// if (score >= 90) {
//     console.log("Excellent")
// } else if (score >= 60) {
//     console.log("Good")
// } else {
//     console.log("Try again")
// }






// ===================================================







// console.log("=============================")


// const character = "warrior"

// console.log(
//     character == "warrior"
//         ? "You chose Warrior"
//         : "Unknown character"
// )


// console.log("=============================")


// const hasSword = true


// console.log(
//     hasSword
//         ? "Warrior is ready"
//         : "Find a weapon"
// )


// console.log("=============================")


// const health = 70

// console.log(
//     health >= 80
//         ? "Healthy"
//         : health >= 40
//             ? "Wounded"
//             : "Critical"
// )


// console.log("=============================")


// const coins = 150;

// console.log(
//     coins >= 100
//         ? "You can buy the item"
//         : "Not enough coins"
// )


// console.log("=============================")


// const isLoggedIn = true
// const isAdmin = false

// console.log(
//     isLoggedIn && isAdmin
//         ? "Admin Panel"
//         : "Access Denied"
// )


// console.log("=============================")


// const kills = 12
// const deaths = 3

// console.log(
//     kills > deaths
//         ? "Winner"
//         : "Loser"
// )


// console.log("=============================")


// const health2 = 85
// const coins2 = 200
// const hasSword2 = true

// console.log(
//     health2 >= 50 && coins2 >= 100 && hasSword2 == true
//         ? "READY FOR BATTLE"
//         : "NOT READY"
// )





// ========================

// numbers = [16, 25, 43, 94, 56, 67, 78, 856, 96, 11, 922, -933, 944, 855, 66, 77, 88, 99]

// for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(`четные числа ${numbers[i]}`)
//     } else {
//         console.log(` не четные числа ${numbers[i]}`)

//     }

// }



// ================================




let players = ["Aram", "Hayk", "Mariam", "Saro", "Ashot", "Ani"];
let scores = [120, 45, 200, 75, 160, 30];


let winners = [];
let losers = [];
let bonusPlayers = [];


for (i = 0; i < players.length; i++) {

    if (scores[i] >= 100) {
        winners.push(players[i]);
    }

    if (scores[i] < 50) {
        losers.push(players[i]);
    }

    if (scores[i] >= 100 && scores[i] <= 150) {
        bonusPlayers.push(players[i]);
    }

}

console.log(winners)
console.log(losers)
console.log(bonusPlayers)


// ==============================



let items = ["Sword", "Shield", "Potion", "Bow", "Magic Stone", "Helmet"];
let prices = [150, 100, 30, 120, 300, 80];

let expensiveItems = [];
let cheapItems = [];
let specialItems = [];

for (let i = 0; i < items.length; i++) {

    if (prices[i] > 100) {
        expensiveItems.push(items[i]);
    }

    if (prices[i] <= 50) {
        cheapItems.push(items[i]);
    }

    if (prices[i] > 100 && prices[i] < 250) {
        specialItems.push(items[i]);
    }

}

console.log(expensiveItems);
console.log(cheapItems);
console.log(specialItems);