function solution(numbers) {
    numbers.sort((a, b)=> a - b)
    let max = [numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2], numbers[numbers.length-1]*numbers[0]].sort((a,b)=> b -a)
    return max[0]
}