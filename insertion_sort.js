const insertion = arr => {
  for (let i = 1; i < arr.length; i++) {
    for(let j = i - 1; j >= -1; j--){
      if (arr[j] > arr[j + 1]) {
        let right = arr[j+1]
        let current = arr[j]
        arr[j+1] = current
        arr[j] = right
      }
    }
  }
  return arr
}
