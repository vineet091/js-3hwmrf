import './style.css';

// Input: s = "101023"
// Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

var outputIpArray = [];
function findValidIPs(str, currentIP, index = 0) {
  if (str) {
    if (
      (index === 1 && str.length > 9) ||
      (index === 2 && str.length > 6) ||
      (index === 3 && str.length > 3) ||
      (index === 3 && str.length > 1 && parseInt(str[0]) === 0) ||
      (index === 3 && parseInt(str, 10) > 255)
    ) {
      return;
    }

    var validIPPoints = index === 3 ? [str] : [str[0]];
    if (index !== 3) {
      let lastValidIP = str[0];
      for (var i = 1; i < 3; i++) {
        var currentValidIP = lastValidIP;
        if (parseInt(str[0]) !== 0 && str[i]) {
          currentValidIP += str[i];
          if (parseInt(currentValidIP, 10) <= 255) {
            validIPPoints.push(currentValidIP);
            lastValidIP = currentValidIP;
          }
        }
      }
    }
    for (var j = 0; j < validIPPoints.length; j++) {
      var ip = validIPPoints[j];
      if (index === 3) {
        outputIpArray.push(currentIP + ip);
      } else {
        var remStr = str.slice(ip.length, str.length);
        const nextIndex = index + 1;
        findValidIPs(remStr, currentIP + ip + '.', nextIndex);
      }
    }
  }
}
findValidIPs('101023', '', 0);
console.log('outputArray', outputIpArray);

// Max Sum in Array
// var a = [-2, -3, 4, -1, -2, 1, 5, -3];
// var max_sum = a[0];
// var max_range = a[0];
// for (var i = 0; i < a.length; i++) {
//   max_range = a[i] > max_range + a[i] ? a[i] : max_range + a[i];
//   max_sum = max_sum > max_range ? max_sum : max_range;
// }
// console.log(max_sum);

// Max Product in an array
// var a = [-2, -3, 4, 1, -2, 5, 1, 7, -3];
// var max_product = a[0];
// var max_range = a[0];
// for (var i = 0; i < a.length; i++) {
//   max_range = a[i] > max_range * a[i] ? a[i] : max_range * a[i];
//   max_product = max_product > max_range ? max_product : max_range;
// }
// console.log(max_product);

// Max substring with unique characters
var str = 'gksforeegkd';
var substrLn = 1;
var substr = '';
for (var i = 0; i < str.length; i++) {
  var obj = {};
  for (var j = i; j < str.length; j++) {
    if (obj[str[j]]) {
      break;
    } else {
      obj[str[j]] = true;
      substrLn = Math.max(substrLn, j - i + 1);
      substr = substrLn > j - i + 1 ? substr : str.slice(i, i + substrLn);
    }
  }
}
console.log(substrLn, substr);

// Max substring with unique characters in O(n)
// var str = "gksforeegkd";
// var substrLn = 0;
// var substr = "";
// var lastIndex = {};
// var i = 0;
// for (var j = i; j < str.length; j++) {
//   i = Math.max(i, lastIndex[str[j]] ? lastIndex[str[j]] + 1 : 0);
//   substrLn = Math.max(substrLn, j - i + 1);
//   substr = substrLn > j - i + 1 ? substr : str.slice(i, i + substrLn);
//   lastIndex[str[j]] = j;
// }
// console.log(substr, lastIndex);

// Max pallindrome substring
// var str = "geviniveraard";
// var substrLn = 1;
// var start = 0;
// var substr = "";
// for (var i = 0; i < str.length; i++) {
//   for (var j = i; j < str.length; j++) {
//     var flag = 1;
//     for (var k = 0; k < (j - i + 1) / 2; k++) {
//       if (str[k + i] !== str[j - k]) {
//         flag = 0;
//       }
//     }
//     if (flag && j - i + 1 > substrLn) {
//       substrLn = j - i + 1;
//       start = i;
//     }
//   }
// }
// substr = str.slice(start, start + substrLn);
// console.log(substrLn, substr);

// check pallindrome
// var str = "geviniveg";
// var flag = true;
// for (var i = 0; i < str.length / 2; i++) {
//   if (str[i] !== str[str.length - 1 - i]) {
//     flag = false;
//   }
// }
// console.log(flag);

// revere a string
// var str = "hello";
// var rev = [];
// for (var k = 0; k < str.length / 2; k++) {
//   rev[k] = str[str.length - k];
//   rev[str.length - k] = str[k];
// }
// console.log(rev.join(""));

// reverse a words in a string
// var str = "hello how are you";
// var strArray = str.split(" ");
// var revArray = [];
// for (var i = 0; i < strArray.length; i++) {
//   var subStr = strArray[i];
//   var rev = [];
//   for (var k = 0; k < subStr.length / 2; k++) {
//     rev[k] = subStr[subStr.length - k];
//     rev[subStr.length - k] = subStr[k];
//   }
//   revArray.push(rev.join(""));
// }
// console.log(revArray.join(" "));

// Check anagram
// var str1 = "listenn";
// var str2 = "silnnt";
// var objCount = {};
// for (var i = 0; i < str1.length; i++) {
//   if (objCount[str1[i]]) {
//     objCount[str1[i]]++;
//   } else {
//     objCount[str1[i]] = 1;
//   }
// }
// for (var j = 0; j < str2.length; j++) {
//   var count = objCount[str2[j]] || 0;
//   objCount[str2[j]] = count - 1;
// }
// var flag = true;

// for (var item in objCount) {
//   if (objCount[item] !== 0) {
//     flag = false;
//   }
// }
// console.log(flag);

// sort an array
// var ar1 = [1, 5, 7, 9, 2, 6, 5, 3];
// console.log(ar1.sort());
// ar1.sort((a, b) => {
//   return a > b ? 1 : -1;
// });
// console.log(ar1);

// for (var i = 0; i < ar1.length; i++) {
//   for (var k = i + 1; k < ar1.length; k++) {
//     if (ar1[i] > ar1[k]) {
//       var swap = ar1[i];
//       ar1[i] = ar1[k];
//       ar1[k] = swap;
//     }
//   }
// }
// console.log(ar1);

// Sort an array with negative index not changed

// var ar1 = [1, -5, 7, 9, -2, 6, 5, -3];
// for (var i = 0; i < ar1.length; i++) {
//   for (var k = i + 1; k < ar1.length; k++) {
//     if (ar1[i] > 0 && ar1[k] > 0 && ar1[i] > ar1[k]) {
//       var swap = ar1[i];
//       ar1[i] = ar1[k];
//       ar1[k] = swap;
//     }
//   }
// }
// console.log(ar1);

// Merge 2 sorted array
// var ar1 = [1, 4, 7, 8];
// var ar2 = [1, 2, 3, 5, 6];
// var ar = [];
// var maxLen = ar1.length + ar2.length;
// var k = 0;
// var j = 0;
// for (var i = 0; i < maxLen; i++) {
//   if (ar1[j] && ar2[k]) {
//     if (ar1[j] < ar2[k]) {
//       ar[i] = ar1[j];
//       j++;
//     } else {
//       ar[i] = ar2[k];
//       k++;
//     }
//   } else if (ar1[j]) {
//     ar[i] = ar1[j];
//     j++;
//   } else if (ar2[k]) {
//     ar[i] = ar2[k];
//     k++;
//   }
// }
// console.log(ar);

// Merge 2 sorted array with unique value
// var ar1 = [2, 4, 5, 7, 9, 9];
// var ar2 = [1, 2, 3, 5, 6];
// var ar = [];
// var j = 0; //ar1
// var k = 0; //ar2
// var i = 0; //ar
// let loop = true;
// var objExist = new Map();
// while (loop) {
//   if (ar1[j] && ar2[k]) {
//     if (objExist[ar1[j]]) {
//       j++;
//     } else if (objExist[ar2[k]]) {
//       k++;
//     } else if (ar1[j] < ar2[k]) {
//       ar[i] = ar1[j];
//       objExist[ar1[j]] = true;
//       j++;
//       i++;
//     } else {
//       ar[i] = ar2[k];
//       objExist[ar2[k]] = true;
//       k++;
//       i++;
//     }
//   } else if (ar1[j]) {
//     if (objExist[ar1[j]]) {
//       j++;
//     } else {
//       ar[i] = ar1[j];
//       objExist[ar1[j]] = true;
//       j++;
//       i++;
//     }
//   } else if (ar2[k]) {
//     if (objExist[ar2[k]]) {
//       k++;
//     } else {
//       ar[i] = ar2[k];
//       objExist[ar2[k]] = true;
//       k++;
//       i++;
//     }
//   }
//   if (!ar1[j] && !ar2[k]) {
//     loop = false;
//   }
// }
// console.log(ar);

//sort a string
// var str = "sajhaseiowi";
// console.log(
//   str
//     .split("")
//     .sort((a, b) => {
//       return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//     })
//     .join("")
// );

// Traverse a 2d array
// var arr = [
//   [1, 2, 3, 4, 5, 21],
//   [6, 7, 8, 9, 10, 22],
//   [11, 12, 13, 14, 15, 23],
//   [16, 17, 18, 19, 20, 24]
// ];
// var result = [];
// var count = 0;
// var loop = true;
// var i = 0;
// var j = 0;
// var iMax = arr.length - 1;
// var iMin = 0;
// var jMax = arr[0].length - 1;
// var jMin = 0;
// var direction = 1;
// while (loop && count < 30) {
//   result.push(arr[i][j]);
//   if (direction === 1 && i === iMax && j === jMin && jMax > jMin) {
//     jMin = jMin + 1;
//     direction = 2;
//   } else if (direction === 2 && i === iMax && j === jMax) {
//     if (iMax > iMin) {
//       iMax = iMax - 1;
//     } else if (jMax > jMin) {
//       jMin = jMin + 1;
//     }
//     direction = 3;
//   } else if (direction === 3 && i === iMin && j === jMax && jMax > jMin) {
//     direction = 4;
//     jMax = jMax - 1;
//   } else if (direction === 4 && j === jMin && i === iMin) {
//     if (iMax > iMin) {
//       iMin = iMin + 1;
//     } else if (jMax > jMin) {
//       jMax = jMax - 1;
//     }
//     direction = 1;
//   }
//   if (direction === 1) {
//     if (i < iMax) i = i + 1;
//   } else if (direction === 2) {
//     if (j < jMax) j = j + 1;
//   } else if (direction === 3) {
//     if (i > iMin) i = i - 1;
//   } else if (direction === 4) {
//     if (j > jMin) j = j - 1;
//   }
//   if (iMin === iMax && jMin === jMax) {
//     loop = false;
//   }
//   count++;
// }
// console.log(result);
// console.log(performance.now());
// Traverse a 2d array
// var arr = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20]
// ];

// var count = 0;
// var loop = true;
// var i = 0;
// var j = 0;
// var iMax = arr.length - 1;
// var iMin = 0;
// var jMax = arr[0].length - 1;
// var jMin = 0;
// var direction = 1;
// while (loop && count < 30) {
//   console.log(arr[i][j], iMin, iMax, jMin, jMax, direction);
//   if (direction === 1 && i === iMin && j === jMax) {
//     if (iMax > iMin) {
//       iMin = iMin + 1;
//     } else if (jMin > jMax) {
//       jMax = jMax - 1;
//     }
//     direction = 2;
//   } else if (direction === 2 && i === iMax && j === jMax) {
//     if (jMax > jMin) {
//       jMax = jMax - 1;
//     } else if (iMax > iMin) {
//       iMax = iMax - 1;
//     }
//     direction = 3;
//   } else if (direction === 3 && i === iMax && j === jMin) {
//     if (iMax > iMin) {
//       iMax = iMax - 1;
//     } else if (jMin < jMax) {
//       jMin = jMin + 1;
//     }
//     direction = 4;
//   } else if (direction === 4 && j === jMin && i === iMin) {
//     if (jMax > jMin) {
//       jMin = jMin + 1;
//     } else if (iMax > iMin) {
//       iMin = iMin + 1;
//     }
//     direction = 1;
//   }
//   if (direction === 1) {
//     if (j < jMax) j = j + 1;
//   } else if (direction === 2) {
//     if (i < iMax) i = i + 1;
//   } else if (direction === 3) {
//     if (j > jMin) j = j - 1;
//   } else if (direction === 4) {
//     if (i > iMin) i = i - 1;
//   }
//   if (iMin === iMax && jMin === jMax) {
//     loop = false;
//   }
//   count++;
// }

// var arr = [
//   [1, 2, 3, 4, 5, 21],
//   [6, 7, 8, 9, 10, 22],
//   [11, 12, 13, 14, 15, 23],
//   [16, 17, 18, 19, 20, 24]
// ];

// /* SAMPLE OUTPUT
// [1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 5, 4, 3, 2, 7, 12, 13, 14, 9, 8]
// */
// var minr = 0,
//   minc = 0,
//   maxr = arr.length,
//   maxc = arr[0].length,
//   n = maxr * maxc,
//   counter = 0,
//   result = [];

// while (counter < n) {
//   //left wall
//   for (let i = minr; i < maxr; i++) {
//     result.push(arr[i][minc]);
//     counter++;
//   }
//   minc = minc + 1;
//   //bottom wall
//   for (let j = minc; j < maxc; j++) {
//     result.push(arr[maxr - 1][j]);
//     counter++;
//   }
//   maxr = maxr - 1;
//   //right wall
//   for (let i = maxr - 1; i >= minr; i--) {
//     result.push(arr[i][maxc - 1]);
//     counter++;
//   }
//   maxc = maxc - 1;
//   //top wall
//   for (let j = maxc - 1; j >= minc; j--) {
//     result.push(arr[minr][j]);
//     counter++;
//   }
//   minr = minr + 1;
// }

// console.log(result.join(" "));
// console.log(performance.now());

// Find 2nd smallest number

// var arr = [5, 5, 76, 3, 4, 2198];
// var smallest = Math.min(arr[0], arr[1]);
// var smallest2 = Math.max(arr[0], arr[1]);
// for (var i = 2; i < arr.length; i++) {
//   if (arr[i] < smallest && arr[i] < smallest2) {
//     smallest2 = smallest;
//     smallest = arr[i];
//   } else if (arr[i] < smallest2) {
//     smallest2 = arr[i];
//   }
// }
// console.log(smallest2);

// Max number of anagram substring
// var str = "geeg";
// var anagramPairCount = 0;
// var obj = {};
// for (var i = 0; i < str.length; i++) {
//   for (var j = i; j < str.length; j++) {
//     var substr = str.slice(i, j + 1);
//     substr = substr
//       .split("")
//       .sort((a, b) => {
//         return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//       })
//       .join("");
//     if (obj[substr]) {
//       obj[substr]++;
//     } else {
//       obj[substr] = 1;
//     }
//   }
// }

// for (var item in obj) {
//   var n = obj[item];
//   anagramPairCount += (n * (n - 1)) / 2;
// }

// console.log(anagramPairCount);

// Max Substring with left hand sum = right hand sum
// var str = "1336129";
// var maxSubstring = str[0];
// for (var i = 0; i < str.length; i++) {
//   for (var j = i; j < str.length; j++) {
//     var subStr = str.slice(i, j + 1);
//     var subStrLn = subStr.length;
//     var lhs = 0;
//     var rhs = 0;
//     if (subStrLn % 2 === 0) {
//       for (var k = 0; k < subStrLn / 2; k++) {
//         lhs += parseInt(subStr[k]);
//         rhs += parseInt(subStr[subStrLn - 1 - k]);
//         if (lhs === rhs && maxSubstring.length < subStrLn) {
//           maxSubstring = subStr;
//         }
//       }
//     }
//   }
// }
// console.log(maxSubstring);

// Number of distinct pair having differnece = k
// var numbers = [1, 1, 2, 2];
// var k = 1;
// // Write your code here
// var count = 0; // Initialize count

// // Initialize empty hashmap.
// var hashmap = new Map();

// // Insert array elements to hashmap
// for (var i = 0; i < numbers.length; i++) hashmap[numbers[i]] = true;

// for (var j = 0; j < numbers.length; j++) {
//   var x = numbers[j];
//   if (hashmap[x + k]) count++;
//   hashmap[x + k] = false;
// }

// console.log("counts", count, hashmap);

// max subsequent substring between 2 strings
// function compare(str1, str2) {
//   var maxSubsLn = 0;
//   var subString = "";
//   for (var i = 0; i < str2.length; i++) {
//     var count = 0;
//     var newChars = "";
//     var k = 0;
//     var l = i;
//     while (k < str1.length && l < str2.length) {
//       if (str1[k] === str2[l]) {
//         count++;
//         newChars += str2[l];
//         k++;
//         l++;
//       } else {
//         k++;
//       }
//     }
//     if (maxSubsLn < count) {
//       subString = newChars;
//     }
//     maxSubsLn = Math.max(maxSubsLn, count);
//   }
//   console.log(subString, maxSubsLn);
//   return maxSubsLn;
// }

// var count = compare("actgattag", "gtgtgatcg");
// console.log(count);

// 2nd method Max count of subsequential substring between two string
// var str1 = "actgattag";
// var str2 = "gtgtgatcg";
// var maxSubsLn = 0;
// var MAX = 10;
// var dp = Array.from(Array(MAX), () => Array(MAX));

// // Initialize the dp[][] to 0.
// for (var i = 0; i <= str1.length; i++) {
//   for (var j = 0; j <= str2.length; j++) {
//     dp[i][j] = 0;
//   }
// }

// Calculating value for each element.
// for (var i = 1; i <= str1.length; i++) {
//   for (var j = 1; j <= str2.length; j++) {
//     // If alphabet of string X and Y are
//     // equal make dp[i][j] = 1 + dp[i-1][j-1]
//     if (str1[j - 1] === str2[i - 1]) {
//       dp[i][j] = 1 + dp[i - 1][j - 1];
//     }
//     // Else copy the previous value in the
//     // row i.e dp[i-1][j-1]
//     else dp[i][j] = dp[i][j - 1];
//   }
// }
// // Finding the maximum length.
// for (var k = 1; k <= str1.length; k++) {
//   maxSubsLn = Math.max(maxSubsLn, dp[k][str2.length]);
// }
// console.log(maxSubsLn, dp);

// rearange array such that
// a < b > c < d > e < f > g;

// function reaarange(arr) {
//   var ar = arr.sort();

//   for (var j = 1; j < arr.length - 1; j += 2) {
//     var sw = ar[j];
//     ar[j] = ar[j + 1];
//     ar[j + 1] = sw;
//   }
//   console.log(ar);
// }
// reaarange([4, 3, 7, 8, 6, 2, 1]);

// Priorty Queue
function myPriortyQueue() {
  var list = [];

  this.enque = function (obj) {
    var listLn = list.length;
    if (!listLn) {
      list.push(obj);
      return;
    }

    for (var i = 0; i < listLn; i++) {
      if (list[i].priorty < obj.priority) {
        list.splice(i, 0, obj);
        return;
      }
    }
  };

  this.deque = function () {
    if (!list.length) {
      return;
    }
    list.shift();
  };
}

// Check for valid Parenthesis
// var parenthesisMap = {
//   "]": "[",
//   ")": "(",
//   "}": "{"
// };
// var parenthesisSet = ["[", "]", "{", "}", "(", ")"];

// function checkParenthesis(str) {
//   var parenthesisArray = [];
//   for (var i = 0; i < str.length; i++) {
//     if (parenthesisSet.indexOf(str[i]) > -1) {
//       if (
//         parenthesisMap[str[i]] &&
//         parenthesisMap[str[i]] === parenthesisArray[parenthesisArray.length - 1]
//       ) {
//         parenthesisArray.pop();
//       } else {
//         parenthesisArray.push(str[i]);
//         console.log(parenthesisArray);
//       }
//     }
//   }

//   return parenthesisArray.length ? false : true;
// }

// console.log(checkParenthesis("[A+(C*D)]"));

// Consider the following series:
// A := 1
// B := A*2 + 2
// C := B*2 + 3
// D := C*2 +4and so on...

// "ABC"  1+4+11 == 16
//1, 4, 11, 16
//Write a program that:

// outputs the number corresponding to a given letter and sum of count

// ex: "GREP"

// function memorize() {
//   var res = {};
//   var ab = function (chr) {
//     if (res[chr]) {
//       return res[chr];
//     }
//     var prevCharCode = chr.charCodeAt(0) - 1;
//     if (prevCharCode >= 65) {
//       var prevChar = String.fromCharCode(prevCharCode);
//       if (res[prevChar]) {
//         return 2 * res[prevChar] + chr.charCodeAt(0) - 64;
//       }
//       var prevRes = ab(prevChar);
//       var result = 2 * prevRes + chr.charCodeAt(0) - 64;
//       res[prevChar] = prevRes;
//       return result;
//     } else {
//       return 1;
//     }
//   };
//   return {
//     ab: ab
//   };
// }
// var memoObj = new memorize();
// function getValue(str) {
//   var sum = 0;
//   for (var i = 0; i < str.length; i++) {
//     sum += memoObj.ab(str[i]);
//   }
//   console.log(sum);
// }

// getValue("GREP");

function calculateSum(x, y) {
  var carry = 0;
  var res = '';
  var partialSum = 0;
  var maxLn = Math.max(x.length, y.length);
  for (var l = 0; l < maxLn; l++) {
    if (x.length - 1 - l >= 0 && y.length - 1 - l >= 0) {
      partialSum =
        parseInt(x[x.length - 1 - l]) + parseInt(y[y.length - 1 - l]);
    } else if (x.length - 1 - l >= 0) {
      partialSum = parseInt(x[x.length - 1 - l]);
    } else if (y.length - 1 - l >= 0) {
      partialSum = parseInt(y[y.length - 1 - l]);
    }
    if (carry) {
      partialSum += carry;
    }
    if (partialSum > 9) {
      carry = parseInt(partialSum / 10, 10);
      partialSum = partialSum % 10;
    } else {
      carry = 0;
    }
    res = partialSum.toString() + res;
  }
  if (carry) {
    res = carry + res;
  }
  return res;
}

console.log(calculateSum('0', '0'));
console.log(calculateSum('25', '19'));
console.log(calculateSum('84', '17'));
console.log(calculateSum('649', '54'));
console.log(calculateSum('649555', '45'));

// Get Mean of array
const arr = [2, 3, 4, 6, 8, 10]; // [2.5, 3.5, 5, 7, 9]
const size = 5;

function getAverages(arr, size) {
  var res = [];
  var counter = 0;
  var sum = 0;
  var i = -1;
  while (i < arr.length) {
    if (counter === size) {
      res.push(sum / size);
      counter = 0;
      sum = 0;
      i = res.length;
    } else {
      i++;
    }
    sum += arr[i];
    counter++;
  }
  return res;
}

console.log(getAverages(arr, size));

// https://learnersbucket.com/examples/algorithms/trapping-rain-water-in-javascript/
// 10010 -> one thousand and ten

var height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
function waterTrap(height) {
  var water = 0;
  var leftMax = -1;
  var rightMax = -1;
  var left = 0;
  var right = height.length - 1;

  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);
    if (leftMax > rightMax) {
      water += rightMax - height[right];
      right--;
    } else {
      water += leftMax - height[left];
      left++;
    }
  }
  return water;
}
console.log(waterTrap(height1));

//traversing obj
const obj1 = {
  one: 1,
  two: {
    three: 3,
  },
  four: {
    five: 5,
    six: {
      seven: 7,
    },
    eight: 8,
  },
  nine: 9,
};

function traveseObj(parent, obj, newKey) {
  // {three: 3}
  if (obj) {
    for (var key in obj) {
      var nkey = newKey ? `${newKey}.${key}` : key;
      var value;
      if (typeof obj[key] === 'object') {
        traveseObj(parent, obj[key], nkey);
      } else {
        parent[nkey] = value;
      }
    }
  }

  return parent;
}

console.log(traveseObj({}, obj1, ''));

const output = {
  one: 1,
  'two.three': 3,
  'four.five': 5,
  'four.six.seven': 7,
  'four.eight': 8,
  nine: 9,
};

//No. of permutation and combination
var str1 = 'abcd';

function getPermutation(str1, obj = {}) {
  var res = [];

  for (var j = 0; j < str1.length; j++) {
    var currChar = str1[j];
    if (!obj[currChar]) {
      obj[currChar] = true;
      res.push(currChar);
    }
    var substr = currChar;
    var substr1 = currChar;
    for (var k = 0; k < str1.length; k++) {
      if (k !== j) substr += str1[k];
      if (str1.length - 1 - k !== j) {
        substr1 += str1[str1.length - 1 - k];
      }
      if (!obj[substr]) {
        obj[substr] = true;
        res.push(substr);
      }
      if (!obj[substr1]) {
        obj[substr1] = true;
        res.push(substr1);
      }
    }
    const remainder = str1.slice(0, j) + str1.slice(j + 1, str1.length);
    res = res.concat(getPermutation(remainder, obj));
  }

  return res;
}

console.log(getPermutation(str));

const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    );
};

console.log(stringPermutations('abc'));

function fibnacciSeries(num) {
  if (num <= 1) {
    return [0, 1];
  } else {
    var s = fibnacciSeries(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
  }
  return s;
}
console.log('fibnacciSeries', fibnacciSeries(5));

// const arr = [1,2,3,4,5, 3,3,3,3, 2,4, 6,0, -1,7]
// const sum = 6;
// var map1 = {
//     1: 1,
//     5: 1,
//     3: 5,
// }
// function getpair1(){
//       var map1 = {}
//     for(var i=0;i< arr.length;i++) {
//           if(map1[arr[i]]) {
//               map1[arr[i]]++;
//           } else {
//               map1[arr[i]] = 1;
//           }
//     }

// }

// // [[1,5],[2,4],[3,3],[3,3]]

// // function getPairs(arr1, sum1) {
// //     var result = [];
// //     var indexCovered = {};
// //         for(var i=0;i< arr1.length -1;i++) {
// //         var initValue = arr1[i];
// //         for(var j=i+1;j< arr1.length/2;j++) {
// //             if(arr1[j] + initValue === sum1 && !indexCovered[i]  && !indexCovered[j]) {
// //                 var pair = [initValue, arr1[j]];
// //                 result.push(pair);
// //                 indexCovered[i] = true;
// //                 indexCovered[j] = true;
// //             }
// //              if(arr1[arr1.length -1 - j] + initValue === sum1 && !indexCovered[i]  && !indexCovered[arr1.length -1 - j]) {
// //                 var pair = [initValue, arr1[arr1.length -1 - j]];
// //                 result.push(pair);
// //                 indexCovered[i] = true;
// //                 indexCovered[arr1.length -1 - j] = true;
// //             }
// //         }
// //     }

// //     return result;

// // }

// console.log(getPairs(arr, sum));

// const arr1 = ["aab", "aba", "abc", "cb", "cba"];
// [false,true, false, false, true]

// function getAnagram(arr) {
//   var result = [];
//   result.push(false);
//   for (var i = 1; i < arr.length; i++) {
//     var currStr = arr[i];
//     var sortStr = currStr
//       .split("")
//       .sort((a, b) => {
//         return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//       })
//       .join("");
//     for (var j = 0; j < i; j++) {
//       var ismatched = false;
//       var compareTo = arr[j];
//       var sortStr2 = compareTo
//         .split("")
//         .sort((a, b) => {
//           return a.charCodeAt(0) > b.charCodeAt(0) ? 1 : -1;
//         })
//         .join("");
//       if (sortStr === sortStr2) {
//         ismatched = true;
//         break;
//       }
//     }
//     result.push(ismatched);
//   }
//   return result;
// }

// console.log(getAnagram(arr1));

// const obj1 = {
//   a: {
//     b: {
//       b1: "test",
//       b2: "test2"
//     },
//     c: {
//       ac: {
//         acc: 42
//       }
//     }
//   }
// };

// const res = { a_b_b1: "test", a_b_b2: "test2", a_b_c_ac_acc: 42 };
// function convert(obj, key = "", res = {}) {
//   for (var key1 in obj) {
//     //a
//     var prop1 = key ? key + `_${key1}` : key1;
//     if (typeof obj[key1] === "object") {
//       convert(obj[key1], prop1, res);
//     } else {
//       res[prop1] = obj[key1];
//     }
//   }
//   return res;
// }

let numbers = [
  [1, 'x', 'x'],
  ['x', 'x', 'x'],
  [3, 's', 'x'],
  [4, 'x', 'x'],
];

// Rows: [1] Cols:[2]

function checkX(arr) {
  var Rows = [];
  var Cols = [];
  var lastCol = {};

  for (var i = 0; i < arr.length; i++) {
    var isRow = true;
    var arr2 = arr[i];
    for (var j = 0; j < arr2.length; j++) {
      if (arr2[j] === 'x' && (i === 0 || lastCol[j])) {
        lastCol[j] = true;
      } else {
        if (arr2[j] !== 'x') {
          isRow = false;
        }
        lastCol[j] = false;
      }
    }
    if (isRow) {
      Rows.push(i);
    }
  }
  for (var k in lastCol) {
    if (lastCol[k]) {
      Cols.push(k);
    }
  }
  return {
    Rows: Rows,
    Cols: Cols,
  };
}

console.log(checkX(numbers));

// mergeSort

// function merge_Arrays(left_sub_array, right_sub_array) {
//   let array = [];
//   while (left_sub_array.length && right_sub_array.length) {
//     if (left_sub_array[0] < right_sub_array[0]) {
//       array.push(left_sub_array.shift());
//     } else {
//       array.push(right_sub_array.shift());
//     }
//   }
//   return [...array, ...left_sub_array, ...right_sub_array];
// }
// function merge_sort(unsorted_Array) {
//   const middle_index = unsorted_Array.length / 2;
//   if (unsorted_Array.length < 2) {
//     return unsorted_Array;
//   }
//   const left_sub_array = unsorted_Array.splice(0, middle_index);
//   return merge_Arrays(merge_sort(left_sub_array), merge_sort(unsorted_Array));
// }

function swap(arr, i, j) {
  var curr = arr[i];
  arr[i] = arr[j];
  arr[j] = curr;
}

function partition(arr, left, right) {
  let i = left - 1;
  var pivot = arr[right];
  for (var j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  arr[right] = arr[i + 1];
  arr[i + 1] = pivot;
  return i + 1;
}

function quicksort(arr, left, right) {
  var pivot = partition(arr, left, right);
  if (left < pivot - 1) {
    quicksort(arr, left, pivot - 1);
  }
  if (right > pivot + 1) {
    quicksort(arr, pivot + 1, right);
  }

  return arr;
}
// O(n log n) for best case and average case, O(n^2) for the worst case.
var arr1 = [5, 7, 28, 6, 9, 2, 12];
console.log(quicksort(arr1, 0, 6));

function findPermutation(str) {
  if (str.length < 2) {
    return [str];
  }
  let permutaionArray = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remainingStr = str.slice(0, i) + str.slice(i + 1, str.length);
    const subAStrPermutaion = [...findPermutation(remainingStr)];
    console.log(subAStrPermutaion, 'subAStrPermutaion');
    for (let str1 of findPermutation(remainingStr)) {
      console.log('str1', str1);
      permutaionArray.push(char + str1);
    }
  }
  return permutaionArray;
}
console.log('permu', findPermutation('aabc'));
