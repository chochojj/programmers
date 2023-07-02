function solution(numlist, n) {
    let result = []
    result = numlist.sort((a, b) => {
        const [x, y] = [Math.abs(a - n), Math.abs(b - n)];
        if(x === y){
            return b - a;
        }
        return x - y;
    })
    return result;
}