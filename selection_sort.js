const selectionSort = (arr) => {
  let min = 0
  let minValue = Infinity

  while (min !== arr.length - 1) {
      minValue = Infinity
      for (let i = min; i < arr.length; i++) {
          if (minValue > arr[i]) {
              minValue = arr[i]
          }
      }
      let swap = minValue
      let current = arr[min]
      arr[index] = current
      arr[min] = swap
      min++
  }
  return arr
}
