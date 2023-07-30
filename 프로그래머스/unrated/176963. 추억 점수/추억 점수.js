function solution(name, yearning, photo) {
    //점수 기록장 -- 여기까지는 만들어냄
    const score = {};
    for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }
    // reduce 사용이 익숙하지 않음
    return photo.map((arr) =>
        arr.reduce((acc, cur) => acc + (score[cur] || 0), 0)
        );
}