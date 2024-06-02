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
/*
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
*/

/*
    ANSWER
    a
    b
    process next tick 1
    process next tick 2
    Promise 1

*/

// EXAMPLE 5:

/*
console.log("a");

setTimeout(() => {
  console.log("settimeout 1");
}, 0);

setTimeout(() => {
  console.log("settimeout 2");
}, 0);

setTimeout(() => {
  console.log("settimeout 3");
}, 0);

process.nextTick(() => {
  console.log("process next tick 1");

  setTimeout(() => {
    console.log("settimeout 1.1 inside tick 1");
  }, 0);
});

process.nextTick(() => {
  console.log("process next tick 2");
});

console.log("b");
*/

/*
  Answer 
  a
  b
  process next tick 1
  process next tick 2
  settimeout 1
  settimeout 2
  settimeout 3
  settimeout 1.1 inside tick 1
*/

// EXAMPLE 6: (VV IMPORTANT EXAMPLE): After every callback function execution (in any other queue apart from MiCROTASK queue)
// we have to check microtask queue after every callback function.

/*
console.log("a");

setTimeout(() => {
  console.log("settimeout 1");
}, 0);

setTimeout(() => {
  console.log("settimeout 2");
  process.nextTick(() => {
    console.log("Process next tick 1 inside settimeout2");
  });
}, 0);

setTimeout(() => {
  console.log("settimeout 3");
}, 0);

process.nextTick(() => {
  console.log("process next tick 1");

  setTimeout(() => {
    console.log("settimeout 1.1 inside tick 1");
  }, 0);
});

process.nextTick(() => {
  console.log("process next tick 2");
});

console.log("b");
*/

/*
  Answer
  a
  b
  process next tick 1
  process next tick 2
  settimeout 1
  settimeout 2
  Process next tick 1 inside settimeout2
  settimeout 3
  settimeout 1.1 inside tick 1

*/

// // EXAMPLE 7:

/*
console.log("a");

setTimeout(() => {
  console.log("settimeout 1");
  Promise.resolve().then(() => {
    console.log("Promise inside setTimeout 1");
  });

  process.nextTick(() => {
    console.log("Process next tick inside setTimeout 1");
  });
}, 0);

setTimeout(() => {
  console.log("settimeout 2");
}, 0);

process.nextTick(() => {
  console.log("Process next tick 1");
  setTimeout(() => {
    console.log("settimeout inside process next tick 1");
    process.nextTick(() => {
      console.log(
        "process next tick inside settimeout inside process next tick 1"
      );
    });
  });
});
console.log("b");
*/

/*
  Answer

  a
  b
  Process next tick 1
  settimeout 1
  Process next tick inside setTimeout 1
  Promise inside setTimeout 1
  settimeout 2
  settimeout inside process next tick 1
  process next tick inside settimeout inside process next tick 1

*/

// EXAMPLE 8:

/*
const fs = require("node:fs");

console.log("a");

fs.readFile("./eventLoop.png", (error, data) => {
  console.log("this is readfile 1");
});

console.log("b");
*/

/*
  ANSWER:
  a
  b
  this is readfile 1
*/

// I/O Polling: is a way for event loop to ask questions to OS (is file read completed), meanwhile event loop
// will not wait for the answer it will move to next Queue.

// EXAMPLE 9:

/*
const fs = require("node:fs");

console.log("a");

fs.readFile("./eventLoop.png", (error, data) => {
  console.log("readfile 1");
});

process.nextTick(() => {
  console.log("process next tick 1");
});

Promise.resolve().then(() => {
  console.log("promise 1");
});

setTimeout(() => {
  console.log("set timeout");
}, 0);

console.log("b");
*/

/*
  ANSWER: 
  a
  b
  process next tick 1
  promise 1
  set timeout
  readfile 1
*/

// EXAMPLE 10: Anamoly: setimeout wait for long so maybe the callback will not arrive by then.

/*
const fs = require("node:fs");

console.log("a");

fs.readFile("./eventLoop.png", (error, data) => {
  console.log("readfile 1");
});

process.nextTick(() => {
  console.log("process next tick 1");
});

Promise.resolve().then(() => {
  console.log("promise 1");
});

setTimeout(() => {
  console.log("set timeout");
}, 0);

setImmediate(() => {
  console.log("set Immediate 1");
});

console.log("b");
*/

/*
  Answer MAIN 
  a
  b
  process next tick 1
  promise 1
  set timeout
  set Immediate 1
  readfile 1
*/

/*
  Answer DUE TO ANOMALY 
  a
  b
  process next tick 1
  promise 1
  set Immediate 1
  set timeout
  readfile 1
*/

// EXAMPLE 11: solution of anamoly

/*
const fs = require("node:fs");

console.log("a");

fs.readFile("./eventLoop.png", (error, data) => {
  console.log("readfile 1");
});

process.nextTick(() => {
  console.log("process next tick 1");
});

Promise.resolve().then(() => {
  console.log("promise 1");
});

setTimeout(() => {
  console.log("set timeout");
}, 0);

setImmediate(() => {
  console.log("set Immediate 1");
});

console.log("b");

for (let i = 0; i < 1000000000; i++) {}
*/

/*
  Answer MAIN 
  a
  b
  process next tick 1
  promise 1
  set timeout
  set Immediate 1
  readfile 1
*/

// TODO: find the github repo for questions.
