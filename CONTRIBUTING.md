# Contributing to 8-Bit Processor Simulation

Thank you for your interest in contributing to this educational project! 🎉

## 🎯 Project Vision

This project is designed to teach digital computer architecture by building a processor from the ground up. Every component has both a hardware implementation (Tinkercad) and software abstraction (JavaScript).

## 🤝 How to Contribute

### 1. 🐛 Bug Reports
- Found a bug in the simulation? Open an issue!
- Include steps to reproduce
- Mention expected vs actual behavior

### 2. 💡 Feature Suggestions
- Ideas for new components or improvements
- Educational enhancements
- Better visualization methods

### 3. 🔬 Hardware Verification
- Test the Tinkercad circuits
- Verify component calculations
- Suggest component alternatives

### 4. 📖 Documentation
- Improve explanations
- Fix typos or unclear sections
- Add examples or tutorials

### 5. 🧪 Testing
- Add test cases for components
- Verify edge cases
- Performance testing

## 📋 Development Guidelines

### Code Style
- Use clear, descriptive variable names
- Comment complex logic
- Follow existing patterns in the codebase
- ES6+ JavaScript features preferred

### Documentation
- **English**: For public-facing docs (README, CONTRIBUTING)
- **Spanish**: For detailed development logs (bitácoras)
- Include both hardware and software explanations

### File Organization
```
component/
├── component.js          # Core implementation
├── bitacora-X.X.X.md    # Development log (bilingual: Spanish/English)
test/
├── componentTest.js      # Component testing
└── visualizeLogic/
    └── visualizer.js     # Test output formatting
```

**Current Structure:**
- `bit/`: Fundamental bit implementation
- `logicGates/`: Basic logic gates (AND, OR, NOT)
- `derivedGates/`: Derived gates (XOR, NAND, NOR, XNOR)
- `test/`: All test files with shared visualizer

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/8-BitsProcessor.git
   cd 8-BitsProcessor
   ```
3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**
5. **Test your changes**
   ```bash
   node component/test-component.js
   ```
6. **Commit and push**
   ```bash
   git commit -m "Add: description of your changes"
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request**

## 🎓 Educational Focus

Remember that this project prioritizes learning over performance:

- **Clarity over optimization**: Code should be easy to understand
- **Step-by-step progression**: Each component builds on previous ones
- **Hardware correlation**: Software should map to real circuits
- **Visual feedback**: Use emojis and clear output for state visualization

## 📝 Pull Request Guidelines

### Title Format
- `Add: new feature description`
- `Fix: bug description`
- `Docs: documentation update`
- `Test: testing improvements`

### Description Should Include
- What changes were made
- Why the changes were needed
- How to test the changes
- Any breaking changes
- Screenshots/output examples (if applicable)

## 🏷️ Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to docs
- `good first issue` - Good for newcomers
- `hardware` - Related to circuit design
- `software` - Related to JavaScript implementation
- `question` - Further information is requested

## ⚡ Quick Development Tips

### Testing Components
```bash
# Test individual components
node bit/transistor.js
node register/test-register.js  # (when available)

# Run all tests
npm test  # (when test suite is ready)
```

### Hardware Simulation
- Use Tinkercad for circuit design
- Include component values in documentation
- Calculate current/voltage requirements
- Provide circuit screenshots or links

## 🤔 Questions?

- Open a discussion in the Issues tab
- Check existing documentation first
- Be specific about your question
- Include relevant code/circuit information

## 🙏 Recognition

All contributors will be recognized in the project documentation. Thank you for helping make this educational resource better!

---

**Happy coding and learning!** 🚀