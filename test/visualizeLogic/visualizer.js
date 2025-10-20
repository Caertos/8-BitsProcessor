export function bitToEmoji(bit) {
    return bit ? "🟡" : "⚫";
}

export function displayTransistorSignal(signal, result) {
    const resultEmoji = bitToEmoji(result);
    console.log(resultEmoji);
}

export function displayANDTest(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of AND between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
}

export function displayORTest(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of OR between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
}

export function displayNOTTest(input, result) {
    const inputEmoji = bitToEmoji(input);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of NOT logic", inputEmoji, "is:", resultEmoji);
}

export function displayXORTest(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    console.log("The result of XOR between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
}

export function displayTestSection(title) {
    console.log(`\n=== ${title} ===`);
}

export function displayTransistorHeader() {
    console.log("El transistor envía señales alternadas al bit:\n");
}