setInterval(() => null, 1000);

process.on('SIGINT', () =>{
    console.log("Signal interrupted");
    console.log(`Process uptime on signal interrupt ${process.uptime()}`);
    process.exit(0);
});

process.on('exit', () =>{
    console.log("Signal Killed");
    console.log(`Process uptime on signal exit ${process.uptime()}`);
    process.exit(0);
});
