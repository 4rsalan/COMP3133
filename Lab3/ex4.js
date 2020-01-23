/*●	Task 1. Rewrite the function and name it delayedPromise, so that it uses a Promise.
 Resolving new function in the in the following way returns an output of 25
 */

const delayedPromise = num =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("done");
            resolve(num*num);
        }, 500)
    })
};

const asyncPromise = async num =>{
    setTimeout( () =>{
        console.log("Async Done");
        return num*num;
    }, 500);
};

delayedPromise(5)
    .then(r => console.log(r));

asyncPromise(6)
    .then(r => console.log(r));
