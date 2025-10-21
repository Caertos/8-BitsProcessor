import logicGates from "../logicGates/logicGates.js";

const { AND, OR, NOT, XOR } = logicGates;

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

const derivateGates = {
    NAND,
    NOR,
    XNOR
};

export default derivateGates;