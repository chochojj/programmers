function solution(n, m, section) {
    var answer = 0;
    var part = 0;

    for (const i in section) {
        if (part < section[i]) {
            part = section[i] + (m-1);
            answer += 1;
        }
    }
    
    
    return answer;
}