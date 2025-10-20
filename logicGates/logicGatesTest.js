import logicGates from './logicGates.js';

const { AND, OR, NOT, XOR } = logicGates;

function testAND(input1, input2) {
    const result = (input1 && input2) ? 1 : 0;
    const input1Emoji = input1 ? "🟡" : "⚫";
    const input2Emoji = input2 ? "🟡" : "⚫";
    const resultEmoji = result ? "🟡" : "⚫";
    console.log("The result of AND between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
    return result;
}

function testOR(input1, input2) {
    const result = (input1 || input2) ? 1 : 0;
    const input1Emoji = input1 ? "🟡" : "⚫";
    const input2Emoji = input2 ? "🟡" : "⚫";
    const resultEmoji = result ? "🟡" : "⚫";
    console.log("The result of OR between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
    return result;
}

function testNOT(input) {
    const result = input ? 0 : 1;
    const inputEmoji = input ? "🟡" : "⚫";
    const resultEmoji = result ? "🟡" : "⚫";
    console.log("The result of NOT logic", inputEmoji, "is:", resultEmoji);
    return result;
}

function testXOR(input1, input2) {
    const result = input1 ^ input2;
    const input1Emoji = input1 ? "🟡" : "⚫";
    const input2Emoji = input2 ? "🟡" : "⚫";
    const resultEmoji = result ? "🟡" : "⚫";
    console.log("The result of XOR between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
    return result;
}

// Tests: AND
console.log("=== Tests: AND ===");
testAND(1, 0);
testAND(1, 1);
testAND(0, 0);
testAND(0, 1);

// Tests: OR
console.log("\n=== Tests: OR ===");
testOR(1, 0);
testOR(1, 1);
testOR(0, 0);
testOR(0, 1);

// Tests: NOT
console.log("\n=== Tests: NOT ===");
testNOT(AND(1, 0));
testNOT(AND(1, 1));

// Tests: XOR
console.log("\n=== Tests: XOR ===");
testXOR(1, 0);
testXOR(1, 1);
testXOR(0, 0);
testXOR(0, 1);