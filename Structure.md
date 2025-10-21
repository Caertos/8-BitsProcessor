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
│   │   ├── bit.js               # Bit implementation
│   │   ├── bitacora1.1.1-es.md # Development log (Spanish)
│   │   └── bitacora1.1.1-en.md # Development log (English)
│   │
│   ├── logicGates/              # Basic Logic Layer
│   │   ├── logicGates.js       # AND, OR, NOT implementations
│   │   ├── bitacora1.1.2-es.md # Development log - Basic gates (Spanish)
│   │   └── bitacora1.1.2-en.md # Development log - Basic gates (English)
│   │
│   └── derivedGates/           # Advanced Logic Layer
│       ├── derivedGates.js    # XOR, NAND, NOR, XNOR implementations
│       ├── bitacora1.1.3-es.md # Development log - Derived gates (Spanish)
│       └── bitacora1.1.3-en.md # Development log - Derived gates (English)
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
- **logicGates.js**: Uses `bit()` for all input/output normalization in AND, OR, NOT
- **derivedGates.js**: Uses existing logic gates to create XOR, NAND, NOR, XNOR (complex gates)
- **visualizer.js**: Provides consistent emoji-based visualization across all tests

## 📊 File Types and Purposes

### Core Implementation Files
- `*.js` - JavaScript ES6 modules with export/import structure
- Each component uses the foundation layer for consistency

### Documentation Files
- `*.md` - Markdown documentation (English)
- `*-ES.md` - Spanish documentation files
- `*-EN.md` - English documentation files
- `bitacora*-es.md` - Spanish development logs with technical details and interactive Tinkercad simulations
- `bitacora*-en.md` - English development logs with technical details and interactive Tinkercad simulations

### Hardware Simulation Files  
- Interactive Tinkercad simulations embedded in documentation provide real-time hardware visualization
- All circuit diagrams are now interactive iframes with responsive sizing

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
- Development logs separated by language for better organization
- Language selector pages for easy navigation between versions
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
3. Create interactive Tinkercad simulation
4. Create corresponding test file in `test/` directory
5. Update `package.json` scripts if needed
6. Add bilingual development log (bitacora)
7. Update this Structure.md file

### Dependencies to Maintain
- All logic components must use `bit.js` foundation
- All tests must use `visualizer.js` for output
- All hardware implementations should have Tinkercad simulations
- All documentation should maintain bilingual support with separate language files

---

*This structure document is maintained alongside project development to ensure accurate representation of the codebase organization.*