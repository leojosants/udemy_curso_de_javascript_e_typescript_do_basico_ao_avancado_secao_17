const { html } = require('../base/base');

function example01() {
    console.log(html);
    console.log('\n---------------------------------------------------------------\n');
    console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
    example01();
}

function example02() {
    console.log('\n',html);
    console.log('\n---------------------------------------------------------------\n');
    console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy
}
example02();