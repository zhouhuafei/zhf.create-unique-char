const createUniqueChar = require('../dist/index.min');

test(`生成唯一字符`, () => {
    console.log(createUniqueChar());
    console.log(createUniqueChar(2)); // 2进制
    console.log(createUniqueChar(8)); // 8进制
    console.log(createUniqueChar(10)); // 10进制
    console.log(createUniqueChar(16)); // 16进制
    console.log(createUniqueChar(36)); // 36进制
    expect(true).toEqual(true);
});
