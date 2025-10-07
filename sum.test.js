const fetchData = require("./sum");


//done is parameter that performs a callback to let jest know when the test is complete.
test("the data is peanut butter", done => {
    function callback(data) {
        try {
            expect(data).toBe("peanut butter");
            //this is where done is called to let jest know the test is complete.
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
});