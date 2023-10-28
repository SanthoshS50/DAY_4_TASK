/* Question_1 : Do the below programs in anonymous function & IIFE */

// a. Print odd numbers in an array :

//using annoymous function :

var result = [];
var a = function (arr){
    for(var i=0; i<arr.length; i++){
        if (arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));

//using IIFE :

var result = [];
(function (arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);   
        }
    }
    console.log(result)
})([11,12,13,14,15,16,17,18,19,20])

/*-------------------------------------------------------------------------*/

// b. Convert all the strings to title caps in a string array :

//using annoymous function :

var stringArray = [];
var a = function (stringArray) {
    for (var i = 0; i < stringArray.length; i++) {
      var words = stringArray[i].split(" ");
      for (var j = 0; j < words.length; j++) {
        words[j] = words[j][0].toUpperCase() + words[j].substring(1).toLowerCase();
      }
      stringArray[i] = words.join(" ");
    }
    return stringArray;
}
console.log(a(["surya kumar","shiyam saravanan","shaikh muhibudeen","surya"]));


//using IIFE :

var stringArray = [];
(function (stringArray) {
    for (var i = 0; i < stringArray.length; i++) {
      var words = stringArray[i].split(" ");
      for (var j = 0; j < words.length; j++) {
        words[j] = words[j][0].toUpperCase() + words[j].substring(1).toLowerCase();
      }
      stringArray[i] = words.join(" ");
    }
    console.log(stringArray);
  }
)(["surya","shiyam","shaikh muhibudeen","surya kumar"]);

/*-------------------------------------------------------------------------*/

// c. Sum of all numbers in an array :

//using annoymous function :

var numbers = [50,60];

var sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);


//using IIFE :

var numbers = [];
(function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log("Sum of the numbers: " + sum);
  }
)([50,51,60,61]);
  
/*-------------------------------------------------------------------------*/

// d. Return all the prime numbers in an array :


//using annoymous function :

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isPrime = function (num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};
const primeNumbers = numbers.filter(function (num) {
  return isPrime(num);
});
console.log(primeNumbers); 

//using IIFE :

var numbers = [50,51,60,61,70,71,80,81];

var primeNumbers1 = (function(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  return arr.filter(function(num) {
    return isPrime(num);
  });
})(numbers);

console.log(primeNumbers1);

/*-------------------------------------------------------------------------*/

// e. Return all the palindromes in an array

//using annoymous function :

const words = ["level", "hello", "radar", "world", "deified"];

const palindromes = words.filter(function(word) {

  const cleanWord = word.replace(/\s/g, "").toLowerCase();
  
  return cleanWord === cleanWord.split('').reverse().join('');
});

console.log(palindromes); 

//using IIFE :

const words1 = ["racecar", "hello", "level","programming"];

const palindromes1 = (function(arr) {
  function isPalindrome(word) {
    word = word.toLowerCase();
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  }

  return arr.filter(function(word) {
    return isPalindrome(word);
  });
})(words1);

console.log(palindromes1); 

/*-------------------------------------------------------------------------*/

// f. Return median of two sorted arrays of the same size :

//using annoymous function :

const findMedian = function(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = combinedArray.length;
    
    if (length % 2 === 0) {
      const middle1 = combinedArray[length / 2 - 1];
      const middle2 = combinedArray[length / 2];
      return (middle1 + middle2) / 2;
    } else {
      return combinedArray[Math.floor(length / 2)];
    }
  };
const arr1 = [1, 3, 8];
const arr2 = [7, 9, 10];
const median = findMedian(arr1, arr2);
console.log(median);

//using IIFE :

const findMedianSortedArrays = (function() {
    return function(nums1, nums2) {
      const merged = [...nums1, ...nums2].sort((a, b) => a - b);
      const mid = Math.floor(merged.length / 2);
  
      if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
      } else {
        return merged[mid];
      }
    };
  })();
  
  const nums1 = [1, 3];
  const nums2 = [2, 4];
  const median1 = findMedianSortedArrays(nums1, nums2);
  console.log(median1);

/*-------------------------------------------------------------------------*/

// g. Remove duplicates from an array

//using annoymous function :

const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const uniqueArray = (function(arr) {
  return arr.filter(function(item, index, self) {
    return self.indexOf(item) === index;
  });
})(array);

console.log(uniqueArray);

//using IIFE :

const uniqueArray1 = (function() {
    return function(arr) {
      return arr.filter((value, index, self) => self.indexOf(value) === index);
    };
  })();
  
  const myArray = [50,60,50,61,61,51,50];
  const result1 = uniqueArray1(myArray);
  console.log(result1);
  
/*-------------------------------------------------------------------------*/

// h. Rotate an array by k times

//using annoymous function :

const rotateArray = function(arr, k) {
    k = k % arr.length; // Handle cases where k is greater than the array length
  
    if (k < 0) {
      k = arr.length + k; // Handle negative values of k
    }
  
    const rotated = [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
  
    return rotated;
  };
  
const myArray1 = [9,50,60,51,61];
const k = 4;
const rotatedArray = rotateArray(myArray1, k);
console.log(rotatedArray);
  
//using IIFE :

const rotateArray1 = (function() {
    return function(arr, k) {
      const len = arr.length;
      const rotatedArray1 = [];
  
      for (let i = 0; i < len; i++) {
        const newIndex = (i + k) % len;
        rotatedArray1[newIndex] = arr[i];
      }
  
      return rotatedArray1;
    };
  })();
  
  const originalArray = [1, 2, 3, 4, 5, 6, 9];
  const k1 = 2;
  const rotatedArray1 = rotateArray1(originalArray, k);
  console.log(rotatedArray1);
  

/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------*/


/* Question 2 : Do the below programs in arrow functions : */

// a. Print odd numbers in an array

//using Arrow function :

const d = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*-------------------------------------------------------------------------*/

// b. Convert all the strings to title caps in a string array :

//using Arrow function :

const e = (stringArray) => {
    return stringArray.map((str) => {
        const words = str.split(" ");
        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        return capitalizedWords.join(" ");
    });
}

console.log(e(["surya kumar", "shiyam saravanan", "shaikh muhibudeen", "surya"]));

/*-------------------------------------------------------------------------*/

// c. Sum of all numbers in an array :

//using Arrow function :

var numbers = [50, 60, 9];

var sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

/*-------------------------------------------------------------------------*/

// d. Return all the prime numbers in an array :

//using Arrow function :

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime2 = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers2 = numbers.filter(num => isPrime2(num));
console.log(primeNumbers2);

/*-------------------------------------------------------------------------*/

// e. Return all the palindromes in an array

//using Arrow function :

const words2 = ["level", "hello", "radar"];

const palindromes2 = words2.filter(word => {
  const cleanWord = word.replace(/\s/g, "").toLowerCase();
  return cleanWord === cleanWord.split('').reverse().join('');
});

console.log(palindromes2);

/*-------------------------------------------------------------------------*/

