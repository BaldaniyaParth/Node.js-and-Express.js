
const EventEmitter = require("events");

const event = new EventEmitter();

event.on( "hello",() => {
    console.log("Hello");
})

event.emit("hello");

event.on("check", (status, respose) => {
    console.log(`your status is ${status} and respose is ${respose} `)
})

event.emit("check", 200, "ok");