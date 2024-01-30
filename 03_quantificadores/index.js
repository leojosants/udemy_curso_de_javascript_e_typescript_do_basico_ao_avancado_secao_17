/*
    *       -   optional    -   0 or n
    +       -   mandatory   -   1 or n
    ?       -   optional    -   0 or 1
    \       -   leakege
    {n, n}  -   {min, max}
                {10,}       -   at least 10
                {,10}       -   from 0 to 10
*/

const { text, files } = require('../base/base');

function example01() {
    const regExp1 = /Jo+ão/gi;

    console.log(text);
    console.log('---------------------------------------------------\n');
    console.log(text.match(regExp1));
    example01();
}

function example02() {
    const regExp1 = /Jo+ão+/gi;

    console.log(text);
    console.log('---------------------------------------------------\n');
    console.log(text.match(regExp1));
    example02();
}

function example03() {
    const regExp = /\.jpg/g;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        console.log(file, file.match(regExp));
    }

    example03();
}

function example04() {
    const regExp = /\.jpg/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        console.log(file, file.match(regExp));
    }

    example04();
}

function example05() {
    const regExp = /\.(jpg|jpeg)/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        console.log(file, file.match(regExp));
    }

    example05();
}

function example06() {
    const regExp = /\.jpe?g/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        console.log(file, file.match(regExp));
    }

    example06();
}

function example07() {
    const regExp = /\.jpe*g/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        console.log(file, file.match(regExp));
    }

    example07();
}

function example08() {
    const regExp = /\.jpe?g/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        const valid = file.match(regExp);
        if (!valid) continue;
        console.log(file, valid);
    }

    example08();
}

function example09() {
    const regExp = /\.jpe{0,}g/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        const valid = file.match(regExp);
        console.log(file, valid);
    }

    example09();
}

function example09() {
    const regExp = /\.jpe{1,}g/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        const valid = file.match(regExp);
        console.log(file, valid);
    }

    example09();
}

function example10() {
    const regExp = /\.jpe{0,1}g/gi;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        const valid = file.match(regExp);
        console.log(file, valid);
    }

    example10();
}

function example11() {
    const regExp = /\.(jp|JP)(e|E)?(g|G)/g;

    console.log(files);
    console.log('---------------------------------------------------\n');

    for (const file of files) {
        const valid = file.match(regExp);
        console.log(file, valid);
    }

}
example11();