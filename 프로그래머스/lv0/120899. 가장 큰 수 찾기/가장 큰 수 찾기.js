function solution(array) {
   let arr = array.slice().sort((a,b) => b -a)
   return [arr[0], array.indexOf(arr[0])]
}