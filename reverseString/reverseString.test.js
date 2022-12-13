const reverseString = require("./reverseString.js")

test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test.skip('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

