import { bit } from "./bit.js";

function transistor() {
  console.log("El transistor envía señales alternadas al bit:\n");
  
  for (let i = 0; i < 10; i++) {
    const signal = i % 2;
    const result = bit(signal);
    
    if (result === 1) {
      console.log("🟡");
    } else {
      console.log("⚫");
    }
  }
}

transistor();
