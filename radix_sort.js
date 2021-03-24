const countingSort = require('./counting_sort')

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

let arr = [3, 1, 2, 0, 1, 1, 3]
let arr2 = [100, 300, 231, 0, 10, 209, 1452, 567]

//100,  300, 0, 10, 231, 1452, 567, 209
// console.log(countingSort(arr, 3))
console.log(radixSort(arr2))
