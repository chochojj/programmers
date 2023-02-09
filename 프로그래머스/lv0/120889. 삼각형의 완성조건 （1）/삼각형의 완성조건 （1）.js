function solution(sides) {
    sides.sort((a,b)=> b-a)
    if(sides[0] >= (sides[1]+sides[2])) return 2
    return 1
}

//삼항연산자로 리턴할 수 있음
// return sides[0] + sides[1] > sides[2] ? 1 : 2;