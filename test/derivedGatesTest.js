import derivedGates from "../derivedGates/derivedGates.js";
import { 
    displayTestSection, 
    bitToEmoji 
} from "./visualizeLogic/visualizer.js";

const { NAND } = derivedGates;

function displayNANDTest(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of NAND between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
}

export function testNAND(input1, input2) {
    const result = NAND(input1, input2);
    displayNANDTest(input1, input2, result);
    return result;
}

// Tests: NAND
displayTestSection("Tests: NAND");
testNAND(0, 0);
testNAND(0, 1);
testNAND(1, 0);
testNAND(1, 1);