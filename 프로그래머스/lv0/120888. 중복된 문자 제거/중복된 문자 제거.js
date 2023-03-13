function solution(my_string) {
    my_string.split('')
    const newarr = new Set(my_string)
    let arr = [...newarr]
    return arr.join('')
}