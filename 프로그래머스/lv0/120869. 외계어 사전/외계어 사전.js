function solution(spell, dic) {
    let str = spell.sort().join("")
    return dic.map(el => el.split("").sort().join("")).find(el => el===str) !== undefined ? 1 : 2
}