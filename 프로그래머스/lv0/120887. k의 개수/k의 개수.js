function solution(i, j, k) {
    //배열이 아니라 문자열로 초기 설정을 하면 .join("")로 묶어줄 필요가 없어서 
    //단계가 하나 감소함!
   let str = '';
   for(let n  = i; n <= j; n++){
        str += n
   }
    return str.split("").filter(el => el === k.toString()).length

}



// function solution(i, j, k) {
//    let arr = []
//    for(let n  = i; n <= j; n++){
//        arr.push(n)
//    }
    
//     return arr.join("").split("").filter(el => el === k.toString()).length
// }