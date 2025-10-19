# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- 8-bit Register implementation
- Arithmetic Logic Unit (ALU)
- Control Unit
- Memory system
- Complete CPU integration

## [1.0.0] - 2025-10-19

### Added
- Initial project setup with ES6 modules
- Basic bit implementation with transistor simulation
- Hardware-software correspondence documentation
- Tinkercad circuit integration with 9V battery
- Visual state representation with emojis (🟡/⚫)
- Trilingual documentation structure:
  - Main README.md with language selector
  - README-EN.md (complete English documentation)
  - LEEME.md (complete Spanish documentation)
- Bilingual development logs (bitácoras) with navigation links
- Open source project structure (MIT License)
- Contributing guidelines and project organization

### Technical Implementation
- `bit(input)` function for digital state simulation
- `transistor.js` for isolated component testing
- Current safety calculations (390Ω resistor for LED protection)
- ES6 module system configuration
- NPM scripts for testing (`npm run test:bit`)

### Documentation Features
- Hardware component specifications and safety calculations
- Step-by-step implementation procedures
- Bilingual bitácoras with anchor navigation
- Professional README structure with quick start guides
- Complete project setup for open source collaboration

---

## Legend
- **Added** for new features
- **Changed** for changes in existing functionality  
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities