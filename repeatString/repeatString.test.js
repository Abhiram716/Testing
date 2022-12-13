const repeatString = require('./repeatString')


test('repeats the string 1 times', () => {
    expect(repeatString('hey', 1)).toEqual('hey');
});


test('repeats the string 0 times', () => {
expect(repeatString('hey', 3)).toEqual('heyheyhey');
});

