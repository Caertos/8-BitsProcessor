# 8-Bit Processor Project Structure

This document describes the complete structure and organization of the 8-Bit Processor simulation project.

## 🏗️ Project Architecture

The project follows a hierarchical architecture where each layer builds upon the previous one:

```
bit.js (Foundation Layer)
  ↓ provides digital state normalization
logicGates.js (Basic Logic Layer)
  ↓ provides fundamental boolean operations
derivedGates.js (Advanced Logic Layer)
  ↓ provides complex gate combinations
[Future: ALU] (Arithmetic Layer)
  ↓ will provide calculations
[Future: CPU] (Control Layer)
```

## 📁 Directory Structure

```
8-BitsProcessor/
├── 📄 Configuration Files
│   ├── package.json              # NPM configuration and scripts
│   ├── .gitignore               # Git ignore patterns
│   └── LICENSE                  # MIT License
│
├── 📚 Documentation
│   ├── README.md                # Main project entry point (bilingual)
│   ├── README-EN.md             # English documentation
│   ├── LEEME.md                 # Spanish documentation
│   ├── Structure.md             # This file - project structure
│   ├── CHANGELOG.md             # Version history
│   └── CONTRIBUTING.md          # Contribution guidelines
│
├── 🔧 Core Components
│   ├── bit/                     # Foundation Layer
│   │   ├── bit.js              # Digital state normalization logic
│   │   ├── bitacora1.1.1.md    # Development log (bilingual)
│   │   └── transistorBit.png    # Hardware simulation diagram
│   │
│   ├── logicGates/              # Basic Logic Layer
│   │   ├── logicGates.js       # AND, OR, NOT, XOR implementations
│   │   ├── bitacora1.1.2.md    # Development log (bilingual)
│   │   ├── AND.png             # AND gate circuit simulation
│   │   ├── OR.png              # OR gate circuit simulation
│   │   ├── NOT.png             # NOT gate circuit simulation
│   │   ├── XOR-OFF.png         # XOR gate OFF state simulation
│   │   └── XOR-ON.png          # XOR gate ON state simulation
│   │
│   └── derivedGates/           # Advanced Logic Layer
│       ├── derivedGates.js    # NAND and other derivative gates
│       └── NAND.png            # NAND gate circuit simulation
│
└── 🧪 Testing Framework
    ├── test/
    │   ├── transistorTest.js       # Bit component tests
    │   ├── logicGatesTest.js       # Basic logic gates tests
    │   ├── derivedGatesTest.js    # Derivative gates tests
    │   └── visualizeLogic/         # Visualization utilities
    │       └── visualizer.js       # Centralized emoji-based output
    │
    └── Test Scripts (package.json)
        ├── npm run test:bit           # → node ./test/transistorTest.js
        ├── npm run test:logicGates    # → node ./test/logicGatesTest.js
        └── npm run test:derivedGates # → node ./test/derivedGatesTest.js
```

## 🔗 Component Dependencies

### Import Relationships
```
bit.js
  ↑ imported by
logicGates.js
  ↑ imported by
derivedGates.js

visualizer.js
  ↑ imported by
transistorTest.js, logicGatesTest.js, derivedGatesTest.js
```

### Functional Hierarchy
- **bit.js**: Provides `bit()` function for consistent digital state normalization
- **logicGates.js**: Uses `bit()` for all input/output normalization in AND, OR, NOT, XOR
- **derivedGates.js**: Uses existing logic gates to create NAND and other complex gates
- **visualizer.js**: Provides consistent emoji-based visualization across all tests

## 📊 File Types and Purposes

### Core Implementation Files
- `*.js` - JavaScript ES6 modules with export/import structure
- Each component uses the foundation layer for consistency

### Documentation Files
- `*.md` - Markdown documentation (English/Spanish)
- `bitacora*.md` - Bilingual development logs with technical details

### Hardware Simulation Files  
- `*.png` - Tinkercad circuit simulations showing real hardware implementations
- Each software component corresponds to actual electronic circuits

### Test Files
- `*Test.js` - Automated test suites with emoji-based visualization
- Tests verify both functionality and hardware correspondence

## 🎯 Design Principles

### 1. Hierarchical Architecture
- Each layer builds upon the previous
- Changes propagate naturally through the dependency chain
- New components automatically inherit robustness from foundation layers

### 2. Hardware-Software Correspondence
- Every software component maps to real electronic circuits
- Tinkercad simulations validate theoretical implementations
- Educational focus on understanding both digital logic and physical reality

### 3. Consistent Visualization
- Centralized `visualizer.js` ensures uniform output across all tests
- 🟡 (HIGH/1) and ⚫ (LOW/0) emoji representation
- Clear, visual feedback for educational purposes

### 4. Scalable Testing Framework
- Organized test structure that grows with the project
- Reusable visualization components
- Clear separation between logic and presentation

### 5. Bilingual Documentation
- Complete documentation in both English and Spanish
- Development logs maintain bilingual format
- Accessible to broader educational audience

## 🚀 Future Expansion

The current structure is designed to accommodate future processor components:

### Planned Components
- **ALU (Arithmetic Logic Unit)**: Will use existing gates for arithmetic operations
- **Registers**: 8-bit storage using bit arrays
- **Control Unit**: Instruction decoding and execution control
- **Memory**: Address handling and data storage
- **Complete CPU**: Integration of all components

### Expansion Points
- Each new component will follow the established hierarchical pattern
- Hardware simulations will accompany each software implementation
- Test framework will expand to cover new functionality
- Documentation will grow to include new architectural layers

## 📝 Maintenance Notes

### When Adding New Components
1. Create new directory following naming convention
2. Implement `.js` file using existing foundation layers
3. Add hardware simulation `.png` files
4. Create corresponding test file
5. Update `package.json` scripts
6. Add bilingual development log
7. Update this Structure.md file

### Dependencies to Maintain
- All logic components must use `bit.js` foundation
- All tests must use `visualizer.js` for output
- All hardware implementations should have Tinkercad simulations
- All documentation should maintain bilingual support

---

*This structure document is maintained alongside project development to ensure accurate representation of the codebase organization.*