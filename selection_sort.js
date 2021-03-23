const selectionSort = (arr) => {
  let min = 0
  let minValue = Infinity
  let index = 0

  while (min !== arr.length - 1) {
      minValue = Infinity
      for (let i = min; i < arr.length; i++) {
          if (minValue > arr[i]) {
              minValue = arr[i]
              index = i
          }
      }
      let swap = minValue // arr[index]
      let current = arr[min] // arr[min]
      arr[index] = current // arr[index] --> arr[min]
      arr[min] = swap //arr[min] --> arr[index]
      min++
  }
  console.log(arr)
  return arr
}

let array = [2, -1, 4, 3, 7, 3];

selectionSort(array)
