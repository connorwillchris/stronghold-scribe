export function diceRoll(diceTotal: number, diceVal: number): number {
    let val = 0;
    for (let i = 0; i < diceTotal; i++) {
        val += Math.floor(Math.random() * diceVal) + 1;
    }
    return val;
}
