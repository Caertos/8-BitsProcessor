import { bit } from '../bit/bit.js';

export function AND(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit(normalizedInput1 && normalizedInput2);
}

export function OR(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit(normalizedInput1 || normalizedInput2);
}

export function NOT(input) {
    const normalizedInput = bit(input);
    return bit(!normalizedInput);
}

export function XOR(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit((normalizedInput1 && NOT(normalizedInput2)) || (NOT(normalizedInput1) && normalizedInput2));
    // Alternatively: return bit(normalizedInput1 ^ normalizedInput2); I know this works in JS, but for clarity,
    // I used the above expression with existing gate functions.
}

const logicGates = {
    AND,
    OR,
    NOT,
    XOR
};

export default logicGates;
