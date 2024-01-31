/*
    ^   -   starts with
    $   -   ends with
    [^] -   negation
    m   -   multiline
*/

const { cpfs2 } = require('../base/base');

function example01() {
    const cpf = '254.224.877-45';
    const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/g;
    console.log(cpf.match(cpfRegExp));
    example01();
}

function example02() {
    const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;

    console.log('\n', cpfs2);
    console.log('\n---------------------------------------\n');
    console.log(cpfs2.match(cpfRegExp));
}
example02();