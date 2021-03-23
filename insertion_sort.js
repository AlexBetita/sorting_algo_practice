const insertion = (arr) => {
  let min = 1
  while (min !== arr.length) {
      for (let i = min; i < arr.length; i++) {
        for(let j = min - 1; j >= -1; j--){
          if (arr[j] > arr[j + 1]) {
            let right = arr[j+1]
            let current = arr[j]
            arr[j+1] = current
            arr[j] = right
          }
        }
      }
      min++
  }
  return arr
}
