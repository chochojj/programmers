function solution(my_string) {
    let vol = 'aeiou'
    let input = [...my_string].filter((el)=> (!vol.includes(el))).join('')
    return input
}