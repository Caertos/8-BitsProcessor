# 8-Bit Processor Simulation

A step-by-step implementation of an 8-bit processor, from basic transistors to a complete CPU simulation.

## 🎯 Project Goal

This project documents the journey of building a complete understanding of digital processors by implementing each component from the ground up, starting with basic transistors.

## 🚀 Current Progress

### ✅ Completed Components
- **Bit Implementation** - Basic transistor simulation with JavaScript abstraction
  - 📋 [Development Log (Bilingual)](./bit/bitacora1.1.1.md)

## 📁 Project Structure

```
8-BitsProcessor/
├── bit/                    # Basic bit implementation
│   ├── bit.js             # Core bit logic
│   ├── transistor.js      # Hardware simulation test
│   └── bitacora1.1.1.md   # Development log (Bilingual)
└── [other components as they are developed]
```

## 🛠 Current Implementation

### Bit Component
The most basic unit of digital information. Our implementation includes:

- **Hardware Simulation**: Transistor-based circuit in Tinkercad
- **Software Abstraction**: JavaScript function that mimics transistor behavior
- **Testing**: Automated switching between states (0/1)

```javascript
import { bit } from "./bit/bit.js";

// Basic usage
const result = bit(1); // Returns 1 (ON)
const result2 = bit(0); // Returns 0 (OFF)
```

## 🚦 Quick Start

```bash
# Clone the repository
git clone https://github.com/caertos/8-BitsProcessor.git
cd 8-BitsProcessor

# Test basic bit functionality
npm run test:bit
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
2. **Build Register**: Combine 8 bits for data storage
3. **Create ALU**: Implement arithmetic and logical operations
4. **Add Control**: Create instruction decoding and execution
5. **Complete CPU**: Integrate all components

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