console.log("big bubbles buoyed by balthazar");

const userInputString = prompt(
  "Please enter your favorite frozen yogurts, seperated by commas"
);
const stringSplitta = userInputString.split(",");
console.log(stringSplitta);
// let stringArrayStorage = [];
// for (i = 0; i < stringSplitta.length; i++) {
//   let storage = stringSplitta[i];
//   stringArrayStorage.push(storage);}
// I used the code from block 14 for this.  If I understand correctly, there's an empty array (UIS) that gets filled with a prompt that's one big string.  From there, stringSplitta uses the split method to seperate that one string into commas so the UIS array has more than one element now, though nothing new has been added.  Six one way, half dozen the other type of thing.  From there, an empty array is created, then a for loop is run on the stringSplitta array (same contents as UIS, maybe even the exact same array?) which sets each element as a variable and then pushes the elements into a new array and stores them more permanently

const froyoStorageObject = {};

for (let i = 0; i < stringSplitta.length; i++) {
  if (froyoStorageObject[stringSplitta[i]]) {
    froyoStorageObject[stringSplitta[i]] += 1;
  } else {
    froyoStorageObject[stringSplitta[i]] = 1;
  }
}

console.table(froyoStorageObject);
console.log(froyoStorageObject);
