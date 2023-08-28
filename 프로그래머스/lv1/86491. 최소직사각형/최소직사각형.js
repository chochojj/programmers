function solution(sizes) {
    let width = []
    let height = []
    for(let i = 0; i < sizes.length; i++) {
        const max = Math.max(sizes[i][0], sizes[i][1]);
        const min = Math.min(sizes[i][0], sizes[i][1]);
        width.push(max);
        height.push(min);
    }
    width.sort((a,b)=> b-a)
    height.sort((a,b)=> b-a)
    
    return width[0] * height[0]
}