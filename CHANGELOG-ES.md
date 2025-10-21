# Registro de Cambios

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto se adhiere al [Versionado Semántico](https://semver.org/lang/es/).

## [Sin publicar]

### Agregado
- Implementación de compuertas lógicas básicas (AND, OR, NOT)
- Implementación de compuertas lógicas derivadas (XOR, NAND, NOR, XNOR)
- Simulaciones interactivas de Tinkercad para todas las compuertas
- Bitácoras de documentación bilingües (bitácoras 1.1.2 y 1.1.3)
- Suite completa de pruebas para todas las compuertas
- Incrustación responsiva de iframes mediante CSS

### Cambiado
- Se movió XOR del módulo de compuertas básicas al de compuertas derivadas
- Se reemplazaron imágenes PNG estáticas de circuitos con simulaciones interactivas de Tinkercad
- Se reorganizó la estructura de bitácoras (1.1.2 para compuertas básicas, 1.1.3 para compuertas derivadas)
- Se actualizó el dimensionamiento de iframes de atributos inline a diseño responsivo controlado por CSS
- Se reestructuró la navegación con secciones separadas para compuertas básicas y derivadas

### Eliminado
- Imágenes PNG estáticas (AND.png, OR.png, NOT.png, XOR-OFF.png, XOR-ON.png)
- Imagen de referencia transistorBit.png
- Implementación de XOR del módulo logicGates.js

### Implementación Técnica
- `logicGates.js`: Funciones AND, OR, NOT
- `derivedGates.js`: Funciones XOR, NAND, NOR, XNOR
- Propiedad CSS aspect-ratio para dimensionamiento responsivo de iframes (1.45:1)
- Estructura de pruebas modular con visualizer.js para salida con emojis

### Planificado
- Implementación de registro de 8 bits
- Unidad Aritmética Lógica (ALU)
- Unidad de Control
- Sistema de memoria
- Integración completa de CPU

## [1.0.0] - 2025-10-19

### Agregado
- Configuración inicial del proyecto con módulos ES6
- Implementación básica de bit con simulación de transistor
- Documentación de correspondencia hardware-software
- Integración de circuito Tinkercad con batería de 9V
- Representación visual de estados con emojis (🟡/⚫)
- Estructura de documentación trilingüe:
  - README.md principal con selector de idioma
  - README-EN.md (documentación completa en inglés)
  - LEEME.md (documentación completa en español)
- Bitácoras de desarrollo bilingües con enlaces de navegación
- Estructura de proyecto de código abierto (Licencia MIT)
- Directrices de contribución y organización del proyecto

### Implementación Técnica
- Función `bit(input)` para simulación de estado digital
- `transistor.js` para pruebas de componentes aisladas
- Cálculos de seguridad de corriente (resistencia de 390Ω para protección de LED)
- Configuración del sistema de módulos ES6
- Scripts NPM para pruebas (`npm run test:bit`)

### Características de Documentación
- Especificaciones de componentes de hardware y cálculos de seguridad
- Procedimientos de implementación paso a paso
- Bitácoras bilingües con navegación por anclas
- Estructura profesional de README con guías de inicio rápido
- Configuración completa del proyecto para colaboración de código abierto

---

## Leyenda
- **Agregado** para nuevas características
- **Cambiado** para cambios en funcionalidad existente
- **Obsoleto** para características que pronto serán removidas
- **Eliminado** para características ya removidas
- **Corregido** para cualquier corrección de bugs
- **Seguridad** en caso de vulnerabilidades
