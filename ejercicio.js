const fs = require('fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(fibonacci(data));
});

function fibonacci(n){
  if (n==0){
    return n;
  }
  else if (n==1){
    return n;
  }
  if (n>1){
    return fibonacci(n-1)+fibonacci(n-2)
  }
}