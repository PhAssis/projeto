const path = require('path');
const fs = require('fs');

const content = fs.readFileSync(path.resolve(__dirname, '../conteudo/content/content.html'),'utf-8');

const area = document.querySelector('.area');

area.innerHTML = content;




