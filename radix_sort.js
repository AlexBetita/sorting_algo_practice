const {countingSort, countingSort2} = require('./counting_sort')
const array = require('./create_array')

// first try for radix sort
const radixSort = (arr, step = arr.length) =>{

  newArray = arr.map(el => Number(el.toString().slice(0, step).slice(-1)))
  let pastArr = arr.slice()
  let maxRange = Math.max(...newArray)
  if(maxRange === 0){
    return arr
  }

  let countedSort = countingSort(newArray, maxRange)

  for(let i = 0; i < arr.length; i++){
    arr[i] = pastArr[countedSort[i]]
  }

  if(step === arr.length){
    step = -1
    return radixSort(arr, step)
  } else {
    return radixSort(arr, step - 1)
  }

}

/*

  a little bit better version
  cause removed passtArr.slice()
  so this does not need to create a new copy of slice allowing less memory usage

*/

const radixSort2 = (arr, step = arr.length) =>{

  // get the last number of each individual element of the array
  newArray = arr.map(el => Number(el.toString().slice(0, step).slice(-1)))
  // get maximum range from newArray
  let maxRange = getMax(newArray)
  //
  arr = countingSort2(arr, newArray, maxRange)

  if(maxRange === 0){
    return arr
  }

  if(step === arr.length){
    step = -1
    return radixSort2(arr, step)
  } else {
    return radixSort2(arr, step - 1)
  }

}

/*

  created a helper function for getting Max element
  cause Math.max throws an error for 1million elements
  in an array

*/
const getMax = (arr) => {
  let length = arr.length;
  let max = -Infinity;

  while (length--) {
      max = arr[length] > max ? arr[length] : max;
  }
  return max;
}

let arr = [3, 1, 2, 0, 1, 1, 3]
let arr2 = [100, 300, 231, 0, 10, 209, 1452, 567]


//100,  300, 0, 10, 231, 1452, 567, 209
// console.log(countingSort(arr, 3))
console.log(radixSort2(array))
