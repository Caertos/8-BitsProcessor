export function bitToEmoji(bit) {
    return bit ? "🟡" : "⚫";
}

export function displayTransistorSignal(signal, result) {
    const resultEmoji = bitToEmoji(result);
    console.log(resultEmoji);
}

export function displayTestSection(title) {
    console.log(`\n=== ${title} ===`);
}

export function displayTransistorHeader() {
    console.log("El transistor envía señales alternadas al bit:\n");
}