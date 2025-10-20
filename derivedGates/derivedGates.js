import logicGates from "../logicGates/logicGates.js";

const { AND, OR, NOT, XOR } = logicGates;

export function NAND(input1, input2) {
    const normalizedInput = AND(input1, input2);
    return NOT(normalizedInput);
}

const derivateGates = {
    NAND
};

export default derivateGates;