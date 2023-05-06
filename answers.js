
////////////////////////////////
// Easy Going
////////////////////////////////
for(let number = 1; number < 21; number++){
    console.log(number);
}

////////////////////////////////
// Get Even
////////////////////////////////
for(let numbers = 2; numbers <= 200; numbers = numbers + 2){
    console.log(numbers)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let num = 1; num <= 100; num++) {
     if(num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
     }  else if(num % 5 === 0){
        console.log("Buzz");
     }  else if(num % 3 === 0){
        console.log("Frizz");
     } else {
        console.log(num);
     }
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]+=1;
console.log(plantee);

wolfy[3] = "Gotham City";
console.log(wolfy);

dart[3] = "Upside Down & Hawkins"
console.log(dart);

wolfy[0] = "Gameboy";
console.log(wolfy);



////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for(let letter of ninjaTurtles){
    const upperCaseLetter = letter.toUpperCase();
    console.log(upperCaseLetter);
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies  = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


const index1 = favMovies.indexOf("Titanic");
console.log(index1);
/// I think this puts the array in alphabetical order.
favMovies.sort();
console.log(favMovies);

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

for(let i = 0; i < favMovies.length/2; i++){
    let temp = favMovies[i];
    favMovies[i] = favMovies[favMovies.length - i - 1];
    
}

favMovies.reverse();
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

favMovies.unshift("ITACHI UCHIHA"); //THIS WILL NOW BE INCLUDED IN THE FRONT OF THE ARRAY.
console.log(favMovies);

const index = favMovies.indexOf("Django Unchained");
console.log(index);

const deleted = favMovies.splice(3,0,"Avatar"); // yes because splice method is used to add or remove elements of an existing array and the return value will be the removed items from the array.
console.log(favMovies);
console.log(deleted);

//slice only make a shallow copy of the first array, its does not alter the original array.
const middleOfIndex = Math.floor(favMovies.length/2);
const lastHalf = favMovies.slice(middleOfIndex);
const favMovies2 = favMovies.slice(middleOfIndex);
console.log(favMovies2);


//After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
const index4 = favMovies.indexOf("Fast and Furious");
console.log(index4); // im getting back -1 & idk why



//Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

/// i was about to chnage the array even tho i declared the vaiable with 'const' because i was changing the array and not the vaiable. idk if im right or not, please let me know with feedback.



////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];



////////////////////////////////
//  Excited Kitten
////////////////////////////////
const randomPhrases = [
    "...human...why you taking pictures of me?...", 
    "...the catnip made me do it...",
    "...why does the red dot always get away...",
];
  for(let w = 0; w < 19; w++){
    if(w % 2 === 0){
        let randomIndex = Math.floor(Math.random() * randomPhrases.length);
        console.log(randomPhrases[randomIndex]);
    }  else{
        console.log("Love me, pet me! HSSSSSS!")   //////kinda still dont understand this.
    }
  }

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort((a,b) => a - b);

const length = nums.length;
const mid = Math.floor(length / 2);
   if(length % 2 === 0){
       const median = (nums[mid - 1] + nums[mid]) / 2;
       console.log(`The median value of the array is ${median}`);
   } else {
    const median = nums[mid];
    console.log(`The median value of the array is ${median}`);
   }




