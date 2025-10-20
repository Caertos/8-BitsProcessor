# Estructura del Proyecto Procesador de 8 Bits

Este documento describe la estructura completa y organización del proyecto de simulación del Procesador de 8 Bits.

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura jerárquica donde cada capa se construye sobre la anterior:

```
bit.js (Capa Fundamental)
  ↓ proporciona normalización de estados digitales
logicGates.js (Capa Lógica Básica)
  ↓ proporciona operaciones booleanas fundamentales
derivedGates.js (Capa Lógica Avanzada)
  ↓ proporciona combinaciones complejas de compuertas
[Futuro: ALU] (Capa Aritmética)
  ↓ proporcionará cálculos
[Futuro: CPU] (Capa de Control)
```

## 📁 Estructura de Directorios

```
8-BitsProcessor/
├── 📄 Archivos de Configuración
│   ├── package.json              # Configuración NPM y scripts
│   ├── .gitignore               # Patrones de exclusión Git
│   └── LICENSE                  # Licencia MIT
│
├── 📚 Documentación
│   ├── README.md                # Punto de entrada principal (bilingüe)
│   ├── README-EN.md             # Documentación en inglés
│   ├── LEEME.md                 # Documentación en español
│   ├── Structure.md             # Estructura del proyecto (inglés)
│   ├── Estructura.md            # Este archivo - estructura del proyecto
│   ├── CHANGELOG.md             # Historial de versiones
│   └── CONTRIBUTING.md          # Guías de contribución
│
├── 🔧 Componentes Principales
│   ├── bit/                     # Capa Fundamental
│   │   ├── bit.js              # Lógica de normalización de estados digitales
│   │   ├── bitacora1.1.1.md    # Bitácora de desarrollo (bilingüe)
│   │   └── transistorBit.png    # Diagrama de simulación de hardware
│   │
│   ├── logicGates/              # Capa Lógica Básica
│   │   ├── logicGates.js       # Implementaciones de AND, OR, NOT, XOR
│   │   ├── bitacora1.1.2.md    # Bitácora de desarrollo (bilingüe)
│   │   ├── AND.png             # Simulación de circuito compuerta AND
│   │   ├── OR.png              # Simulación de circuito compuerta OR
│   │   ├── NOT.png             # Simulación de circuito compuerta NOT
│   │   ├── XOR-OFF.png         # Simulación compuerta XOR estado OFF
│   │   └── XOR-ON.png          # Simulación compuerta XOR estado ON
│   │
│   └── derivedGates/           # Capa Lógica Avanzada
│       ├── derivedGates.js    # NAND y otras compuertas derivadas
│       └── NAND.png            # Simulación de circuito compuerta NAND
│
└── 🧪 Framework de Pruebas
    ├── test/
    │   ├── transistorTest.js       # Pruebas del componente bit
    │   ├── logicGatesTest.js       # Pruebas de compuertas lógicas básicas
    │   ├── derivedGatesTest.js    # Pruebas de compuertas derivadas
    │   └── visualizeLogic/         # Utilidades de visualización
    │       └── visualizer.js       # Salida centralizada basada en emojis
    │
    └── Scripts de Prueba (package.json)
        ├── npm run test:bit           # → node ./test/transistorTest.js
        ├── npm run test:logicGates    # → node ./test/logicGatesTest.js
        └── npm run test:derivedGates # → node ./test/derivedGatesTest.js
```

## 🔗 Dependencias de Componentes

### Relaciones de Importación
```
bit.js
  ↑ importado por
logicGates.js
  ↑ importado por
derivedGates.js

visualizer.js
  ↑ importado por
transistorTest.js, logicGatesTest.js, derivedGatesTest.js
```

### Jerarquía Funcional
- **bit.js**: Proporciona la función `bit()` para normalización consistente de estados digitales
- **logicGates.js**: Usa `bit()` para toda la normalización de entrada/salida en AND, OR, NOT, XOR
- **derivedGates.js**: Usa compuertas lógicas existentes para crear NAND y otras compuertas complejas
- **visualizer.js**: Proporciona visualización consistente basada en emojis en todas las pruebas

## 📊 Tipos de Archivos y Propósitos

### Archivos de Implementación Principal
- `*.js` - Módulos JavaScript ES6 con estructura export/import
- Cada componente usa la capa fundamental para consistencia

### Archivos de Documentación
- `*.md` - Documentación Markdown (inglés/español)
- `bitacora*.md` - Bitácoras de desarrollo bilingües con detalles técnicos

### Archivos de Simulación de Hardware
- `*.png` - Simulaciones de circuitos en Tinkercad mostrando implementaciones de hardware reales
- Cada componente de software corresponde a circuitos electrónicos reales

### Archivos de Pruebas
- `*Test.js` - Suites de pruebas automatizadas con visualización basada en emojis
- Las pruebas verifican tanto funcionalidad como correspondencia de hardware

## 🎯 Principios de Diseño

### 1. Arquitectura Jerárquica
- Cada capa se construye sobre la anterior
- Los cambios se propagan naturalmente a través de la cadena de dependencias
- Los nuevos componentes automáticamente heredan robustez de las capas fundamentales

### 2. Correspondencia Hardware-Software
- Cada componente de software mapea a circuitos electrónicos reales
- Las simulaciones de Tinkercad validan implementaciones teóricas
- Enfoque educativo en entender tanto lógica digital como realidad física

### 3. Visualización Consistente
- `visualizer.js` centralizado asegura salida uniforme en todas las pruebas
- Representación emoji 🟡 (ALTO/1) y ⚫ (BAJO/0)
- Retroalimentación visual clara para propósitos educativos

### 4. Framework de Pruebas Escalable
- Estructura de pruebas organizada que crece con el proyecto
- Componentes de visualización reutilizables
- Separación clara entre lógica y presentación

### 5. Documentación Bilingüe
- Documentación completa en inglés y español
- Las bitácoras de desarrollo mantienen formato bilingüe
- Accesible a una audiencia educativa más amplia

## 🚀 Expansión Futura

La estructura actual está diseñada para acomodar futuros componentes del procesador:

### Componentes Planificados
- **ALU (Unidad Aritmético-Lógica)**: Usará compuertas existentes para operaciones aritméticas
- **Registros**: Almacenamiento de 8 bits usando arrays de bits
- **Unidad de Control**: Decodificación de instrucciones y control de ejecución
- **Memoria**: Manejo de direcciones y almacenamiento de datos
- **CPU Completa**: Integración de todos los componentes

### Puntos de Expansión
- Cada nuevo componente seguirá el patrón jerárquico establecido
- Las simulaciones de hardware acompañarán cada implementación de software
- El framework de pruebas se expandirá para cubrir nueva funcionalidad
- La documentación crecerá para incluir nuevas capas arquitectónicas

## 📝 Notas de Mantenimiento

### Al Agregar Nuevos Componentes
1. Crear nuevo directorio siguiendo convención de nomenclatura
2. Implementar archivo `.js` usando capas fundamentales existentes
3. Agregar archivos de simulación de hardware `.png`
4. Crear archivo de prueba correspondiente
5. Actualizar scripts de `package.json`
6. Agregar bitácora de desarrollo bilingüe
7. Actualizar este archivo Estructura.md

### Dependencias a Mantener
- Todos los componentes lógicos deben usar la base `bit.js`
- Todas las pruebas deben usar `visualizer.js` para salida
- Todas las implementaciones de hardware deberían tener simulaciones de Tinkercad
- Toda la documentación debería mantener soporte bilingüe

---

*Este documento de estructura se mantiene junto con el desarrollo del proyecto para asegurar representación precisa de la organización del código base.*