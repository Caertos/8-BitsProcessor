# Estructura del Proyecto Procesador de 8 Bits

Este documento describe la organización y arquitectura del proyecto de simulación del Procesador de 8 Bits.

## 🏗️ Arquitectura del Proyecto

El proyecto sigue una arquitectura jerárquica donde cada capa se construye sobre la anterior:

```
bit.js (Capa Fundamental)
  ↓ normalización de estados digitales
logicGates.js (Capa Lógica Básica)
  ↓ operaciones booleanas (AND, OR, NOT)
derivedGates.js (Capa Lógica Avanzada)
  ↓ combinaciones complejas (XOR, NAND, NOR, XNOR)
[Futuro: ALU] (Capa Aritmética)
  ↓ operaciones aritméticas
[Futuro: CPU] (Capa de Control)
```
### Beneficios del Diseño Jerárquico
- **Única Fuente de Verdad**: `bit.js` maneja toda la normalización de estados digitales
- **Comportamiento Consistente**: Todos los componentes usan la misma lógica de representación de bits
- **Base Escalable**: Nuevos componentes automáticamente heredan manejo robusto de entradas
- **Código Mantenible**: Cambios en la lógica central se propagan a través de la jerarquía
- **Manejo Robusto de Errores**: Entradas inválidas se normalizan en el nivel fundamental

## 📁 Estructura de Directorios

```
8-BitsProcessor/
├── 📄 Configuración
│   ├── package.json              # Scripts NPM y configuración
│   ├── .gitignore               # Exclusiones Git
│   └── LICENSE                  # Licencia MIT
│
├── 📚 Documentación
│   ├── README.md / LEEME.md                # Punto de entrada (ES/EN)
│   ├── Structure.md / Estructura.md        # Estructura del proyecto (ES/EN)
│   ├── CHANGELOG.md                        # Historial de versiones
│   └── CONTRIBUTING.md                     # Guías de contribución
│
├── 🔧 Código Fuente (src/core/)
│   ├── bit/
│   │   ├── bit.js                          # Normalización de estados digitales
│   │   └── bitacora1.1.1-{es,en}.md       # Bitácoras bilingües
│   │
│   ├── logicGates/
│   │   ├── logicGates.js                   # AND, OR, NOT
│   │   └── bitacora1.1.2-{es,en}.md       # Bitácoras bilingües
│   │
│   └── derivedGates/
│       ├── derivedGates.js                 # XOR, NAND, NOR, XNOR
│       └── bitacora1.1.3-{es,en}.md       # Bitácoras bilingües
│
└── 🧪 Pruebas (test/)
    ├── transistorTest.js                   # Pruebas del bit
    ├── logicGatesTest.js                   # Pruebas de compuertas básicas
    ├── derivedGatesTest.js                 # Pruebas de compuertas derivadas
    └── visualizeLogic/
        └── visualizer.js                   # Sistema de visualización 🟡/⚫
```

### Scripts de Prueba
```bash
npm run test:bit           # Prueba componente bit
npm run test:logicGates    # Prueba compuertas básicas
npm run test:derivedGates  # Prueba compuertas derivadas
```

## 🔗 Flujo de Dependencias

```
bit.js
  ↑ usado por
logicGates.js (AND, OR, NOT)
  ↑ usado por
derivedGates.js (XOR, NAND, NOR, XNOR)

visualizer.js
  ↑ usado por
todas las pruebas (transistorTest, logicGatesTest, derivedGatesTest)
```

## 📊 Convenciones del Proyecto

### Archivos de Código
- `*.js` - Módulos JavaScript ES6 con export/import
- Cada componente construye sobre la capa fundamental

### Documentación
- `*-es.md` / `*-en.md` - Documentación bilingüe
- `bitacora*.md` - Bitácoras de desarrollo con simulaciones interactivas de Tinkercad

### Pruebas
- `*Test.js` - Suites automatizadas con visualización emoji (🟡 ALTO/1, ⚫ BAJO/0)
- Verifican funcionalidad y correspondencia con hardware

## 🎯 Principios de Diseño

1. **Arquitectura Jerárquica**: Cada capa hereda robustez de las anteriores
2. **Correspondencia Hardware-Software**: Cada componente mapea a circuitos reales validados con Tinkercad
3. **Visualización Consistente**: Sistema centralizado de emojis (🟡/⚫) para feedback educativo
4. **Documentación Bilingüe**: Completa en español e inglés para mayor alcance educativo

## 🚀 Roadmap de Expansión

### Componentes Planificados
- **Half/Full Adder**: Suma binaria básica
- **ALU**: Operaciones aritméticas usando compuertas existentes
- **Registros**: Almacenamiento de 8 bits
- **Unidad de Control**: Decodificación y ejecución de instrucciones
- **Memoria**: Manejo de direcciones y datos
- **CPU Completa**: Integración de todos los componentes

### Proceso de Expansión
1. Crear directorio con convención de nombres establecida
2. Implementar `.js` usando capas fundamentales
3. Crear simulación interactiva en Tinkercad
4. Desarrollar pruebas en `test/`
5. Agregar bitácoras bilingües
6. Actualizar `package.json` y `Estructura.md`

---

*Documento mantenido junto con el desarrollo del proyecto para reflejar la organización actual.*