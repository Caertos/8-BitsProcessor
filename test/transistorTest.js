import { bit } from "../src/core/bit/bit.js";
import { displayTransistorHeader, displayTransistorSignal } from "./visualizeLogic/visualizer.js";

function transistor() {
  displayTransistorHeader();
  
  for (let i = 0; i < 10; i++) {
    const signal = i % 2;
    const result = bit(signal);
    displayTransistorSignal(signal, result);
  }
}

transistor();