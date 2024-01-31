/*
    $1 $2   -   rearview mirrors
*/

const { html2 } = require('../base/base');

function example01() {
    console.log('\n', html2, '\n');
    console.log(html2.match(/<(\w+)>.+<\/\1>/gi));
    example01();
}

function example02() {
    console.log('\n', html2);
    console.log('\n------------------------------\n');
    console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g));
    example02();
}

function example03() {
    console.log('\n', html2);
    console.log('\n------------------------------\n');
    console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));
    example03();
}

function example04() {
    console.log('\n', html2);
    console.log('\n------------------------------\n');
    console.log(html2.match(/<(\w+)([\s\S]*?>[\s\S]*?)<\/\1>/g));
    example04();
}

function example05() {
    console.log('\n', html2);
    console.log('\n------------------------------\n');
    // console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
    console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 -> $3 <- $4'));
}
example05();