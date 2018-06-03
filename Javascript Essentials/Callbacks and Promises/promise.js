const applyDiscount = new Promise(function (resolve,reject) {
    //REsolves executes when the function is executed successfully
    //Reject executes when the function has failed
    const discount = true;

    if(discount){
        resolve('Discount Applied');
    }
    else{
        reject('Discount failed');
    }
});

applyDiscount.then(function(result){
    // .then uses values from 'resolve'
    console.log(result);
}).catch(function(result){
    // .catch uses values from 'reject'
    console.log(result);
});
