const { cpfs, ips } = require('../base/base');

function exerciseCPFS() {

    console.log(cpfs);
    // console.log(cpfs.match(/[0-9]/g));
    // console.log(cpfs.match(/[0-9]{3}/g));
    // console.log(cpfs.match(/[0-9]{3}\./g));
    // console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\./g));
    // console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-/g));
    // console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
    // console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
    console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));
    exerciseCPFS();
}

function exerciseIPS() {
    console.log(ips);

    // const ipRegExp = /(25[0-5])/g;       // 200 - 255
    // const ipRegExp = /(25[0-5])(\.)/g;   // 200 - 255
    // const ipRegExp = /^(25[0-5])(\.)/g;  // 200 - 255
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9])(\.)/g;     // 200 - 255 200 - 249
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2})(\.)/g;     // 200 - 255 / 200 - 249 / 100 - 199
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d)(\.)/g;     // 200 - 255 / 200 - 249 / 100 - 199 / 10 - 99
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)/g;     // 200 - 255 / 200 - 249 / 100 - 199 / 10 - 99 / 0 - 9
    // const ipRegExp = /^(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;     // 200 - 255 / 200 - 249 / 100 - 199 / 10 - 99 / 0 - 9
    const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;     // 200 - 255 / 200 - 249 / 100 - 199 / 10 - 99 / 0 - 9

    // for (let i = 0; i <= 300; i++) {
    //     const ip = `${i}.${i}.${i}.${i}`;
    //     console.log(ip, ip.match(ipRegExp));
    // }

    console.log(ips.match(ipRegExp));
}
exerciseIPS();