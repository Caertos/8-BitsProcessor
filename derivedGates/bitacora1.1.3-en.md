# Derived Logic Gates Implementation Procedure Guide

**Date:** October 19, 2025  
**Version:** 1.1.3  
**Project:** 8-Bits Processor  

---

## Procedure 1: Theoretical Foundations of Derived Gates

### Implemented Gates

#### 1. XOR Gate (Exclusive OR)
- **Function:** Returns 1 when inputs are different
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
- **Note:** NAND is a universal gate - can build any other gate

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
- **Note:** NOR is a universal gate - can build any other gate

#### 4. XNOR Gate (Exclusive NOR)
- **Function:** Returns 1 when inputs are equal (inverse of XOR)
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

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/bdJCsD2OHB7-xor-without-ic?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Circuit configuration:**
- 2x Switches as inputs A and B
- 4x NPN Transistors configured as logic gates
- 4x 1kΩ Resistors (transistor bases)
- 1x 3.3kΩ Resistor (LED current limiter)
- 1x LED as output indicator
- Implementation using: XOR = (A AND NOT B) OR (NOT A AND B)

**Operation:**
- **Both switches OFF:** LED off (0 XOR 0 = 0)
- **One switch ON:** LED on (1 XOR 0 = 1 or 0 XOR 1 = 1)
- **Both switches ON:** LED off (1 XOR 1 = 0)

### NAND Circuit - NOT AND Gate

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/fRsfA3oBoWR-nand?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Circuit configuration:**
- 2x Switches as inputs A and B
- 2x NPN Transistors configured in series
- 2x 1kΩ Resistors (transistor bases)
- 1x LED current limiting resistor
- 1x LED as output indicator
- Implementation using: NAND = NOT(AND(A, B))

**Operation:**
- **Both switches OFF:** LED on (0 NAND 0 = 1)
- **One switch ON:** LED on (1 NAND 0 = 1 or 0 NAND 1 = 1)
- **Both switches ON:** LED off (1 NAND 1 = 0)

### NOR Circuit - NOT OR Gate

**🔗 Interactive Simulation:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/6jdJRxdvJTv-nor?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Circuit configuration:**
- 2x Switches as inputs A and B
- 2x NPN Transistors configured in parallel with inverted logic
- 2x 1kΩ Resistors (transistor bases)
- 1x LED current limiting resistor
- 1x LED as output indicator
- Implementation using: NOR = NOT(OR(A, B))

**Operation:**
- **Both switches OFF:** LED on (0 NOR 0 = 1)
- **One switch ON:** LED off (1 NOR 0 = 0 or 0 NOR 1 = 0)
- **Both switches ON:** LED off (1 NOR 1 = 0)

### XNOR Circuit - Exclusive NOR Gate

**Circuit configuration:**
- 2x Switches as inputs A and B
- 5x NPN Transistors (more complex configuration than XOR with inversion)
- 5x 1kΩ Resistors (transistor bases)
- 1x LED current limiting resistor
- 1x LED as output indicator
- Implementation using: XNOR = (A AND B) OR (NOT A AND NOT B)

**Operation:**
- **Both switches OFF:** LED on (0 XNOR 0 = 1)
- **One switch ON:** LED off (1 XNOR 0 = 0 or 0 XNOR 1 = 0)
- **Both switches ON:** LED on (1 XNOR 1 = 1)

**Note:** XNOR is useful as a comparator - LED lights up when both inputs are equal.

### Experiment Analysis

#### 1. Truth Table Validation
✅ **XOR:** Behavior verified - Only activates with different inputs  
✅ **NAND:** Behavior verified - Activates except when both inputs are 1  
✅ **NOR:** Behavior verified - Only activates when both inputs are 0  
⚙️ **XNOR:** Pending physical implementation - Theoretical behavior: activates with equal inputs

#### 2. Hardware Considerations
- **LED Current:** Calculated according to specific resistors in each circuit
- **Transistor Configuration:** NPN used as digital switches
- **Base Resistors:** 1kΩ to limit base current and protect transistors
- **Power Supply:** 9V used for main power supply
- **Complexity:** XOR and XNOR require more transistors than basic gates

#### 3. Hardware-Software Correspondence
- **Binary States:** Physical representation (LED ON/OFF) corresponds to software (1/0)
- **Boolean Logic:** Physical circuits implement same operations as code
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

1. **Full adders:** Build half adder and full adder using XOR
2. **Multiplexers:** Implement using derived gates
3. **Decoders:** Create decoding circuits
4. **Basic memory:** Implement flip-flops using NAND or NOR
5. **Simplified ALU:** Combine gates for basic arithmetic operations

### Optimizations

- Minimize number of transistors in physical implementations
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
