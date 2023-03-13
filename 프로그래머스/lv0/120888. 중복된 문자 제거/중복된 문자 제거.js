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