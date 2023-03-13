function solution(my_string) {
    my_string.split('')
    const newarr = new Set(my_string)
    let arr = [...newarr]
    return arr.join('')
}

// 문자열로 바로 해도 됨
// function solution(my_string) {
//     return [...new Set(my_string)].join('');
// }

// 인덱스를 조회해서 바로 바꾸기
// var solution=s=>[...s].filter((c,i)=>s.indexOf(c)==i).join('')