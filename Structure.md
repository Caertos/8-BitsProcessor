# 8-Bit Processor Project Structure

This document describes the organization and architecture of the 8-Bit Processor simulation project.

## 🏗️ Project Architecture

The project follows a hierarchical architecture where each layer builds upon the previous one:

```
bit.js (Foundation Layer)
  ↓ digital state normalization
logicGates.js (Basic Logic Layer)
  ↓ boolean operations (AND, OR, NOT)
derivedGates.js (Advanced Logic Layer)
  ↓ complex combinations (XOR, NAND, NOR, XNOR)
[Future: ALU] (Arithmetic Layer)
  ↓ arithmetic operations
[Future: CPU] (Control Layer)
```

### Benefits of Hierarchical Design
- **Single Source of Truth**: `bit.js` handles all digital state normalization
- **Consistent Behavior**: All components use the same bit representation logic
- **Scalable Foundation**: New components automatically inherit robust input handling
- **Maintainable Code**: Changes to core logic propagate through the hierarchy
- **Robust Error Handling**: Invalid inputs are normalized at the foundation level

## 📁 Directory Structure

```
8-BitsProcessor/
├── 📄 Configuration
│   ├── package.json              # NPM scripts and configuration
│   ├── .gitignore               # Git exclusions
│   └── LICENSE                  # MIT License
│
├── 📚 Documentation
│   ├── README.md / LEEME.md                # Entry point (EN/ES)
│   ├── Structure.md / Estructura.md        # Project structure (EN/ES)
│   ├── CHANGELOG.md                        # Version history
│   └── CONTRIBUTING.md                     # Contribution guidelines
│
├── 🔧 Source Code (src/core/)
│   ├── bit/
│   │   ├── bit.js                          # Digital state normalization
│   │   └── bitacora1.1.1-{es,en}.md       # Bilingual logs
│   │
│   ├── logicGates/
│   │   ├── logicGates.js                   # AND, OR, NOT
│   │   └── bitacora1.1.2-{es,en}.md       # Bilingual logs
│   │
│   └── derivedGates/
│       ├── derivedGates.js                 # XOR, NAND, NOR, XNOR
│       └── bitacora1.1.3-{es,en}.md       # Bilingual logs
│
└── 🧪 Tests (test/)
    ├── transistorTest.js                   # Bit tests
    ├── logicGatesTest.js                   # Basic gates tests
    ├── derivedGatesTest.js                 # Derived gates tests
    └── visualizeLogic/
        └── visualizer.js                   # Visualization system 🟡/⚫
```

### Test Scripts
```bash
npm run test:bit           # Test bit component
npm run test:logicGates    # Test basic gates
npm run test:derivedGates  # Test derived gates
```

## 🔗 Dependency Flow

```
bit.js
  ↑ used by
logicGates.js (AND, OR, NOT)
  ↑ used by
derivedGates.js (XOR, NAND, NOR, XNOR)

visualizer.js
  ↑ used by
all tests (transistorTest, logicGatesTest, derivedGatesTest)
```

## 📊 Project Conventions

### Code Files
- `*.js` - JavaScript ES6 modules with export/import
- Each component builds on the foundation layer

### Documentation
- `*-es.md` / `*-en.md` - Bilingual documentation
- `bitacora*.md` - Development logs with interactive Tinkercad simulations

### Tests
- `*Test.js` - Automated suites with emoji visualization (🟡 HIGH/1, ⚫ LOW/0)
- Verify functionality and hardware correspondence

## 🎯 Design Principles

1. **Hierarchical Architecture**: Each layer inherits robustness from previous ones
2. **Hardware-Software Correspondence**: Each component maps to real circuits validated with Tinkercad
3. **Consistent Visualization**: Centralized emoji system (🟡/⚫) for educational feedback
4. **Bilingual Documentation**: Complete in Spanish and English for broader educational reach

## 🚀 Expansion Roadmap

### Planned Components
- **Half/Full Adder**: Basic binary addition
- **ALU**: Arithmetic operations using existing gates
- **Registers**: 8-bit storage
- **Control Unit**: Instruction decoding and execution
- **Memory**: Address and data handling
- **Complete CPU**: Integration of all components

### Expansion Process
1. Create directory following established naming convention
2. Implement `.js` using foundation layers
3. Create interactive Tinkercad simulation
4. Develop tests in `test/`
5. Add bilingual logs
6. Update `package.json` and `Structure.md`

---

*Document maintained alongside project development to reflect current organization.*