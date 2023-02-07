function solution(money) {
    let coffee = Math.floor(money/5500);
    let rest = money%5500;
    return [coffee, rest]
}