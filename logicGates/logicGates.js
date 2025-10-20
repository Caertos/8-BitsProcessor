export function AND(input1, input2) {
    return (input1 && input2) ? 1 : 0;
}

export function OR(input1, input2) {
    return (input1 || input2) ? 1 : 0;
}

export function NOT(input) {
    return input ? 0 : 1;
}

export function XOR(input1, input2) {
    return (input1 && NOT(input2)) || (NOT(input1) && input2) ? 1 : 0;
    // Alternatively: return input1 ^ input2; I know this works in JS, but for clarity,
    // I used the above expression.
}

const logicGates = {
    AND,
    OR,
    NOT,
    XOR
};

export default logicGates;
