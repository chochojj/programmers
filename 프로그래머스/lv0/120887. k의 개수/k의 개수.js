function solution(i, j, k) {
   let arr = []
   for(let n  = i; n <= j; n++){
       arr.push(n)
   }
    
    return arr.join("").split("").filter(el => el === k.toString()).length
}