# Simulador de Procesador de 8 Bits

Una implementación paso a paso de un procesador de 8 bits, desde transistores básicos hasta una simulación completa de CPU.

## 🎯 Objetivo del Proyecto

Este proyecto documenta el viaje de construir una comprensión completa de los procesadores digitales implementando cada componente desde cero, comenzando con transistores básicos.

## 🚀 Progreso Actual

### ✅ Componentes Completados
- **Implementación de Bit** - Simulación básica de transistor con abstracción en JavaScript
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./bit/bitacora1.1.1.md)
- **Compuertas Lógicas** - Implementación completa de AND, OR, NOT, XOR con simulaciones de hardware
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./logicGates/bitacora1.1.2.md)

## 📁 Estructura del Proyecto

```
8-BitsProcessor/
├── bit/                    # Implementación básica de bit
│   ├── bit.js             # Lógica central del bit
│   └── bitacora1.1.1.md   # Bitácora de desarrollo (Bilingüe)
├── logicGates/             # Compuertas lógicas fundamentales
│   ├── logicGates.js      # Implementación de AND, OR, NOT, XOR
│   ├── bitacora1.1.2.md   # Bitácora de desarrollo (Bilingüe)
│   ├── AND.png            # Simulación de compuerta AND en Tinkercad
│   ├── OR.png             # Simulación de compuerta OR en Tinkercad
│   ├── NOT.png            # Simulación de compuerta NOT en Tinkercad
│   ├── XOR-OFF.png        # Simulación XOR - estado OFF
│   └── XOR-ON.png         # Simulación XOR - estado ON
├── test/                   # Suite de pruebas con estructura organizada
│   ├── bit/               # Pruebas del componente bit
│   │   └── transistorTest.js  # Prueba de simulación de hardware
│   ├── logicGates/        # Pruebas de compuertas lógicas
│   │   └── logicGatesTest.js  # Pruebas exhaustivas con visualización
│   └── visualizeLogic/    # Utilidades de visualización centralizadas
│       └── visualizer.js  # Funciones de salida de pruebas basadas en emojis
└── [otros componentes conforme se desarrollen]
```

## 🛠 Implementación Actual

### Componente Bit
La unidad más básica de información digital. Nuestra implementación incluye:

- **Simulación de Hardware**: Circuito basado en transistores en Tinkercad
- **Abstracción de Software**: Función JavaScript que imita el comportamiento del transistor
- **Pruebas**: Conmutación automatizada entre estados (0/1) mediante `test/bit/transistorTest.js`

```javascript
import { bit } from "./bit/bit.js";

// Uso básico
const resultado = bit(1); // Retorna 1 (ENCENDIDO)
const resultado2 = bit(0); // Retorna 0 (APAGADO)
```

### Compuertas Lógicas
Los bloques de construcción fundamentales para operaciones lógicas. Implementación completa incluye:

- **Simulaciones de Hardware**: Circuitos reales en Tinkercad para AND, OR, NOT, XOR
- **Implementación Modular**: Funciones JavaScript exportables individualmente
- **Pruebas Exhaustivas**: Cobertura completa de tablas de verdad con visualización emoji mediante `test/logicGates/logicGatesTest.js`
- **Análisis Técnico**: Correspondencia hardware-software documentada

```javascript
import { AND, OR, NOT, XOR } from "./logicGates/logicGates.js";

// Operaciones básicas
const resultado1 = AND(1, 1); // Retorna 1 (🟡)
const resultado2 = OR(0, 1);  // Retorna 1 (🟡)
const resultado3 = NOT(1);    // Retorna 0 (⚫)
const resultado4 = XOR(1, 0); // Retorna 1 (🟡)
```

### Sistema de Visualización
Nuestro framework de pruebas incluye un sistema de visualización centralizado para salida consistente:

- **Funciones de Visualización Centralizadas**: Toda la salida visual manejada por `test/visualizeLogic/visualizer.js`
- **Retroalimentación Basada en Emojis**: Uso consistente de 🟡 (ALTO/1) y ⚫ (BAJO/0) en todas las pruebas
- **Diseño Modular**: Funciones reutilizables para diferentes tipos de compuertas y operaciones
- **Separación Limpia**: Responsabilidades de lógica y presentación apropiadamente separadas

```javascript
import { bitToEmoji, displayANDTest } from "./test/visualizeLogic/visualizer.js";

// Convertir cualquier valor de bit a emoji
const visual = bitToEmoji(1); // Retorna "🟡"

// Mostrar resultados de prueba formateados
displayANDTest(1, 0, 0); // "The result of AND between 🟡 and ⚫ is: ⚫"
```

## 🧪 Arquitectura de Pruebas

Nuestro proyecto sigue una estructura de pruebas bien organizada que separa responsabilidades y promueve la reutilización de código:

### Beneficios de la Estructura de Pruebas Separada
- **Separación Limpia**: Código de producción y pruebas están claramente separados
- **Visualización Centralizada**: Todo el formateo de salida manejado por módulo visualizador dedicado
- **Escalabilidad**: Fácil agregar nuevos componentes y sus pruebas correspondientes
- **Mantenibilidad**: Cambios en lógica de visualización solo requieren actualizaciones en un lugar
- **Consistencia**: Salida visual uniforme en todas las suites de pruebas

### Organización de Pruebas
```
test/
├── bit/                    # Pruebas específicas de componente
├── logicGates/            # Pruebas de compuertas lógicas
└── visualizeLogic/        # Utilidades de visualización compartidas
```

Esta arquitectura asegura que conforme el procesador crezca en complejidad, el framework de pruebas permanezca organizado y mantenible.

## 🚦 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/caertos/8-BitsProcessor.git
cd 8-BitsProcessor

# Probar funcionalidad básica del bit
npm run test:bit

# Probar compuertas lógicas
npm run test:logicGates
```

## 🤝 Contribuir

Este es un proyecto educativo que documenta el viaje de construir un procesador desde cero. ¡Las contribuciones son bienvenidas!

- 🐛 **Reportes de Errores**: ¿Encontraste un problema? ¡Abre un issue!
- 💡 **Sugerencias**: Se aprecian las ideas para mejoras
- 📖 **Documentación**: Ayuda a mejorar las explicaciones
- 🔬 **Verificación de Hardware**: Prueba los circuitos y proporciona retroalimentación

Ver nuestra [Guía de Contribución](./CONTRIBUTING.md) para información detallada.

## 📚 Ruta de Aprendizaje

1. **Comenzar con Bit**: Entender estados digitales y conmutación de transistores
2. **Implementar Compuertas Lógicas**: Dominar operaciones booleanas fundamentales (AND, OR, NOT, XOR)
3. **Construir Registro**: Combinar 8 bits para almacenamiento de datos
4. **Crear ALU**: Implementar operaciones aritméticas y lógicas usando compuertas
5. **Agregar Control**: Crear decodificación y ejecución de instrucciones
6. **Completar CPU**: Integrar todos los componentes

## 🔬 Base de Hardware

Cada componente de software está basado en circuitos electrónicos reales:

- **Batería de 9V** para suministro de energía
- **Transistores NPN** (2N2222) para conmutación
- **LEDs** para retroalimentación visual
- **Resistencias** para limitación de corriente (390Ω recomendado para seguridad del LED)

## 🌟 Características

- **Enfoque Educativo**: Cada componente documentado exhaustivamente
- **Correspondencia Hardware-Software**: Cada abstracción de software mapea a hardware real
- **Complejidad Progresiva**: Construir entendimiento paso a paso
- **Retroalimentación Visual**: Visualización de estados basada en emojis (🟡/⚫)
- **Documentación Bilingüe**: Bitácoras de desarrollo en español, documentos públicos en inglés

## 📝 Licencia

Licencia MIT - ¡Siéntete libre de usarlo para propósitos educativos!

## 🔗 Recursos

- **Bitácoras de Desarrollo**: Ver carpetas de componentes para bitácoras detalladas
- **Cálculos de Hardware**: Limitación de corriente y selección de componentes documentados

---

**Autor**: Carlos Cochero  
**Estado**: 🚧 Trabajo en Progreso  
**Última Actualización**: 19 de octubre de 2025

---

*🏠 [Volver al README Principal](./README.md) | 🇺🇸 [View in English](./README-EN.md)*