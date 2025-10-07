//function sum(a,b){
//    return a + b;
//}




//function myFunction(input) {
 //   if (typeof input !== 'number') {
 //       throw new Error("Invalid input");
 // }
//}

function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("peanut butter")}, 100);
    })
};


    
module.exports = fetchPromise;
