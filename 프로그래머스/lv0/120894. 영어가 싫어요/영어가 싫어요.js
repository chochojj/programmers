function solution(numbers) {
    let num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    num.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
}