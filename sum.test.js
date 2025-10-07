const fetchPromise = require("./sum");

//data is resolved value from the promise.
test('the data is peanut butter', () => { 
    return expect(fetchPromise()).resolves.toBe('peanut butter');
});

//data is rejected value from the promise.
test('the fetch fils with an error', () => {
    return expect(fetchPromise()).rejects.toMatch('error');
});
    
    
