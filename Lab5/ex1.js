const fs = require('fs');

console.log(`Current working directory ${process.cwd()}`);
process.argv.forEach((val, index) => {
    console.log(`Arg #${index}: ${val}`);
});

fs.readdir(process.cwd(), (err, items) =>{
    console.log("DIRECTORY CONTENTS");
    items.map((item) =>{
        console.log(item)
    })
});
