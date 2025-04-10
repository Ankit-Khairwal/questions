function leftR(arr, d) {
  d = d % arr.length;
  for (let i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];
let d = 2;
let rotate = leftR(arr, d);
console.log(rotate.join(" "));
