"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guestName = [" Asma", "Maryum", "Manni", " Mannica", "Chanda"];
let cannotAttend = "Chanda";
//console.log(`${cannotAttend} cannot  make it for dinner`);
let newGuest = "Halima";
guestName[guestName.indexOf(cannotAttend)] = newGuest;
//console.log(guestName);
//guestName.map((items) => console.log(`Hello! ${items} you are invited to dinner.`));
// add beginning in array
//console.log("Welcome! we found a bigger  dinner table")
guestName.unshift("Kinza");
//console.log(guestName);
// for middle
let middleName = "Shebra";
let middleindex = guestName.length / 2;
guestName.splice(middleindex, 0, middleName);
//console.log(guestName);
// last
guestName.push("Sheba");
//console.log(guestName);
//guestName.map((items) => console.log(`Dear ${items} You are invited to dinner.`));
console.log("We can invite only two peoples for dinner");
guestName.pop();
console.log(guestName);
guestName.pop();
console.log(guestName);
// condition jb tk 2 na hojae loop chlta jae
while (guestName.length > 2) {
    let removeGuest = guestName.pop();
    console.log(`\n sorry ${removeGuest} we cann't invite you.`);
}
guestName.map((items) => console.log(`\n ${items} You are still invited to dinner.`));
guestName.pop();
console.log(guestName);
guestName.pop();
console.log(guestName);
