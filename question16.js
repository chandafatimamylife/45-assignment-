"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
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
guestName.map((items) => console.log(`Dear ${items} You are invited to dinner.`));
