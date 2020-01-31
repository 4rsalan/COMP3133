const os = require('os');

console.log("== System ==");
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}\n`);

console.log("== NodeJS ==");
console.log(`Node Version: ${process.version}`);
console.log(`v8 Version: ${process.versions.v8}`);
console.log(`Libuv version: ${process.versions.uv}\n`);

console.log("== Process ==");
console.log(`PID: ${process.pid}`);
console.log(`Title: ${process.title}`);
console.log(`Current directory: ${process.cwd()}`);
