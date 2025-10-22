export function bitToEmoji(bit) {
    return bit ? "🟡" : "⚫";
}

export function displayTransistorSignal(signal, result) {
    const resultEmoji = bitToEmoji(result);
    console.log(resultEmoji);
}

export function transformInputsAndResultsToEmoji(input1, input2, result) {
    const input1Emoji = bitToEmoji(input1);
    const input2Emoji = bitToEmoji(input2);
    const resultEmoji = bitToEmoji(result);
    return { input1Emoji, input2Emoji, resultEmoji };
}

export function printTestsLogs(gateName, input1, input2, result) {
    const { input1Emoji, input2Emoji, resultEmoji } = transformInputsAndResultsToEmoji(input1, input2, result);
    console.log(`The result of ${gateName} between ${input1Emoji} and ${input2Emoji} is: ${resultEmoji}`);
}

export function printNOTTestLog(gateName, input, result) {
    const inputEmoji = bitToEmoji(input);
    const resultEmoji = bitToEmoji(result);
    console.log(`The result of ${gateName} logic ${inputEmoji} is: ${resultEmoji}`);
}

export function displayTestSection(title) {
    console.log(`\n=== ${title} ===`);
}

export function displayTransistorHeader() {
    console.log("The transistor sends alternating signals to the bit:\n");
}