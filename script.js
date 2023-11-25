// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// CHECK 1 Part 1

const numArray = [n1,n2,n3,n4];
let divBy5Array =[];


for(let i = 0; i < numArray.length; i++){
  if(numArray[i] % 5 === 0){
    let loop_Array = numArray[i];
    let array = divBy5Array.push(i);
    console.log(divBy5Array)
    console.log(`${numArray[i]} is  div by 5. The remainder is ${numArray[i]%5}`);

  } 
}
// CHECK 2
n1 > n4 ? "10 is greater than 5." : "last is greater than 1st";

  if(n1 > n4){
    let positive = n1 > n4;
 console.log(positive)
    console.log("10 is greater than 5.")
 }else( console.log("last is greater than 1st") )

//  check 3
let arithChain = ((n1- n2) * n3) % n4;


// check 4
const trip = (mph) => {
  const fuel = 1500 / 30; // Equals 50 total gallons of fuel to complete trip
  const time = 1500 / mph; // Equals time/hours for trip
  const cost = (1500 / mph) * 3; // the cost of fuel

  if (mph === 55) {
    console.log(`You're going to need ${fuel} gallons to complete this trip. It will take ${time} hours to get there. It will cost $${cost} for this trip.`);
  } else if (mph === 60) {
    console.log(`You're going to need ${fuel} gallons to complete this trip. It will take ${time} hours to get there. It will cost $${cost} for this trip.`);
  } else if (mph === 75) {
    console.log(`You're going to need ${fuel} gallons to complete this trip. It will take ${time} hours to get there. It will cost $${cost} for this trip.`);
  } else {
    (
      console.log(`You're going to need ${fuel} gallons to complete this trip. It will take ${time} hours to get there. It will cost $${cost} for this trip.`)
    );
  }
};
console.log(trip(55));

// Part 2




//

          /* End of Loops */


// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;


// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const divisibleby5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5)
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);