/**
 *  flags
 *  g   - global (find all occurrences)
 *  i   - insensitive (does not check capital letters)
 *  ()  - groups
 *  |   - or
 */

const { text } = require('../base/base');

function example01() {
    // const regExp1 = /João/;
    // const regExp1 = /João/g;
    // const regExp1 = /João/gi;
    // const regExp1 = /João/i;
    const regExp1 = /Teve 5 filhos/i;

    console.log(regExp1.test(text));
    example01();
}

function example02() {
    const regExp1 = /Teve 5 filhos/i;

    console.log(regExp1.exec(text));
    console.log(regExp1.exec(text)[0]);
    console.log(regExp1.exec(text).index);
    console.log(regExp1.exec(text).input);
    example02();
}

function example03() {
    // const regExp1 = /(Teve )(5 filhos)/i;
    const regExp1 = /(maria)(, hoje sua esposa)/i;
    const found = regExp1.exec(text);

    console.log(found);
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
    example03();
}

function example04() {
    // const regExp1 = /(Teve )(5 filhos)/i;
    const regExp1 = /(maria|joão|luiz)(, hoje sua esposa)/i;
    const found = regExp1.exec(text);

    if (found) {
        console.log(found);
        console.log(found[0]);
        console.log(found[1]);
        console.log(found[2]);
    }
}
example04();