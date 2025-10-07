const fetchPromise = require("./sum");



//async siginifies that the function will be performing an asynchronous operation AKA waits for operations 
// to complete before moving on.
test("the data is peanut butter", async () => { 
    //await pauses the function until the promise is resolved.
    const data = await fetchPromise();
    expect(data).toBe('peanut butter');
});
