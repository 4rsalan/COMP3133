const EventEmitter = require('events');


const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

const myEmitter = new EventEmitter();
myEmitter.on("convert", (arr) => {
    arr.map((i) =>{
        console.log(i.toString());
    });
    console.log("Buffer converted")
});

myEmitter.emit("convert", buf);
