console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for ([i = 1]; [i <= 100]; [i++]) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for ([i = 1]; [i <= 100]; [i++]) {
    if (i % 3 == 0) {
        console.log("FIZZ");
    }
    if (i % 5 == 0) {
        console.log("BUZZ");
    }
}

// Exercise 3 Section
console.log("exercise 3:\n==========\n")
i = 1;
while (i <= 100) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

i = 1;
do {
    if (i % 3 == 0) {
        console.log("FIZZ");
    }
    if (i % 5 == 0) {
        console.log("BUZZ");
    }
    i++;
} while (i <= 100)

// Exercise 4 Section
console.log("exercise 4:\n==========\n")
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for ([i = 1]; [i <= n]; [i++]) {
    if (i == value) {
        console.log("Found value!");
        break;
    }
}
if (i == n + 1) {
    console.log("Did not find value");
}