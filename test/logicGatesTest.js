import logicGates from "../logicGates/logicGates.js";
import { 
    displayTestSection, 
    bitToEmoji 
} from "./visualizeLogic/visualizer.js";

const { AND, OR, NOT, XOR } = logicGates;

function displayANDTest(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of AND between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
}

function displayORTest(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of OR between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
}

function displayNOTTest(input, result) {
    const inputEmoji = bitToEmoji(input);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of NOT logic", inputEmoji, "is:", resultEmoji);
}

function displayXORTest(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of XOR between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
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

function testXOR(input1, input2) {
  const result = XOR(input1, input2);
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
