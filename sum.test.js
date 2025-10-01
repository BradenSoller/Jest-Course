const sum = require('./sum');
const myFunction = require('./sum');
test('adds 1 + 2 to equal 3', () => {
    //toBe() works best for numbers, boleans, and strings.
    expect(sum(1,2)).toBe(3);
});

test('object assignment', () => { 
    //creating an object named data with a property named one with the value of 1.
    const data = { one: 1 }
    //adds a proprety named two with the value of 2 to the data object.
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});


test('null is falsy', () => {
    const n = null;
    //this checks if anwsers are undefined, null, zero, or false 
    expect(n).toBeFalsy();
});

test('null is falsy', () => {
    const n = null;
    //this checks if anwsers are undefined, null, zero, or false 
    expect(n).toBeFalsy();
});

test("throws on invalid input ", () => {
    expect(() => {
      //error throwing function 
    myFunction("fdgfg");
  }).toThrow();
});