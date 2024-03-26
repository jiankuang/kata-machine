export default function two_crystal_balls(breaks: boolean[]): number {
    const floors = breaks.length;
    const first_ball_step = Math.floor(Math.sqrt(floors));
    let i;
    for (i = first_ball_step; i < floors; i+=first_ball_step) {
        // console.log(i)
        if (breaks[i]) { // first ball breaks 
            for (let j=i-first_ball_step; j<i; j++) { // second ball 
                if (breaks[j]) return j; // second ball breaks 
            }
            return i;
        }
    }
    for (let j=i+1; j < floors; j++) {
        if (breaks[j]) return j;
    }
    return -1; 
}