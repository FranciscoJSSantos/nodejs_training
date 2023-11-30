const fs = require("fs");

//necessario criar arquivo
fs.rename("arquivo.txt", 'novoarquivo.txt',function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('arquivo renomado com sucesso')
});
