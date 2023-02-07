function solution(angle) {
    if(0<angle && angle<90) return 1
    else if(angle === 90) return 2
    else if(90 < angle && angle < 180) return 3
    else if(angle === 180 ) return 4
}



// 찢었다...
// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle>=x).length;
// }
