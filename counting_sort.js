// time complexity O(n + k)
// space complexity O(k)

// k maximum key range
// k at worst case shld be 9

const countingSort = (arr, k) => {
  let count = new Array(k); for(let i = k + 1; i--;) count[i] = 0;
  let total = 0
  let output = arr.map(_ => 0)

  for(i in arr){
    count[Number(arr[i].toString().slice(-1))] += 1
  }

  for(let i = 0; i < count.length; i++){
    total = count[i] + total
    count[i] = total
  }

  count.pop()
  count.unshift(0)

  // for(i in arr){
  //   output[count[Number(arr[i].toString().slice(-1))]] = arr[i]
  //   count[Number(arr[i].toString().slice(-1))] += 1
  // }

  // return indices instead
  for(i in arr){
    output[count[Number(arr[i].toString().slice(-1))]] = Number(i)
    count[Number(arr[i].toString().slice(-1))] += 1
  }

  return output
}

// let arr = [3, 1, 2, 0, 1, 1, 3]

// countingSort(arr, 3)

module.exports = countingSort
