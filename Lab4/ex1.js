const buffer_array = Buffer.from([8,6,7,5,3,0,9]);
const buffer_string = Buffer.from("I'm a string", "utf-8");

console.log(buffer_array);
//Convert buffer_string to string
console.log("String:", buffer_string.toString());
//Convert buffer_string to hex
console.log("Hex:", buffer_string.toString("hex"));
//Convert buffer_string to utf-8 and read from 0 to 10
console.log("String:", buffer_string.toString("utf-8", 0, 10));
//join the buffer_array and buffer_string and output
const joined_buffer = Buffer.concat([buffer_array, buffer_string]);
console.log(joined_buffer);
//convert the joined_buffer to JSON and output (using Buffer.concat)
const json = JSON.stringify(joined_buffer);
console.log(json);
