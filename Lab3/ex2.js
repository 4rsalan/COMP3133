/*●	Write two functions that use Promises that you can chain! The first function, makeUpperCase(), will take in an array
of words and capitalize them, and then the second function, sortWords(), will sort the words
in alphabetical order. If the array contains anything but strings, it should throw an error.
 */

const makeUpperCase = arr =>{
    return new Promise((resolve, reject) =>{
        for (let i = 0; i < arr.length; i++){
            if (typeof arr[i] !== "string"){
                reject("ERROR Not all items in the array are strings")
            }
            else{
                arr[i] = arr[i].toUpperCase()
            }
        }
        resolve(arr)
    })
};

const sortWords = arr =>{
    return new Promise((resolve, reject) =>{
        resolve(arr.sort());
    })
};

const names = ["Messi", 'Peter Crouch', 'Jack'];
const bad = ['peter', true, 50];

makeUpperCase(names)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeUpperCase(bad)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));
