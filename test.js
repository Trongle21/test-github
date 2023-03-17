const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Nhập số nguyên thứ nhất: ", (num1) => {
    console.log(`Bạn vừa nhập số nguyên thứ nhất là: ${num1}`);
    readline.close();
  })