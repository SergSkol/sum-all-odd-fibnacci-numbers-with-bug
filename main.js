// module.exports = 
function sum(num) {
  if (num==1) {return 1}
  let f1 = 1;
  let f2 = 1;
  let f = 0;
  let res = 2;
  while (f2<num) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    if ((f / 2 !== 0) && (f <= num)) {res = res + f}
  }
  return res;
}

console.log(sum(10)); //sum(10) should be = 10: 1 1 (2) 3 5