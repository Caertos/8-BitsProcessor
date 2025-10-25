# Derived Logic Gates Implementation Procedure Guide

**Date:** October 19, 2025  
**Log:** 1.1.3  
**Project:** 8-Bits Processor  

---

## Procedure 1: Theoretical Foundations of Derived Gates

### Implemented Gates

#### 1. XOR Gate (Exclusive OR)
- **Function:** Returns 1 when the inputs are different
- **Formula:** XOR = (A AND NOT B) OR (NOT A AND B)
- **Truth table:**
  ```
  A | B | A XOR B
  0 | 0 |    0
  0 | 1 |    1
  1 | 0 |    1
  1 | 1 |    0
  ```

#### 2. NAND Gate (NOT AND)
- **Function:** Returns 0 only when both inputs are 1 (inverse of AND)
- **Formula:** NAND = NOT(A AND B)
- **Truth table:**
  ```
  A | B | A NAND B
  0 | 0 |    1
  0 | 1 |    1
  1 | 0 |    1
  1 | 1 |    0
  ```
- **Note:** NAND is a universal gate - it can build any other gate

#### 3. NOR Gate (NOT OR)
- **Function:** Returns 1 only when both inputs are 0 (inverse of OR)
- **Formula:** NOR = NOT(A OR B)
- **Truth table:**
  ```
  A | B | A NOR B
  0 | 0 |   1
  0 | 1 |   0
  1 | 0 |   0
  1 | 1 |   0
  ```
- **Note:** NOR is a universal gate - it can build any other gate

#### 4. XNOR Gate (Exclusive NOR)
- **Function:** Returns 1 when the inputs are equal (inverse of XOR)
- **Formula:** XNOR = NOT(XOR) = (A AND B) OR (NOT A AND NOT B)
- **Truth table:**
  ```
  A | B | A XNOR B
  0 | 0 |    1
  0 | 1 |    0
  1 | 0 |    0
  1 | 1 |    1
  ```
- **Application:** Equality comparator, identical bit detector

## Procedure 2: Tinkercad Simulation

### XOR Circuit - Exclusive OR Gate
The XOR gate is implemented using a combination of basic gates: (A AND NOT B) OR (NOT A AND B). This gate is fundamental in binary arithmetic operations and parity detection.

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/bdJCsD2OHB7-xor-without-ic?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Resistance Calculations:**
- **Base resistances for transistors:**
  - R_base = (V_battery - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (use commercial value: 1kΩ)
- **LED limiting resistor:**
  - R_LED = (V_battery - V_LED) / I_LED
  - R_LED = (9V - 2V) / 0.02A = 350Ω

**Required Materials:**
- 2x Switches as inputs A and B
- 4x NPN Transistors (2N2222 or equivalent)
- 4x 1kΩ Resistors (transistor bases)
- 1x 350Ω Resistor (LED current limiter)
- 1x LED as output indicator
- 9V Battery
- Breadboard and connecting wires

**Transistor Configuration:**
1. **First pair (A AND NOT B):**
   - Emitter to Ground (GND)
   - Base through 1kΩ resistor to switch A
   - Collector to next stage
2. **Second pair (NOT A AND B):**
   - Emitter to Ground (GND)
   - Base through 1kΩ resistor to switch B
   - Collector to next stage
3. **Final OR stage:** Combines both results

**LED Configuration:**
- LED Anode > Battery VCC (9V)
- LED Cathode > 350Ω Resistor > XOR Circuit Output

**Operation:**
- **Both switches OFF:** LED off (0 XOR 0 = 0)
- **One switch ON:** LED on (1 XOR 0 = 1 or 0 XOR 1 = 1)
- **Both switches ON:** LED off (1 XOR 1 = 0)
- **Why does it work?:** XOR returns 1 only when inputs are different. The circuit implements two AND blocks (A AND NOT B) and (NOT A AND B), then combines them with an OR. Only one block can activate at a time, producing the exclusive behavior.

### NAND Circuit - NOT AND Gate
The NAND gate is the inverse of AND. It's a universal gate, meaning any other logic gate can be built from NAND gates. This implementation uses an AND gate followed by an inverter.

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/fRsfA3oBoWR-nand?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Resistance Calculations:**
- **Base resistances for transistors:**
  - In this gate, energy first passes through resistors and LEDs before reaching the transistors.
  - To calculate the base resistance, we calculate the LED limiting resistor:
- **LED limiting resistor:**
  - R_LED = (V_battery - V_LED) / I_LED
  - R_LED = (9V - 2V) / 0.02A = 350Ω
  These resistors ensure that the LED operates within safe parameters, but also that the transistors function correctly.
- **Base resistance for transistor number 3:**
  - Following the principle that energy flows through the path of least resistance, we must calculate a higher resistance for the base of transistor 3, allowing energy to flow preferentially through the AND block before the inverter transistor. This is known as a pull-down resistor, whose standard values range from 1kΩ to 10kΩ.
  - R_base3 = (V_battery - V_BE) / I_B
  - R_base3 = (9V - 0.7V) / 0.0025A = 3320Ω (use commercial value: 3.3kΩ)

**Required Materials:**
- 2x Switches as inputs A and B
- 3x NPN Transistors (2 for AND + 1 for NOT)
- 1x 1kΩ Resistor (transistor bases)
- 1x 3.3kΩ Resistor (pull-down for transistor 3)
- 2x 350Ω Resistors (LED current limiters)
- 1x LED as output indicator
- 9V Battery

**Transistor Configuration:**
1. **AND stage (2 transistors in series):**
   - First transistor: Emitter > GND, Base > LED 1 > 350Ω Resistor > switch A
   - Second transistor: Emitter > Collector of first transistor, Base > LED 2 > 350Ω Resistor > switch B, Collector > 3.3kΩ pull-down resistor > Battery VCC (9V)
2. **NOT stage (1 inverter transistor):**
   - Third transistor: Collector > 1kΩ Resistor > Battery VCC (9V), Base > 3.3kΩ pull-down resistor > Battery VCC (9V), Emitter > LED 3 > Ground (GND)

**LED Configuration:**
- LED Anode > Battery VCC (9V)
- LED Cathode > 350Ω Resistor > NAND Circuit Output

**Operation:**
- **Both switches OFF:** LED on (0 NAND 0 = 1)
- **One switch ON:** LED on (1 NAND 0 = 1 or 0 NAND 1 = 1)
- **Both switches ON:** LED off (1 NAND 1 = 0)
- **Why does it work?:** NAND is the inverse of AND. First, the series transistors perform the AND operation (they only conduct when both are active). This is achieved by using a pull-down resistor at the base of the inverter transistor, which allows energy to flow preferentially through the AND block before the inverter transistor. Then, the inverter transistor inverts this signal. When the AND produces 1 (both switches ON), the inverter activates and diverts the LED current to ground, turning it off. In any other case, the LED remains on.

### NOR Circuit - NOT OR Gate
The NOR gate is the inverse of OR, another universal gate. Any logic circuit can be built using only NOR gates. This implementation combines an OR gate with an inverter.

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/6jdJRxdvJTv-nor?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Resistance Calculations:**
- **Base resistances for transistors:**
  - We calculate the LED limiting resistor:
- **LED limiting resistor:**
  - R_LED = (V_battery - V_LED) / I_LED
  - R_LED = (9V - 2V) / 0.02A = 350Ω
- These resistors ensure that the LED operates within safe parameters, but also that the transistors function correctly.
- **Pull-down resistance for transistor 3:**
  - To calculate a pull-down resistor, you should use high resistances (1kΩ to 10kΩ) to ensure that energy flows preferentially through the OR block before the inverter transistor.
  - R_base3 = (V_battery - V_BE) / I_B
  - R_base3 = (9V - 0.6V) / 0.01A = 830Ω (You can use the commercial value: 1kΩ)


**Required Materials:**
- 2x Switches as inputs A and B
- 3x NPN Transistors (2 for OR + 1 for NOT)
- 1x 1kΩ Resistor (pull-down for transistor 3)
- 2x 350Ω Resistors
- 3x LEDs as output indicators
- 9V Battery

**Transistor Configuration:**
1. **OR stage (2 transistors in parallel):**
   - Both transistors (1 and 2) > Emitters to GND, Bases > Respective LEDs > 350Ω Resistors > switches A and B respectively > Battery VCC (9V), Collectors > 1kΩ pull-down resistor > Battery VCC (9V)
   - Third transistor: Emitter > LED Anode > GND, Base > 1kΩ pull-down resistor, Collector > 1kΩ pull-down resistor > Battery VCC (9V)

**LED Configuration:**
- LED Anode > Battery VCC (9V)
- LED Cathode > 350Ω Resistor > NOR Circuit Output

**Operation:**
- **Both switches OFF:** LED on (0 NOR 0 = 1)
- **One switch ON:** LED off (1 NOR 0 = 0 or 0 NOR 1 = 0)
- **Both switches ON:** LED off (1 NOR 1 = 0)
- **Why does it work?:** NOR is the inverse of OR. The parallel transistors perform the OR operation (they conduct when either is active), preferring this because the pull-down resistor at the base of the inverter transistor allows energy to flow through the OR block before the inverter transistor. When the OR produces 1 (either switch ON), the inverter activates and diverts the LED current to ground, turning it off. Only when both switches are OFF does the LED remain on.

### XNOR Circuit - Exclusive NOR Gate
**Pending physical implementation**

**Note:** XNOR is useful as a comparator - the LED lights up when both inputs are equal.

### Experiment Analysis

#### 1. Truth Table Validation
✅ **XOR:** Behavior verified - Only activates with different inputs  
✅ **NAND:** Behavior verified - Activates except when both inputs are 1  
✅ **NOR:** Behavior verified - Only activates when both inputs are 0  
⚙️ **XNOR:** Pending physical implementation - Theoretical behavior: activates with equal inputs

#### 2. Hardware Considerations
- **LED Current:** Calculated according to the specific resistors in each circuit
- **Transistor Configuration:** NPN transistors used as digital switches
- **Base Resistors:** 1kΩ resistors to limit base current and protect transistors
- **Power Supply:** 9V battery used for the main power supply
- **Complexity:** XOR and XNOR require more transistors than basic gates

#### 3. Hardware-Software Correspondence
- **Binary States:** Physical representation (LED ON/OFF) corresponds to software (1/0)
- **Boolean Logic:** Physical circuits implement the same operations as code
- **Scalability:** Principles applicable to more complex integrated circuits
- **Universality:** NAND and NOR can build any other logic gate

## Procedure 3: JavaScript Implementation

### Derived Gates Implementation

Derived gates are implemented using basic gates:

```javascript
// XOR using basic gates
function xor(a, b) {
    // XOR = (A AND NOT B) OR (NOT A AND B)
    return or(and(a, not(b)), and(not(a), b));
}

// NAND as inversion of AND
function nand(a, b) {
    return not(and(a, b));
}

// NOR as inversion of OR
function nor(a, b) {
    return not(or(a, b));
}

// XNOR as inversion of XOR
function xnor(a, b) {
    return not(xor(a, b));
    // Alternatively: (A AND B) OR (NOT A AND NOT B)
    // return or(and(a, b), and(not(a), not(b)));
}
```

### Practical Use Cases

#### XOR - Binary Addition
```javascript
// XOR is fundamental in binary addition (sum bit without carry)
function halfAdder(a, b) {
    const sum = xor(a, b);      // Sum bit
    const carry = and(a, b);     // Carry bit
    return { sum, carry };
}
```

#### XNOR - Equality Comparator
```javascript
// XNOR detects when two bits are equal
function bitsAreEqual(a, b) {
    return xnor(a, b);  // Returns 1 if a === b
}
```

#### NAND/NOR - Universal Construction
```javascript
// Example: NOT using only NAND
function notFromNand(a) {
    return nand(a, a);
}

// Example: AND using only NAND
function andFromNand(a, b) {
    return nand(nand(a, b), nand(a, b));
}
```

## Procedure 4: Next Steps

### Project Expansion

1. **Full adders:** Build a half adder and full adder using XOR
2. **Multiplexers:** Implement them using derived gates
3. **Decoders:** Create decoding circuits
4. **Basic memory:** Implement flip-flops using NAND or NOR
5. **Simplified ALU:** Combine gates for basic arithmetic operations

### Optimizations

- Minimize the number of transistors in physical implementations
- Reduce propagation delay in gate chains
- Implement versions with integrated circuits (74LS series)

---

## 📚 Referencias | References

- **Libros | Books:**
  - "Digital Design and Computer Architecture" - Harris & Harris
  - "The Art of Electronics" - Horowitz & Hill
  
- **Documentación | Documentation:**
  - Tinkercad Circuits Documentation
  - JavaScript Boolean Logic Best Practices
  
- **Recursos Online | Online Resources:**
  - [Tinkercad](https://www.tinkercad.com)
  - [MDN Web Docs - Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

**Autor | Author:** [Caertos]  
**Licencia | License:** MIT  
**Repositorio | Repository:** [8-BitsProcessor](https://github.com/Caertos/8-BitsProcessor)
