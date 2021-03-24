let max = 1000000
let array = new Array(max); for(let i = max + 1; i--;) array[i] = getRandomInt(max);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(array)
module.exports = array
