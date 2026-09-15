const name = prompt("Enter your name")
const age = +(prompt("Enter your age"))
const score = +(prompt("Enter your score"))
const hasTicket = confirm("Do you have a ticket?")

if (age >= 18) {
    console.log("You can enter")
} else {
    console.log("You are too young")
}



console.log("===========================")



if (age >= 18 && hasTicket === true) {
    console.log("Entry allowed")
} else {
    console.log("Entry denied")
}



console.log("===========================")



if (score > 100 || hasTicket === true) {
    console.log("Special access")
} else {
    console.log("Normal access")
}



console.log("===========================")



console.log("Bonus score:", score + 10)
console.log("Half score:", score / 2)
console.log("Remainder:", score % 10)
console.log("Score - 10:", score - 10)
console.log("Score * 2:", score * 2)



console.log("===========================")


if (score >= 90) {
    console.log("Excellent")
} else if (score >= 60) {
    console.log("Good")
} else {
    console.log("Try again")
}
