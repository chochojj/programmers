function solution(numbers) {
    let num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    num.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
}


// function solution(numbers) {
//     const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]
//     for(let i = 0 ; i<number.length; i++){
//         numbers = numbers.split(number[i]).join(i)
//     }
//     return +numbers
// }