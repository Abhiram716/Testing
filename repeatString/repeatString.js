const repeatString = function(word, times) {
    let string = '';
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
};
  
module.exports = repeatString;

