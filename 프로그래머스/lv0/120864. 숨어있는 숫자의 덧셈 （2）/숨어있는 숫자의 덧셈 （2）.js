function solution(my_string) {
    let sum = 0;
    let str = my_string.replace(/[A-z]/g, " ").split(' ')
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
        sum += Number(str[i])
        }
    }
    return sum
}