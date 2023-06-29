function solution(score) {
    let avg = score.map((el)=> (el[0]+el[1])/2)
    let grade = avg.slice().sort((a, b)=> b-a)
    return avg.map(el => grade.indexOf(el) + 1);
}