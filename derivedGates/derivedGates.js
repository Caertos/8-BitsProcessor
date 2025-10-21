import logicGates from "../logicGates/logicGates.js";
import { bit } from '../bit/bit.js';

const { AND, OR, NOT } = logicGates;

export function XOR(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit((normalizedInput1 && NOT(normalizedInput2)) || (NOT(normalizedInput1) && normalizedInput2));
    // Alternatively: return bit(normalizedInput1 ^ normalizedInput2); I know this works in JS, but for clarity,
    // I used the above expression with existing gate functions.
}

export function NAND(input1, input2) {
    const normalizedInput = AND(input1, input2);
    return NOT(normalizedInput);
}

export function NOR(input1, input2) {
    const normalizedInput = OR(input1, input2);
    return NOT(normalizedInput);
}

export function XNOR(input1, input2) {
    const normalizedInput = XOR(input1, input2);
    return NOT(normalizedInput);
}

const derivedGates = {
    XOR,
    NAND,
    NOR,
    XNOR
};

export default derivedGates;