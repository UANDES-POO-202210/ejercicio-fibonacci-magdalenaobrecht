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
    return 0;
  }
  else if (n==1){
    return 1;
  }
  if (n>1){
    return fibonacci(n-1)+fibonacci(n-2)
  }
}