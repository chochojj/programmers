function solution(rny_string) {
    let answer = '';
    return [...rny_string].map(e => e == 'm' ? 'rn' : e).join("");
}