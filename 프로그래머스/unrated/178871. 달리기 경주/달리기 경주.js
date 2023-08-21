function solution(players, callings) {
    //배열 사용 시 성능 이슈 발생 -> 객체로 처리
    let runner = {}
    
    for(let i = 0; i < players.length; i++){
        runner[players[i]]= i
    }
    
    for(let i = 0; i < callings.length; i++){
        const call = runner[callings[i]];
        const now = players[call-1];
        
        players[call-1] = callings[i]
        players[call] = now
        
        runner[callings[i]] = call -1
        runner[now] = call
    }
    return players
}