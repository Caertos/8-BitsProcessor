# Logic Gates Implementation Procedure Guide

**Date:** October 19, 2025  
**Version:** 1.1.2  
**Project:** 8-Bits Processor  

---

## 🇺🇸 ENGLISH

## Procedure 1: Logic Gates Theoretical Foundations

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

**Note:** For derived gates (NAND, NOR, XNOR), see [bitacora1.1.3.md](../derivedGates/bitacora1.1.3.md)

## Procedure 2: Tinkercad Simulation

### AND Circuit - AND Gate

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/gLxxwnVH0Df-and?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Circuit configuration:**
- 2x Switches as inputs A and B
- 1x NPN Transistor for each input
- 2x 1kΩ Resistors (transistor bases)
- 1x LED current limiting resistor
- 1x LED as output indicator
- Series connections to simulate AND operation

**Operation:**
- **Both switches OFF:** LED off (0 AND 0 = 0)
- **One switch ON:** LED off (1 AND 0 = 0 or 0 AND 1 = 0)
- **Both switches ON:** LED on (1 AND 1 = 1)

### OR Circuit - OR Gate

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/cm3geL9L1aG-or?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Circuit configuration:**
- 2x Switches as inputs A and B
- 2x NPN Transistors in parallel
- 2x 1kΩ Resistors (transistor bases)
- 1x LED current limiting resistor
- 1x LED as output indicator
- Parallel connections to simulate OR operation

**Operation:**
- **Both switches OFF:** LED off (0 OR 0 = 0)
- **One switch ON:** LED on (1 OR 0 = 1 or 0 OR 1 = 1)
- **Both switches ON:** LED on (1 OR 1 = 1)

### NOT Circuit - NOT Gate

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/aQ5fxvKhfP8-not?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Circuit configuration:**
- 1x Switch as input A
- 1x NPN Transistor configured as inverter
- 1x 1kΩ Resistor (transistor base)
- Pull-up and current limiting resistors according to circuit design
- 1x LED as output indicator
- Inverter configuration: LED on when input is deactivated

**Operation:**
- **Switch OFF:** LED on (NOT 0 = 1)
- **Switch ON:** LED off (NOT 1 = 0)

## Procedure 3: Experiment Analysis

#### 1. Truth Table Validation
✅ **AND:** Behavior verified - Only activates with both inputs at 1  
✅ **OR:** Behavior verified - Activates with any input at 1  
✅ **NOT:** Behavior verified - Correctly inverts the input

**Note:** For derived gates validation (XOR, NAND, NOR, XNOR), see [bitacora1.1.3.md](../derivedGates/bitacora1.1.3.md)  

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
The result of AND between 🟡 and ⚫ is: ⚫
The result of AND between 🟡 and 🟡 is: 🟡
The result of AND between ⚫ and ⚫ is: ⚫
The result of AND between ⚫ and 🟡 is: ⚫
```

### OR Tests
```
The result of OR between 🟡 and ⚫ is: 🟡
The result of OR between 🟡 and 🟡 is: 🟡
The result of OR between ⚫ and ⚫ is: ⚫
The result of OR between ⚫ and 🟡 is: 🟡
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