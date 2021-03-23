// quick sort
// time complexity O(nlogn)

const swap = (array, left, right) => { // swaps the array without creating a new array
  let temp = array[left]
  array[left] = array[right]
  array[right] = temp
}

const partition = (array, left, right) => { // our partition function
  const pivot = array[Math.floor((left + right) / 2)] // get the middle value as the pivot
  let leftIdx = left
  let rightIdx = right

  while(leftIdx <= rightIdx){
    while(array[leftIdx] < pivot){ // look at all the numbers left of the pivot.. stop if that value is greater than the pivot
      leftIdx++
    }
    while(array[rightIdx] > pivot){ // look at all the numbers right of the pivot.. stop if that value is lesser than the pivot
      rightIdx--
    }
    if(leftIdx <= rightIdx){ // checks if we don't go cross over each other's side
      swap(array, leftIdx, rightIdx) // swap the left greater value with lefts smaller value then increment the indexes after swapping
      leftIdx++
      rightIdx--
    }
  }

  return leftIdx // return a new length of the index focusing on the left side, disregards the big numbers on the right side till left is fully sorted
}

const quickSort = (array, left = 0, right = array.length - 1) =>{ // make a recursive function that reruns the partition and swap functions
  let index;
  debugger
  if(array.length){ // base case
    index = partition(array, left, right) // run our partition function
    if(left < index - 1) quickSort(array, left, index - 1) // recursive case and recursive step for left side of the array
    if(right > index) quickSort(array, index, right) // recursive case and recursive step for the right side of the array
  }
  return array
}


function quickSort2(array) {

  if (array.length <= 1) {
      return array;
  }

  let pivot = array.shift()
  let left = array.filter(el => el < pivot);
  let right = array.filter(el => el >= pivot);

  let leftSorted = quickSort2(left);
  let rightSorted = quickSort2(right);

  return [ ...leftSorted, pivot, ...rightSorted ];
}


function quickSortIterative(arr) {

  let stack = []; // Creating an array that we'll use as a stack, using the push() and pop() functions

  stack.push(0);  // Add first and last index into the stack
  stack.push(arr.length - 1);

  // There isn't an explicit peek() function
  // The loop repeats as long as we have unsorted subarrays
  while(stack[stack.length - 1] >= 0){

    end = stack.pop();
    start = stack.pop();

    pivotIndex = partition(arr, start, end); // use the partition function at the top

    if (pivotIndex - 1 > start){
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end){
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }
}

let items = [5,3,7,6,2,9]
let arr = [2,5,7,8,10,1,3,6,0,12]

console.log(quickSort(arr))
console.log(quickSort2(arr))
quickSortIterative(arr)
console.log(arr)
