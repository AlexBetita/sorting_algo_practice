const bubbleSort = (arr) => {
  let left;
  let right;
  let sorted = true;

  while (sorted) {
    sorted = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            left = arr[i + 1]
            right = arr[i]
            arr[i] = left
            arr[i + 1] = right
            sorted = true
        }
    }
  }
  return arr
}
