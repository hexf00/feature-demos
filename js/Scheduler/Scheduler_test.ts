import { Scheduler } from './Scheduler'

var scheduler = new Scheduler();

scheduler
    .on("test", function (value) {
        console.log("A", value);
    })
    .on("test", function (value) {
        console.log("B", value);
    })
    .emit("test", 1)
    .emit("test", 2)
    .on("test", function (val1, val2) {
        console.log("C", val1 + val2);
    })
    .emit("test", 5, 5)
    .emit("test", 10, 10)