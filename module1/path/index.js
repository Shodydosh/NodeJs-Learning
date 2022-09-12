const path = require('path');

const filePath = './b.txt';

const url = 'https://www.facebook.com/';

console.log(path.join("asd", "123"));

// {
//     root: '',
//     dir: 'https:/',
//     base: 'www.facebook.com',
//     ext: '.com',
//     name: 'www.facebook'
//   }

const thuMuc = 'src';
const thuMucCon = 'components';
const fileName = 'index.js';

console.log(path.join(thuMuc, thuMucCon, fileName));