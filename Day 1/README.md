# Day 1 of 250 Days of JavaScript



## Problem
 Compare two array or object with JavaScript


## Problem Link

 - [Learner's Bucket](https://learnersbucket.com/examples/array/compare-two-array-or-object-with-javascript/)


## Test Cases

Test Case 1

```bash
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [1, 3, 2, 4, 5];
  console.log(compare(arr1, arr2)); 
  // returns false
```

Test Case 2

```bash
  let arrObj1 = [1, 2, {
	  a: 1,
	  b: 2,
	  c: 3,
      d: function(){
        console.log("abcd");
      }
    }, 4, 5];
  
  let arrObj2 = [1, 2, {
	  c: 3,
	  b: 2,
	  a: 1,
      d: function(){
        console.log("abcd");
      }
    }, 4, 5];
    
console.log(compare(arrObj1, arrObj2)); 
// returns true
```

Test Case 3

```bash
  let arr4 = [[1, 2], [3, 4, 5]];
  let arr3 = [[1, 2], [3, 4, 5]];
  console.log(compare(arr4, arr3)); 
  // returns true
```
