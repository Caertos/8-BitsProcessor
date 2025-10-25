import logicGates from "../src/core/logicGates/logicGates.js";
import { 
    displayTestSection, 
    printTestsLogs,
    printNOTTestLog
} from "./visualizeLogic/visualizer.js";

const { AND, OR, NOT } = logicGates;

function displayANDTest(input1, input2, result) {
    printTestsLogs(AND.name, input1, input2, result);
}

function displayORTest(input1, input2, result) {
    printTestsLogs(OR.name, input1, input2, result);
}

function displayNOTTest(input, result) {
    printNOTTestLog(NOT.name, input, result);
}

function testAND(input1, input2) {
  const result = AND(input1, input2);
  displayANDTest(input1, input2, result);
  return result;
}

function testOR(input1, input2) {
  const result = OR(input1, input2);
  displayORTest(input1, input2, result);
  return result;
}

function testNOT(input) {
  const result = NOT(input);
  displayNOTTest(input, result);
  return result;
}

displayTestSection("Tests: AND");
testAND(0, 0);
testAND(0, 1);
testAND(1, 0);
testAND(1, 1);

displayTestSection("Tests: OR");
testOR(0, 0);
testOR(0, 1);
testOR(1, 0);
testOR(1, 1);

displayTestSection("Tests: NOT");
testNOT(AND(1, 0));
testNOT(AND(1, 1));

