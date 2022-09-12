const fs = require('fs');

//! appendFile
// fs.appendFile('./hello.js', "console.log('hello world')", () => {
//     console.log('File created');
// });
fs.appendFile('./a.txt', "xxxxxx", () => {
    console.log('File created');
});

let a;
fs.readFile('./a.txt', 'utf8', (err, data) => {

    fs.appendFile('./b.txt', data, () => {
        console.log('File copied');
    });

    fs.writeFile('./a.txt', 'abc', () => {
        console.log('a changed');
    });
});


//! readFile
// fs.readFile('./hel232lo.js', { encoding: 'utf8' }, (err, data) => {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.log(data);
//     }
// })

//! unlink
// fs.unlink('./hello.js', () => {
//     console.log('File deleted');
// })

/*
// Bất đồng bộ là một hoạt động mà chưa có kq ngay lập tức(chạy ngầm)
// call back 
*/