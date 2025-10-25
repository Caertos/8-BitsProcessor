import derivedGates from "../src/core/derivedGates/derivedGates.js";
import { 
    displayTestSection, 
    printTestsLogs
} from "./visualizeLogic/visualizer.js";

const { XOR, NAND, NOR, XNOR } = derivedGates;

function displayXORTest(input1, input2, result) {
    printTestsLogs(XOR.name, input1, input2, result);
}

function displayNANDTest(input1, input2, result) {
    printTestsLogs(NAND.name, input1, input2, result);
}

function displayNORTest(input1, input2, result) {
    printTestsLogs(NOR.name, input1, input2, result);
}

function displayXNORTest(input1, input2, result) {
    printTestsLogs(XNOR.name, input1, input2, result);
}

export function testXOR(input1, input2) {
    const result = XOR(input1, input2);
    displayXORTest(input1, input2, result);
    return result;
}

export function testNAND(input1, input2) {
    const result = NAND(input1, input2);
    displayNANDTest(input1, input2, result);
    return result;
}

export function testNOR(input1, input2) {
    const result = NOR(input1, input2);
    displayNORTest(input1, input2, result);
    return result;
}

export function testXNOR(input1, input2) {
    const result = XNOR(input1, input2);
    displayXNORTest(input1, input2, result);
    return result;
}

displayTestSection("Tests: XOR");
testXOR(0, 0);
testXOR(0, 1);
testXOR(1, 0);
testXOR(1, 1);

displayTestSection("Tests: NAND");
testNAND(0, 0);
testNAND(0, 1);
testNAND(1, 0);
testNAND(1, 1);

displayTestSection("Tests: NOR");
testNOR(0, 0);
testNOR(0, 1);
testNOR(1, 0);
testNOR(1, 1);

displayTestSection("Tests: XNOR");
testXNOR(0, 0);
testXNOR(0, 1);
testXNOR(1, 0);
testXNOR(1, 1);