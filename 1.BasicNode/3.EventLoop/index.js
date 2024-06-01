/*
        ------------- TIMERS ------------

        1. setTimeout
        2. setInterval
        3. setImmediate
*/

// EXAMPLE: 1

/*
console.log("a");

setTimeout(() => {
  console.log("c");
}, 0);
console.log("b");
*/

/*
    Answer: 
    a
    b
    c

*/

// EXAMPLE: 2

/*
console.log("a");

setInterval(() => {
  console.log("c");
}, 1000);
console.log("b");
*/

/*
    Answer: 
    a
    b
    c
    c
    c
    ...... (infinite c)

*/

// EXAMPLE: 3

/*
console.log("a");

setImmediate(() => {
    console.log("c"); 
})

console.log("b");
*/

/*
    Answer: 
    a
    b
    c
*/

// ------------------------- EVENT LOOP -----------------------------

// EXAMPLE 1:
/*
console.log("a");

process.nextTick(() => {
  console.log("process next tick 1");
});

console.log("b");
*/

/*
    ANSWER
    a
    b
    process next tick 1

*/

// EXAMPLE 2:

/*
console.log("a");

process.nextTick(() => {
  console.log("process next tick 1");
});

process.nextTick(() => {
  console.log("process next tick 2");
});

console.log("b");
*/

/*
    ANSWER
    a
    b
    process next tick 1
    process next tick 2
*/

// EXAMPLE 3:
/*
console.log("a");

Promise.resolve().then(() => {
  console.log("Promise 1");
});

process.nextTick(() => {
  console.log("process next tick 1");
});

process.nextTick(() => {
  console.log("process next tick 2");
});

console.log("b");
*/

/*
    ANSWER
    a
    b
    process next tick 1
    process next tick 2
    Promise 1

*/

// EXAMPLE 4:

console.log("a");

Promise.resolve().then(() => {
  console.log("Promise 1");

  process.nextTick(() => {
    console.log("process next tick 1.1 inside Promise 1");
  });
});

process.nextTick(() => {
  console.log("process next tick 1");
  process.nextTick(() => {
    console.log("process next tick 1.1 inside tick 1 ");
  });
});

process.nextTick(() => {
  console.log("process next tick 2");
});

console.log("b");

/*
    ANSWER
    a
    b
    process next tick 1
    process next tick 2
    Promise 1

*/
