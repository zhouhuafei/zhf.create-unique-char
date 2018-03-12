const createUniqueChar = require('../dist/index.min');

test(`生成唯一字符`, () => {
    console.log(createUniqueChar());
    console.log(createUniqueChar());
    console.log(createUniqueChar());
    console.log(createUniqueChar());
    console.log(createUniqueChar());
    console.log(createUniqueChar());
    expect(true).toEqual(true);
});
