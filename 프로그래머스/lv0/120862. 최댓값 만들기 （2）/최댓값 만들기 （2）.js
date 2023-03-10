function solution(numbers) {
    numbers.sort((a, b)=> a - b)
    let max = [numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]].sort((a,b)=> b -a)
    return max[0]
}


//Math.max()매소드가 기억이 안났음
//기억해두자궁