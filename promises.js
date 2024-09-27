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