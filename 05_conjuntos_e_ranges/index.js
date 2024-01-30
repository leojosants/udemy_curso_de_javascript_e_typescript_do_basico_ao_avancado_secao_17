/*
    [abc]   -   set
    [^]     -   negation
    [min-max]
*/

const { alphabet } = require('../base/base');

function example01() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[abc]/g));
    example01();
}

function example02() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[abc]+/g));
    example02();
}

function example03() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[abc123]+/g));
    example03();
}

function example04() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[^abc123]+/g));
    example04();
}

function example05() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[0-9]/g));
    example05();
}

function example06() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[^0-9]/g));
    example06();
}

function example07() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[0-9]+/g));
    example07();
}

function example08() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[a-z]+/g));
    example08();
}

function example09() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[A-Z]+/g));
    example09();
}

function example10() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[a-zA-Z0-9]+/g));
    example10();
}

function example11() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[^a-zA-Z0-9]+/g));
    example11();
}

// unicode
function example12() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[\u00A0-\u00BA]+/g));
    example12();
}

function example13() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/[a-zA-Z0-9çã]+/g));
    example13();
}

// shorthand
function example14() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/\w+/g));
    example14();
}

// shorthand - negation
function example15() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/\W+/g));
    example15();
}

// shorthand
function example16() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/\d+/g));
    example16();
}

// shorthand - negation
function example17() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/\D+/g));
    example17();
}

// shorthand
function example18() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/\s+/g));
    example18();
}

// shorthand - negation
function example19() {
    console.log('\n', alphabet);
    console.log('\n-----------------------------------------------------\n');
    console.log(alphabet.match(/\S+/g));
}
example19();