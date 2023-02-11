function solution(age) {
    let alp = 'abcdefghij'
    let arr = [...alp]
    let num = age.toString();
    let trans = '';

    for(let i = 0; i < num.length; i++){
        trans +=arr[num[i]]
    }
     
     return trans
}

//문자열 인덱스를 바로 조회해서 빼냄
// function solution(age) {
//   return age
//     .toString()
//     .split("")
//     .map((v) => "abcdefghij"[v])
//     .join("");
// }