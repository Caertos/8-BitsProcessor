# 8-Bit Processor Simulation

A step-by-step implementation of an 8-bit processor, from basic transistors to a complete CPU simulation.

## 🎯 Project Goal

This project documents the journey of building a complete understanding of digital processors by implementing each component from the ground up, starting with basic transistors.

📁 **[View Project Structure](./Structure.md)** - Detailed architecture and component organization

## 🚀 Current Progress

### ✅ Completed Components
- **Bit Implementation** - Basic transistor simulation with JavaScript abstraction
  - 📋 [Development Log (Bilingual)](./bit/bitacora1.1.1.md)
- **Logic Gates** - Complete implementation of AND, OR, NOT, XOR with hardware simulations
  - 📋 [Development Log (Bilingual)](./logicGates/bitacora1.1.2.md)
- **Derivative Gates** - Advanced gates built from basic logic gates (NAND)
  - Hardware simulation and software implementation using existing gate combinations

## 🛠 Current Implementation

### Bit Component
The most basic unit of digital information. Our implementation includes:

- **Hardware Simulation**: Transistor-based circuit in Tinkercad
- **Software Abstraction**: JavaScript function that mimics transistor behavior
- **Testing**: Automated switching between states (0/1) via `test/bit/transistorTest.js`

```javascript
import { bit } from "./bit/bit.js";

// Basic usage
const result = bit(1); // Returns 1 (ON)
const result2 = bit(0); // Returns 0 (OFF)
```

### Logic Gates
The fundamental building blocks for logical operations. Complete implementation includes:

- **Hardware Simulations**: Real circuits in Tinkercad for AND, OR, NOT, XOR
- **Modular Implementation**: Individually exportable JavaScript functions built on `bit.js` foundation
- **Hierarchical Architecture**: All gates use `bit()` function for consistent input/output normalization
- **Enhanced Robustness**: Can handle any input type (numbers, strings, objects, null) via `bit()` integration
- **Exhaustive Testing**: Complete truth table coverage with emoji visualization via `test/logicGates/logicGatesTest.js`
- **Technical Analysis**: Documented hardware-software correspondence

```javascript
import { AND, OR, NOT, XOR } from "./logicGates/logicGates.js";

// Basic operations - now built on bit() foundation
const result1 = AND(1, 1); // Returns 1 (🟡) - normalized via bit()
const result2 = OR(0, 1);  // Returns 1 (🟡) - normalized via bit()
const result3 = NOT(1);    // Returns 0 (⚫) - normalized via bit()
const result4 = XOR(1, 0); // Returns 1 (🟡) - normalized via bit()

// Enhanced robustness - handles any input type
const result5 = AND(2, "hello"); // Returns 1 (🟡) - both truthy, normalized to 1
const result6 = OR(0, null);     // Returns 0 (⚫) - both falsy, normalized to 0
```

### Derivative Gates
Advanced logic gates built by combining basic gates. Our implementation includes:

- **Hierarchical Construction**: Built using existing AND, OR, NOT, XOR functions
- **Hardware Correspondence**: Each derivative gate maps to real electronic circuits
- **Consistent Architecture**: Uses the same bit() foundation through gate composition
- **NAND Implementation**: NOT(AND(input1, input2)) - universal gate with complete logic capability

```javascript
import { NAND } from "./derivedGates/derivedGates.js";

// NAND operations - built on existing gates
const result1 = NAND(0, 0); // Returns 1 (🟡) - NOT(AND(0,0)) = NOT(0) = 1
const result2 = NAND(1, 1); // Returns 0 (⚫) - NOT(AND(1,1)) = NOT(1) = 0

// Enhanced robustness inherited from foundation
const result3 = NAND("hello", 42); // Returns 0 (⚫) - both truthy, AND=1, NOT(1)=0
```

### Visualization System
Our testing framework includes a centralized visualization system for consistent output:

- **Centralized Display Functions**: All visual output handled by `test/visualizeLogic/visualizer.js`
- **Emoji-Based Feedback**: Consistent use of 🟡 (HIGH/1) and ⚫ (LOW/0) across all tests
- **Modular Design**: Reusable functions for different gate types and operations
- **Clean Separation**: Logic and presentation concerns properly separated

```javascript
import { bitToEmoji, displayANDTest } from "./test/visualizeLogic/visualizer.js";

// Convert any bit value to emoji
const visual = bitToEmoji(1); // Returns "🟡"

// Display formatted test results
displayANDTest(1, 0, 0); // "The result of AND between 🟡 and ⚫ is: ⚫"
```

## 🧪 Test Architecture

Our project follows a well-organized testing structure that separates concerns and promotes code reusability:

### Benefits of Separated Test Structure
- **Clean Separation**: Production code and tests are clearly separated
- **Centralized Visualization**: All output formatting handled by dedicated visualizer module
- **Scalability**: Easy to add new components and their corresponding tests
- **Maintainability**: Changes to visualization logic only require updates in one place
- **Consistency**: Uniform visual output across all test suites

The testing framework is organized to remain maintainable as the processor grows in complexity.

## 🏗️ Hierarchical Architecture

Our processor follows a well-designed hierarchical architecture where each layer builds upon the previous one:

### Component Hierarchy
```
bit.js (Foundation Layer)
  ↓ provides normalization
logicGates.js (Logic Layer) 
  ↓ provides basic operations
derivedGates.js (Derivative Layer)
  ↓ will provide advanced operations
[Future: ALU] (Arithmetic Layer)
  ↓ will provide calculations
[Future: CPU] (Control Layer)
```

### Benefits of Hierarchical Design
- **Single Source of Truth**: `bit.js` handles all digital state normalization
- **Consistent Behavior**: All components use the same bit representation logic
- **Scalable Foundation**: New components automatically inherit robust input handling
- **Maintainable Code**: Changes to core logic propagate through the hierarchy
- **Robust Error Handling**: Invalid inputs are normalized at the foundation level

### Implementation Details
Each logic gate now uses `bit()` for both input normalization and output consistency:
```javascript
// Example: AND gate implementation
export function AND(input1, input2) {
    const normalizedInput1 = bit(input1);  // Foundation layer normalization
    const normalizedInput2 = bit(input2);  // Foundation layer normalization
    return bit(normalizedInput1 && normalizedInput2);  // Consistent output
}
```

This approach ensures that no matter what type of data is passed to our logic gates (numbers, strings, objects, null, undefined), they will always produce consistent, reliable digital outputs.

## 🚦 Quick Start

```bash
# Clone the repository
git clone https://github.com/caertos/8-BitsProcessor.git
cd 8-BitsProcessor

# Test basic bit functionality
npm run test:bit

# Test logic gates
npm run test:logicGates

# Test derivative gates
npm run test:derivedGates
```

## 🤝 Contributing

This is an educational project documenting the journey of building a processor from scratch. Contributions are welcome!

- 🐛 **Bug Reports**: Found an issue? Open an issue!
- 💡 **Suggestions**: Ideas for improvements are appreciated
- 📖 **Documentation**: Help improve explanations
- 🔬 **Hardware Verification**: Test circuits and provide feedback

See our [Contributing Guide](./CONTRIBUTING.md) for detailed information.

## 📚 Learning Path

1. **Start with Bit**: Understand digital states and transistor switching
2. **Implement Logic Gates**: Master fundamental boolean operations (AND, OR, NOT, XOR)
3. **Build Register**: Combine 8 bits for data storage
4. **Create ALU**: Implement arithmetic and logical operations using gates
5. **Add Control**: Create instruction decoding and execution
6. **Complete CPU**: Integrate all components

## 🔬 Hardware Foundation

Each software component is based on actual electronic circuits:

- **9V Battery** for power supply
- **NPN Transistors** (2N2222) for switching
- **LEDs** for visual feedback
- **Resistors** for current limiting (390Ω recommended for LED safety)

## 🌟 Features

- **Educational Focus**: Each component thoroughly documented
- **Hardware-Software Correspondence**: Every software abstraction maps to real hardware
- **Progressive Complexity**: Build understanding step by step
- **Visual Feedback**: Emoji-based state visualization (🟡/⚫)
- **Bilingual Documentation**: Spanish development logs, English public docs

## 📝 License

MIT License - Feel free to use this for educational purposes!

## 🔗 Resources

- **Development Logs**: See component folders for detailed bitácoras
- **Hardware Calculations**: Current limiting and component selection documented

---

**Author**: Carlos Cochero  
**Status**: 🚧 Work in Progress  
**Last Updated**: October 19, 2025

---

*🏠 [Back to Main README](./README.md) | 🇪🇸 [Ver en Español](./LEEME.md)*