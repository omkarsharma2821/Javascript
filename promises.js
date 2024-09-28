// A Promise in JavaScript represents an eventual completion (or failure) of an asynchronous operation
// It allows you to write asynchronous code
// more readable and manageable way, avoiding callback hell 
// A Promise can be in one of three states:
// Pending, Fulfilled, Rejected
// Key Methods: then(), catch(), finally()

// -------------------------------------------------------------------------------------------

// callback: A callback is a function passed into another function as an argument
// Asynchronous Callback (Using setTimeout)
// function printMessage() {
//     console.log("This message is displayed after 2 seconds");
//   }
//   setTimeout(printMessage, 2000); // Executes the callback after 2 seconds
  

// promise creation

const promiseOne = new Promise(function(resovle, reject){
    // Do any async task
    // networking calls, DB operations, cryptograpghy
    setTimeout(function(){
        console.log("Async task completed");
        resovle(); // we can pass parameter inside resovle
    },1000)
});

promiseOne.then(function(){
    console.log('promise consumed');
})


new Promise((resovle, reject) => {
    setTimeout(() =>{
        let error = false;
        if(!error){
            resovle({username: 'Omkar', password: 123});
            // console.log('Async task 2 complated');
        } else {
            reject('Error : Something went Wrong');
        }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username;
    console.log('promise 2 consumed');
}).then((user)=> {
    console.log(user)
}).catch(() => console.log('Error'))


const PromiseTwo = new Promise(function(resovle, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resovle({username: 'Omkar', password : 123});
        } else{
            reject("error : something went wrong")
        }
    }, 1000)
});

PromiseTwo.then(function(user){
    console.log(user);
}).catch(() => console.log("error2"));


const promisethree = new Promise(function(resovle, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resovle({username: 'Omkar', password : 123});
        } else{
            reject("error : something went wrong")
        }
    }, 1000)
})

// aysnc and await direct cannot handle the error 
async function consumePromiseThree(){
    try {
        const response = await promisethree;
        console.log(response);
    } catch (error) {
        console.log("err");
    }
}

consumePromiseThree();

fetch('https://api.github.com/users/omkarsharma2821')
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
})

// fetch will be executed first because it is in priority queue