/**
 *  flags
 *  g   - global (find all occurrences)
 *  i   - insensitive (does not check capital letters)
 *  ()  - groups
 *  |   - or
 */

const { text } = require('../base/base');

function example01() {
    const regExp1 = /João/gi;

    console.log(text);
    console.log(text.match(regExp1));
    example01();
}

function example02() {
    const regExp1 = /João|Maria/gi;

    console.log(text);
    console.log(text.match(regExp1));
    example02();
}

function example03() {
    const regExp1 = /João|Maria/gi;

    console.log(text);
    console.log('----------------------------------------------------------------------------------------');
    console.log(text.match(regExp1));
    console.log('----------------------------------------------------------------------------------------');
    console.log(text.replace('João', '->Felipe'));
    example03();
}

function example04() {
    const regExp1 = /João|Maria/gi;

    console.log(text);
    console.log('-------------------------------------------------------------\n');
    console.log(text.match(regExp1));
    console.log('\n-------------------------------------------------------------');
    console.log(text.replace(/João/gi, '->Felipe'));
    example04();
}

function example05() {
    const regExp1 = /João|Maria/gi;

    console.log(text);
    console.log('-------------------------------------------------------------\n');
    console.log(text.match(regExp1));
    console.log('\n-------------------------------------------------------------');
    console.log(text.replace(/João|Maria/gi, '->Felipe'));
    example05();
}

function example06() {
    const regExp1 = /João|Maria/gi;

    console.log(text);
    console.log('-------------------------------------------------------------\n');
    console.log(text.match(regExp1));
    console.log('\n-------------------------------------------------------------');
    console.log(text.replace(/(João|Maria)/gi, '"$1"'));
    example06();
}

function example07() {
    const regExp1 = /João|Maria/gi;

    console.log(text);
    console.log('-------------------------------------------------------------\n');
    console.log(text.match(regExp1));
    console.log('\n-------------------------------------------------------------');
    console.log(text.replace(/(João|Maria)/gi, '<b>$1</b>'));
    example07();
}

function example08() {
    const regExp1 = /João|Maria/gi;

    console.log(text);
    console.log('-------------------------------------------------------------\n');
    console.log(text.match(regExp1));
    console.log('\n-------------------------------------------------------------');

    console.log(text.replace(/(João|Maria)/gi, function (input) {
        return '-> ' + input.toUpperCase() + ' <-';
    }));
}
example08();