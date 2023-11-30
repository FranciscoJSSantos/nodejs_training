const fs = require("fs");

//necessario criar arquivo
fs.unlink("arquivo.txt", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("arquivo removido!");
});
