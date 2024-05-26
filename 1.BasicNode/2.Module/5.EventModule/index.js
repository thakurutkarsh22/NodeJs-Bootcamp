const EventEmitter = require("node:events");

const emitterObject = new EventEmitter();

// LISTEN TO AN EVENT

emitterObject.on("operation", (data) => {
  console.log("hello world", data);
});

// buttoon.addEventListner("click", (e) => {})

// CREATION OF AN EVENT.

emitterObject.emit("operation", 100);
