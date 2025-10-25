# Procedure Guide: Logic Gates Implementation

**Date:** October 19, 2025  
**Log:** 1.1.2  
**Project:** 8-Bits Processor  

---

## 🇺🇸 ENGLISH

## Procedure 1: Logic Gates Theoretical Foundations
Logic gates are the fundamental building blocks of digital circuits. They perform basic boolean operations that are essential for data processing in digital systems. In this project, we will implement the three basic logic gates: AND, OR, and NOT. Based on Boolean mathematical logic, each gate has a specific function defined by its truth table.

### Implemented Gates

#### 1. AND Gate
- **Function:** Returns 1 only when both inputs are 1
- **Truth table:**
  ```
  A | B | A AND B
  0 | 0 |    0
  0 | 1 |    0
  1 | 0 |    0
  1 | 1 |    1
  ```

#### 2. OR Gate
- **Function:** Returns 1 when at least one input is 1
- **Truth table:**
  ```
  A | B | A OR B
  0 | 0 |   0
  0 | 1 |   1
  1 | 0 |   1
  1 | 1 |   1
  ```

#### 3. NOT Gate
- **Function:** Inverts the input value
- **Truth table:**
  ```
  A | NOT A
  0 |   1
  1 |   0
  ```

## Procedure 2: Tinkercad Simulation

### AND Circuit - AND Gate
The AND gate is implemented using NPN transistors in series configuration, where both transistors must be in the ON state for the LED to light up.

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/gLxxwnVH0Df-and?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Resistance calculations:**
- **Transistor base resistance:**
  - R_base = (V_battery - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (use closest commercial value: 1kΩ)

**Required Materials:**
- 2x Switches as inputs A and B
- 2x NPN Transistor (one for each input)
- 2x 1kΩ Resistors (transistor bases)
- 1x 350Ω LED current limiting resistor
- 1x LED as output indicator
- Series connections to simulate AND operation

**Transistor configuration (NPN):**
- Transistor 1: Base > Resistor A 1kΩ > Switch A
- Transistor 2: Base > Resistor B 1kΩ > Switch B
- Transistor 1 emitter > Transistor 2 collector
- Transistor 2 emitter > Ground (GND)
- Transistor 1 collector > 350Ω resistor

**LED configuration:**
- LED anode > VCC Battery (9V)
- LED cathode > 350Ω resistor > Transistor 1 collector

**Control configuration:**
- Switch A > 1kΩ resistor > Transistor 1 base
- Switch B > 1kΩ resistor > Transistor 2 base

**Operation:**
- **Both switches OFF:** LED off (0 AND 0 = 0)
- **One switch ON:** LED off (1 AND 0 = 0 or 0 AND 1 = 0)
- **Both switches ON:** LED on (1 AND 1 = 1)
- **Why does it work?:** Only when both switches are on, since it is a series circuit. If transistor 1 does not allow energy to flow, it does not reach transistor 2, but if transistor 2 is off it also does not allow energy to flow to GND. Only when both transistors activate (ON) can current flow through them to ground (GND), turning on the LED.

### OR Circuit - OR Gate
The OR gate is implemented using NPN transistors in parallel configuration, where either transistor can be in the ON state for the LED to light up.

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/cm3geL9L1aG-or?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Resistance calculations:**
- **Transistor base resistance:**
  - R_base = (V_battery - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (use closest commercial value: 1kΩ)

**Required Materials:**
- 2x Switches as inputs A and B
- 2x NPN Transistor (one for each input)
- 2x 1kΩ Resistors (transistor bases)
- 1x 350Ω LED current limiting resistor
- 1x LED as output indicator
- Parallel connections to simulate OR operation

**Transistor configuration (NPN):**
- Transistor 1: Base > Resistor A 1kΩ > Switch A
- Transistor 2: Base > Resistor B 1kΩ > Switch B
- Transistor 1 emitter > Ground (GND)
- Transistor 2 emitter > Ground (GND)
- Transistor 1 collector > 350Ω resistor
- Transistor 2 collector > 350Ω resistor (shared)

**LED configuration:**
- LED anode > VCC Battery (9V)
- LED cathode > 350Ω resistor > Transistor collectors (parallel connection)

**Control configuration:**
- Switch A > 1kΩ resistor > Transistor 1 base
- Switch B > 1kΩ resistor > Transistor 2 base

**Operation:**
- **Both switches OFF:** LED off (0 OR 0 = 0)
- **One switch ON:** LED on (1 OR 0 = 1 or 0 OR 1 = 1)
- **Both switches ON:** LED on (1 OR 1 = 1)
- **Why does it work?:** When both switches are off, both transistors are in the OFF state, preventing current from flowing through the LED, keeping it off. When either switch is on, the corresponding transistor activates (ON), allowing current to flow through it to GND, turning on the LED.

### NOT Circuit - NOT Gate
The NOT gate is implemented using an NPN transistor in inverter configuration, where the transistor functions as a switch that inverts the input signal.

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/aQ5fxvKhfP8-not?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Resistance calculations:**
- **Transistor base resistance:**
  - R_base = (V_battery - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (use closest commercial value: 1kΩ)
- **LED pull-up resistance:**
  - R_pullup = (V_battery - V_LED) / I_LED
  - R_pullup = (9V - 2V) / 0.02A = 350Ω

**Required Materials:**
- 1x Switch as input A
- 1x NPN Transistor configured as inverter
- 1x 1kΩ Resistor (transistor base)
- 1x 350Ω Resistor (LED pull-up)
- 1x LED as output indicator
- Inverter configuration: LED on when input is deactivated

**Transistor configuration (NPN):**
- Transistor: Base > 1kΩ resistor > Switch A
- Transistor emitter > Ground (GND)
- Transistor collector > LED cathode

**LED configuration:**
- LED anode > 350Ω resistor > VCC Battery (9V)
- LED cathode > Transistor collector

**Control configuration:**
- Switch A > 1kΩ resistor > Transistor base

**Operation:**
- **Switch OFF:** LED on (NOT 0 = 1) - Transistor OFF, current flows through LED
- **Switch ON:** LED off (NOT 1 = 0) - Transistor ON, current diverted to ground
- **Why does it work?:** Based on the fact that energy flows through the path of least resistance. When the switch is off, the transistor is in the OFF state, allowing current to flow through the LED, turning it on. When the switch is on, the transistor activates (ON), creating a direct path to ground (GND) and diverting current from the LED, turning it off.

## Procedure 3: Experiment Analysis

#### 1. Truth Table Validation
✅ **AND:** Behavior verified - Only activates with both inputs at 1  
✅ **OR:** Behavior verified - Activates with any input at 1  
✅ **NOT:** Behavior verified - Correctly inverts the input  

#### 2. Hardware Considerations
- **LED Current:** Calculated according to the specific resistors in each circuit
- **Transistor Configuration:** NPN transistors used as digital switches
- **Base Resistors:** 1kΩ resistors to limit base current and protect transistors
- **Power Supply:** 9V battery used for the main power supply

#### 3. Hardware-Software Correspondence
- **Binary States:** Physical representation (LED ON/OFF) corresponds to software (1/0)
- **Boolean Logic:** Physical circuits implement the same operations as code
- **Scalability:** Principles applicable to more complex integrated circuits

## Procedure 4: JavaScript Implementation

### Main File (logicGates.js)

The actual repository implementation uses the `bit` normalization function and exports the three basic gates in `logicGates/logicGates.js`.

```javascript
import { bit } from '../bit/bit.js';

export function AND(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit(normalizedInput1 && normalizedInput2);
}

export function OR(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit(normalizedInput1 || normalizedInput2);
}

export function NOT(input) {
    const normalizedInput = bit(input);
    return bit(!normalizedInput);
}

const logicGates = {
    AND,
    OR,
    NOT
};

export default logicGates;
```

### Test File (`test/logicGatesTest.js`)

The actual test file is located at `test/logicGatesTest.js` and uses the visualization helpers in `test/visualizeLogic/visualizer.js`. It imports `../logicGates/logicGates.js` and displays the results of each gate using emojis.

This matches the test file present in the workspace (`/test/logicGatesTest.js`).

## Procedure 5: Implementation Features

### 1. Modular Design
- **Individual export:** Each gate is exported as an independent function
- **Default export:** `logicGates` object contains all functions
- **Reusability:** Gates can use other gates

### 2. Binary Normalization
- **Flexible input:** Accepts JavaScript truthy/falsy values
- **Consistent output:** Always explicitly returns 0 or 1
- **Predictable behavior:** Automatic conversion to binary values

### 3. Comprehensive Testing System
- **Complete coverage:** All input combinations tested
- **Clear visualization:** Emojis (🟡=1, ⚫=0) for easy understanding
- **Gate composition:** NOT uses AND results to demonstrate interoperability

## Execution Results

### AND Tests
```
The result of AND between ⚫ and ⚫ is: ⚫
The result of AND between ⚫ and 🟡 is: ⚫
The result of AND between 🟡 and ⚫ is: ⚫
The result of AND between 🟡 and 🟡 is: 🟡
```

### OR Tests
```
The result of OR between ⚫ and ⚫ is: ⚫
The result of OR between ⚫ and 🟡 is: 🟡
The result of OR between 🟡 and ⚫ is: 🟡
The result of OR between 🟡 and 🟡 is: 🟡
```

### NOT Tests
```
The result of NOT logic ⚫ is: 🟡
The result of NOT logic 🟡 is: ⚫
```

## Technical Analysis

### 1. Boolean Algebra Consistency
✅ **AND:** Correctly implements logical multiplication  
✅ **OR:** Correctly implements logical addition  
✅ **NOT:** Correctly implements logical negation  

### 2. Code Optimization
- **Ternary operators:** Efficient use of `? :` operator for binary conversion
- **Native logical operators:** Leverages JavaScript's `&&` and `||` operators
- **Clean structure:** Clear separation between logic and presentation

### 3. Scalability
- **Solid foundation:** Fundamental gates for complex circuits
- **Extensibility:** Easy addition of derived gates (NAND, NOR, etc.)
- **Modularity:** Selective import according to project needs

## Applications in the 8-Bit Processor

### 1. Arithmetic Logic Unit (ALU)
- **AND/OR:** Bitwise logical operations
- **NOT:** Complement, data negation

### 2. Control Circuits
- **AND:** Conditional signal enabling
- **OR:** Control signal multiplexing
- **NOT:** Control signal inversion

### 3. Registers and Memory
- **AND/OR:** Bit masks, data selection

## Conclusions

### 1. Successful Implementation
The three fundamental logic gates have been correctly implemented with behavior that exactly matches standard truth tables.

### 2. Code Quality
- **Readability:** Clear and well-documented code
- **Maintainability:** Modular structure facilitates modifications
- **Testability:** Complete and visual testing system

### 3. Integration Readiness
The gates are ready to be used in more complex 8-bit processor components, providing the fundamental logical foundation.

### 4. Educational Innovations
- **Enhanced visualization:** Emojis facilitate the understanding of binary states
- **Exhaustive testing:** Complete coverage of all use cases

## Follow-up Actions

### Completed ✅
1. **Basic gate implementation:** AND, OR, NOT functional
2. **Testing system:** Complete coverage with visualization
3. **Modular structure:** Individual and collective export
4. **Documentation:** Truth tables and complete technical analysis
5. **Validation:** All tests pass correctly

---
**Status:** ✅ Implementation completed and validated | **Test file:** `logicGatesTest.js` | **Next review:** Integration with ALU and combinational circuits

---