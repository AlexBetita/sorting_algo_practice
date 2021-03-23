// merge sort
// time complexity O(nlogn)

const merge = (listOne, listTwo) =>{
  let merge = []
  while(listOne.length || listTwo.length){
    let left = listOne.length ? listOne[0] : Infinity;
    let rigth = listTwo.length ? listTwo[0] : Infinity;

    let next;
    if(left < rigth){
      next = listOne.shift()
    } else {
      next = listTwo.shift()
    }
    merge.push(next)
  }

  return merge
}

const mergeSort = (array) => {
  if(array.length <= 1){
    return array
  }

  let pivotIndex = Math.floor(array.length/2)

  let left = array.slice(0, pivotIndex)
  let right = array.slice(pivotIndex)
  let sortedLeft = mergeSort(left)
  let sortedRight = mergeSort(right)

  return merge(sortedLeft, sortedRight)
}


let arr = [2,5,7,8,10,1,3,6,0,12]

console.log(mergeSort(arr))
