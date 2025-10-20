import logicGates from '../../logicGates/logicGates.js';
import { 
    displayTestSection, 
    displayANDTest, 
    displayORTest, 
    displayNOTTest, 
    displayXORTest 
} from '../visualizeLogic/visualizer.js';

const { AND, OR, NOT, XOR } = logicGates;

function testAND(input1, input2) {
    const result = (input1 && input2) ? 1 : 0;
    displayANDTest(input1, input2, result);
    return result;
}

function testOR(input1, input2) {
    const result = (input1 || input2) ? 1 : 0;
    displayORTest(input1, input2, result);
    return result;
}

function testNOT(input) {
    const result = input ? 0 : 1;
    displayNOTTest(input, result);
    return result;
}

function testXOR(input1, input2) {
    const result = input1 ^ input2;
    displayXORTest(input1, input2, result);
    return result;
}

// Tests: AND
displayTestSection("Tests: AND");
testAND(1, 0);
testAND(1, 1);
testAND(0, 0);
testAND(0, 1);

// Tests: OR
displayTestSection("Tests: OR");
testOR(1, 0);
testOR(1, 1);
testOR(0, 0);
testOR(0, 1);

// Tests: NOT
displayTestSection("Tests: NOT");
testNOT(AND(1, 0));
testNOT(AND(1, 1));

// Tests: XOR
displayTestSection("Tests: XOR");
testXOR(1, 0);
testXOR(1, 1);
testXOR(0, 0);
testXOR(0, 1);