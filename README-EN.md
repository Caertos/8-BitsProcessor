# 8-Bit Processor Simulation

A step-by-step implementation of an 8-bit processor, from basic transistors to a complete CPU simulation.

## 🎯 Project Goal

This project documents the journey of building a complete understanding of digital processors by implementing each component from the ground up, starting with basic transistors.

## 🚀 Current Progress

### ✅ Completed Components
- **Bit Implementation** - Basic transistor simulation with JavaScript abstraction
  - 📋 [Development Log (Bilingual)](./bit/bitacora1.1.1.md)
- **Logic Gates** - Complete implementation of AND, OR, NOT, XOR with hardware simulations
  - 📋 [Development Log (Bilingual)](./logicGates/bitacora1.1.2.md)

## 📁 Project Structure

```
8-BitsProcessor/
├── bit/                    # Basic bit implementation
│   ├── bit.js             # Core bit logic
│   └── bitacora1.1.1.md   # Development log (Bilingual)
├── logicGates/             # Fundamental logic gates
│   ├── logicGates.js      # Implementation of AND, OR, NOT, XOR
│   ├── bitacora1.1.2.md   # Development log (Bilingual)
│   ├── AND.png            # AND gate simulation in Tinkercad
│   ├── OR.png             # OR gate simulation in Tinkercad
│   ├── NOT.png            # NOT gate simulation in Tinkercad
│   ├── XOR-OFF.png        # XOR simulation - OFF state
│   └── XOR-ON.png         # XOR simulation - ON state
├── test/                   # Test suite with organized structure
│   ├── bit/               # Bit component tests
│   │   └── transistorTest.js  # Hardware simulation test
│   ├── logicGates/        # Logic gates tests
│   │   └── logicGatesTest.js  # Exhaustive tests with visualization
│   └── visualizeLogic/    # Centralized visualization utilities
│       └── visualizer.js  # Emoji-based test output functions
└── [other components as they are developed]
```

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
- **Modular Implementation**: Individually exportable JavaScript functions
- **Exhaustive Testing**: Complete truth table coverage with emoji visualization via `test/logicGates/logicGatesTest.js`
- **Technical Analysis**: Documented hardware-software correspondence

```javascript
import { AND, OR, NOT, XOR } from "./logicGates/logicGates.js";

// Basic operations
const result1 = AND(1, 1); // Returns 1 (🟡)
const result2 = OR(0, 1);  // Returns 1 (🟡)
const result3 = NOT(1);    // Returns 0 (⚫)
const result4 = XOR(1, 0); // Returns 1 (🟡)
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

### Test Organization
```
test/
├── bit/                    # Component-specific tests
├── logicGates/            # Logic gate tests
└── visualizeLogic/        # Shared visualization utilities
```

This architecture ensures that as the processor grows in complexity, the testing framework remains organized and maintainable.

## 🚦 Quick Start

```bash
# Clone the repository
git clone https://github.com/caertos/8-BitsProcessor.git
cd 8-BitsProcessor

# Test basic bit functionality
npm run test:bit

# Test logic gates
npm run test:logicGates
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