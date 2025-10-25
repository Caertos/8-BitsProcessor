# 8-Bit Processor Simulation

A step-by-step implementation of an 8-bit processor, from basic transistors to a complete CPU simulation.

## 🎯 Project Goal

This project documents the journey of building a complete understanding of digital processors by implementing each component from the ground up, starting with the bit through basic circuits with transistors and integrated circuits.

📁 **[View Project Structure](./Structure.md)** - Detailed architecture and component organization

## 🚀 Current Progress

### ✅ Completed Components: Index
- **Bit Implementation** - Basic transistor simulation with JavaScript abstraction
  - 📋 [Development Log (Bilingual)](./src/core/bit/bitacora1.1.1-en.md)
- **Basic Logic Gates** - Complete implementation of AND, OR, NOT with interactive simulations
  - 📋 [Development Log (Bilingual)](./src/core/logicGates/bitacora1.1.2-en.md)
- **Derived Gates** - Advanced gates: XOR, NAND, NOR, XNOR built from basic gates
  - 📋 [Development Log (Bilingual)](./src/core/derivedGates/bitacora1.1.3-en.md)
  - Interactive hardware simulations and software implementation using gate combinations

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
**First Update:** October 19, 2025
**Last Updated:** October 24, 2025

---

*🏠 [Back to Main README](./README.md) | 🇪🇸 [Ver en Español](./LEEME.md)*