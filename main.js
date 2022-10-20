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

function call_sum_all_odd_fibo(input) {
  let result = sum(Number(input));
  document.getElementById('result').innerHTML = input+" : "+result;
}