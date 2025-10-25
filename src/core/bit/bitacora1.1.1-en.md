# Procedure Guide: Bit Implementation

**Date:** October 19, 2025  
**Log:** 1.1.1  
**Project:** 8-Bits Processor  

---

## Preface: Fundamental Unit - The Bit

The bit is the basic unit of information in computing and electronics. It represents a binary state, either 0 (off) or 1 (on). In this project, we start with the bit as the minimum unit since it is a fundamental concept for understanding digital systems. We have implemented its behavior in both hardware (simulation) and software (JavaScript).

## Procedure 1: Tinkercad Simulation

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe width="725" height="453" src="https://www.tinkercad.com/embed/57Rf0VVflk2" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>

### Required Materials
- 1x NPN Transistor (2N2222 or similar)
- 1x Push button
- 2x Resistors (350Ω and 8.3kΩ)
- 1x LED
- 1x Battery (9V)
- Connection wires

### Implementation Steps

1. **Transistor configuration (NPN)**
   - Connect the transistor emitter to ground (GND)
   - Connect the collector to the LED cathode
   - Connect the base to the push button

2. **Control configuration**
   - The other terminal of the push button connects to the 8.3kΩ resistor, which in turn connects to the 9V battery

3. **LED configuration**
   - The LED anode connects through a 350Ω resistor to the 9V battery

4. **State verification**
   - **State 0:** Control signal = 0V → LED off
   - **State 1:** Control signal = 9V → LED on

5. **Functionality testing**
   - Alternate control signal between 0V and 9V
   - Verify LED response (ON/OFF)
   - Confirm clean switching without intermediate states

### Technical Considerations

**LED Current Calculation:**
To operate the LED safely, a limiting resistor is used. Its value is calculated with the formula:

```R = (V_battery - V_LED) / I_LED
```
Where:
- R = Resistance (Ω)
- V_battery = Battery voltage (9V)
- V_LED = LED forward voltage (~2V)
- I_LED = Desired LED current (20mA = 0.02A)

Based on Ohm's law, we get:

```R = (9V - 2V) / 0.02A = 350Ω
```

**Base Resistance Calculation:**
To limit the current in the transistor base, a base resistor is calculated as:

```R_base = (V_battery - V_BE) / I_B
```
Where:
- V_BE = Base-emitter voltage (~0.7V)
- I_B = Base current (usually 1/10 of the collector current)
Assuming I_B = 1mA:

```R_base = (9V - 0.7V) / 0.001A = 8.3kΩ
```

## Procedure 2: JavaScript Abstraction

### Final Implementation (bit.js)

```javascript
export function bit(input = 0) {
    let bitValue = input;
    bitValue = bitValue ? 1 : 0;
    return bitValue;
}
```

### Test Implementation (transistorTest.js)
Alternating signal simulation to verify bit behavior:

```javascript
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
```

### Development Steps

1. **Create modular structure**
   - Use `export` to allow imports
   - Define the `bit(input)` function with an input parameter

2. **Implement transistor logic**
   - Receive the control signal as `input`
   - Apply binary normalization: `input ? 1 : 0`
   - Return the bit state (0 or 1)

3. **Create transistor simulation**
   - The `for` loop alternates signals (0 and 1) using the modulo operator
   - Each iteration sends a signal to the bit
   - Visualize result with emojis (🟡/⚫)

4. **Validate behavior**
   - Execute with `npm run test:bit`
   - Verify correct alternation between states
   - Confirm hardware-software correspondence

## Results Obtained

### Hardware (Tinkercad)
✅ **Correct operation:** The transistor switches between states 0 and 1  
✅ **Clear visualization:** The LED indicates the current bit state  
✅ **Effective control:** The input signal controls the output state  

### Software (JavaScript)
✅ **Operational function:** Accepts input parameter and returns binary values  
✅ **Clean code:** Modular and exportable structure  
✅ **Correct simulation:** Transistor sends alternating signals to bit  
✅ **Functional visualization:** Emojis indicate state (🟡=1, ⚫=0)  
✅ **Verified behavior:** Correct alternation between states  

## Conclusions

### 1. Hardware-Software Correspondence
The Tinkercad simulation demonstrates real physical bit operation, while the JavaScript abstraction provides an equivalent functional model.

### 2. Verified Fundamental Principles
- **Binarity:** Only two valid states exist (0 and 1)
- **Switching:** Ability to change between states
- **Determinism:** Predictable output state based on the input

### 3. Overcome Limitations
- **Hardware:** Dependent on physical components and power supply
- **Software:** ✅ Corrected implementation allows dynamic state changes
- **Simulation:** ✅ Functional correspondence between physical and virtual transistors

### 4. Key Learnings
- A bit is the fundamental unit of digital information
- Software abstraction must receive parameters to simulate control signals
- Visualization helps in understanding transistor behavior
- A `for` loop can effectively simulate a signal generator

## Follow-up Actions

### Completed ✅
1. **JavaScript function corrected:** Implemented input parameter
2. **Functional simulation:** Virtual transistor alternating states
3. **Visualization implemented:** Emojis show bit states
4. **Behavior validated:** Hardware-software correspondence verified

---
**Status:** ✅ Implementation completed and functional | **Test file:** `transistorTest.js` | **Next review:** 8-bit register implementation
