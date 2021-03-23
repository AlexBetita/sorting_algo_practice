const bubbleSort = (arr) => {
  let left;
  let right;
  let sorted = false;
  let count = 0;

  while (!sorted) {
      for (let i = 0; i < arr.length; i++) {

          if (arr[i] > arr[i + 1]) {
              left = arr[i + 1]
              right = arr[i]
              arr[i] = left
              arr[i + 1] = right
              count = 0
          }
          if (i === arr.length - 1) {
              count++
          }
      }
      if (count === 2) {
          sorted = true
      }
  }
  return arr
}
