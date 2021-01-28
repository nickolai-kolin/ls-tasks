const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num =>  num % 2 == 0;

let filterArray = (arrTofilter, filterFunc) => {
  return arrTofilter.filter(el => filterFunc(el));

}
console.log(filterArray(mixedArray, isEven));

