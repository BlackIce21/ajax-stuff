// var num = 3;
//
// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function fact(num) {
//   var result = 1;
//   for (var i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }
//
// console.log(isEven(num));
// console.log(fact(num));
//
// var str = "hello-world";
//
// function snake(str) {
//   var newStr = str.replace('/-/g', '_');
//   console.log(newStr);
// }
//
// snake(str);
//
//
// var arr = ["c", "b", "a"];
//
// function printRev(arr) {
//   var str = "";
//   for (var i = arr.length - 1; i >= 0; i--) {
//     str += arr[i];
//   }
//   return str;
// }
// console.log(printRev(arr));
//
// var arr1 = [1, 1, 1, 1];
// var arr2 = [2, 1, 3, 5];
//
// function identical(arr){
//   var x = arr[0];
//   for(var i=1;i<=arr.length-1;i++){
//     if(arr[i] === x){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(identical(arr2));
//
// function sumArray(arr) {
//   var res = 0;
//   for (var i = 0; i <= arr.length - 1; i++) {
//     res += arr[i];
//   }
//   return res;
// }
//
// console.log(sumArray(arr1));
//
// function maxArray(arr) {
//   var max = arr[0];
//   for (var i = 1; i <= arr.length - 1; i++) {
//     if (arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log("Maximum is " + maxArray(arr2));

var test1 = [1,2,3,4];
test1.forEach(function(num){
  console.log(num);
});

// Custom forEach

function printing(n){
  console.log("printing using custom: " + n);
}

Array.prototype.customForeach = function (fun){
  for(var i=0;i<this.length;i++){
    fun(this[i]);
  }
};

test1.customForeach(printing);
