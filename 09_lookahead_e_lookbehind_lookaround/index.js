/*
    g       -   global
    m       -   multiline
    i       -   insensitive
    $       -   ends with
    [^]     -   negation
    ?=      -   positive lookahead
    ?!      -   negative lookahead
    ?<-     -   positive lookbehind 
    ?<!     -   negatitive lookbehind 
*/

// const { lookahead } = require('../base/base');

function example01() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');
    console.log(lookahead.match(/.+[^in]active$/gim));
    example01();
}

// positive lookahead
function example02() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');

    // positive lookahead (phrase that has the word 'active')
    console.log(lookahead.match(/.+(?=[^in]active)/gim));
    example02();
}

// positive lookahead
function example03() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');

    // positive lookahead (phrase that has the word 'inactive')
    console.log(lookahead.match(/.+(?=\s+inactive)/gim));
    example03();
}

// negative lookahead
function example04() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');

    // negative lookahead (phrase that does not has the word 'active')
    console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));
    example04();
}

// negative lookahead 
function example05() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');

    // negative lookahead (phrase that does not has the word 'active')
    console.log(lookahead.match(/^(?!.+inactive).+$/gim));
    example05();
}

// positive lookbehid 
function example06() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');

    // positive lookbehind (phrase that starts with 'online')
    console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gim));
    example06();
}

// negative lookbehid 
function example07() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');

    // negative lookbehind (phrase that does not starts with 'online')
    console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));
    example07();
}

function example08() {
    const { lookahead } = require('../base/base');

    console.log(lookahead);
    console.log('-----------------------------------------\n');

    const cpf = `
    012.250.796-10
    000.000.000-01
    111.111.111-11
    147.285.963-10
    aaa.bbb.ccc-dd
    `;

    console.log(cpf.match(/(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}/gm));
}
example08();