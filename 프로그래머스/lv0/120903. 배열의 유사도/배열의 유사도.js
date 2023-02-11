function solution(s1, s2) {
    let sum = 0;
    for(let i = 0; i < s1.length ; i++){
        for(let j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]){
                sum++
            }
        }
    }
    return sum
}



//includes()를 사용하기
// function solution(s1, s2) {
//     let count = 0;
//     for (let v of s1) if (s2.includes(v)) count++;
//     return count;
// }