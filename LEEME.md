# Simulador de Procesador de 8 Bits

Una implementación paso a paso de un procesador de 8 bits, desde transistores básicos hasta una simulación completa de CPU.

## 🎯 Objetivo del Proyecto

Este proyecto documenta el viaje de construir una comprensión completa de los procesadores digitales implementando cada componente desde cero, comenzando con transistores básicos.

📁 **[Ver Estructura del Proyecto](./Estructura.md)** - Arquitectura detallada y organización de componentes

## 🚀 Progreso Actual

### ✅ Componentes Completados
- **Implementación de Bit** - Simulación básica de transistor con abstracción en JavaScript
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./bit/bitacora1.1.1.md)
- **Compuertas Lógicas Básicas** - Implementación completa de AND, OR, NOT con simulaciones interactivas
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./logicGates/bitacora1.1.2.md)
- **Compuertas Derivadas** - Compuertas avanzadas: XOR, NAND, NOR, XNOR construidas a partir de compuertas básicas
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./derivedGates/bitacora1.1.3.md)
  - Simulaciones interactivas de hardware e implementación de software usando combinaciones de compuertas

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

### Compuertas Lógicas Básicas
Los bloques de construcción fundamentales para operaciones lógicas. Implementación completa incluye:

- **Simulaciones Interactivas**: Circuitos embebidos de Tinkercad para AND, OR, NOT
- **Implementación Modular**: Funciones JavaScript exportables individualmente construidas sobre la base de `bit.js`
- **Arquitectura Jerárquica**: Todas las compuertas usan la función `bit()` para normalización consistente de entradas/salidas
- **Robustez Mejorada**: Pueden manejar cualquier tipo de entrada (números, strings, objetos, null) mediante integración con `bit()`
- **Pruebas Exhaustivas**: Cobertura completa de tablas de verdad con visualización emoji mediante `test/logicGates/logicGatesTest.js`
- **Análisis Técnico**: Correspondencia hardware-software documentada

```javascript
import { AND, OR, NOT } from "./logicGates/logicGates.js";

// Operaciones básicas - construidas sobre la base de bit()
const resultado1 = AND(1, 1); // Retorna 1 (🟡) - normalizado via bit()
const resultado2 = OR(0, 1);  // Retorna 1 (🟡) - normalizado via bit()
const resultado3 = NOT(1);    // Retorna 0 (⚫) - normalizado via bit()

// Robustez mejorada - maneja cualquier tipo de entrada
const resultado4 = AND(2, "hola"); // Retorna 1 (🟡) - ambos truthy, normalizado a 1
const resultado5 = OR(0, null);    // Retorna 0 (⚫) - ambos falsy, normalizado a 0
```

### Compuertas Derivadas
Compuertas lógicas avanzadas construidas combinando compuertas básicas. Nuestra implementación incluye:

- **Construcción Jerárquica**: Construidas usando las funciones existentes AND, OR, NOT
- **Simulaciones Interactivas**: Circuitos embebidos de Tinkercad para XOR, NAND, NOR
- **Correspondencia de Hardware**: Cada compuerta derivada mapea a circuitos electrónicos reales
- **Arquitectura Consistente**: Usa la misma base bit() a través de la composición de compuertas
- **Compuertas Universales**: NAND y NOR pueden construir cualquier otra compuerta lógica

```javascript
import { XOR, NAND, NOR, XNOR } from "./derivedGates/derivedGates.js";

// Operaciones con compuertas derivadas
const resultado1 = XOR(1, 0);  // Retorna 1 (🟡) - entradas diferentes
const resultado2 = NAND(1, 1); // Retorna 0 (⚫) - NOT(AND(1,1))
const resultado3 = NOR(0, 0);  // Retorna 1 (🟡) - NOT(OR(0,0))
const resultado4 = XNOR(1, 1); // Retorna 1 (🟡) - entradas iguales

// Robustez heredada de la base
const resultado5 = NAND("hola", 42); // Retorna 0 (⚫) - ambos truthy, AND=1, NOT(1)=0
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

El framework de pruebas está organizado para permanecer mantenible conforme el procesador crezca en complejidad.

## 🏗️ Arquitectura Jerárquica

Nuestro procesador sigue una arquitectura jerárquica bien diseñada donde cada capa se construye sobre la anterior:

### Jerarquía de Componentes
```
bit.js (Capa Fundamental)
  ↓ proporciona normalización
logicGates.js (Capa Lógica)
  ↓ proporciona operaciones básicas
derivedGates.js (Capa Derivada)
  ↓ proporcionará operaciones avanzadas
[Futuro: ALU] (Capa Aritmética)
  ↓ proporcionará cálculos
[Futuro: CPU] (Capa de Control)
```

### Beneficios del Diseño Jerárquico
- **Única Fuente de Verdad**: `bit.js` maneja toda la normalización de estados digitales
- **Comportamiento Consistente**: Todos los componentes usan la misma lógica de representación de bits
- **Base Escalable**: Nuevos componentes automáticamente heredan manejo robusto de entradas
- **Código Mantenible**: Cambios en la lógica central se propagan a través de la jerarquía
- **Manejo Robusto de Errores**: Entradas inválidas se normalizan en el nivel fundamental

### Detalles de Implementación
Cada compuerta lógica ahora usa `bit()` tanto para normalización de entradas como para consistencia de salidas:
```javascript
// Ejemplo: implementación de compuerta AND
export function AND(input1, input2) {
    const normalizedInput1 = bit(input1);  // Normalización de capa fundamental
    const normalizedInput2 = bit(input2);  // Normalización de capa fundamental
    return bit(normalizedInput1 && normalizedInput2);  // Salida consistente
}
```

Este enfoque asegura que sin importar qué tipo de datos se pasen a nuestras compuertas lógicas (números, strings, objetos, null, undefined), siempre producirán salidas digitales consistentes y confiables.

## 🚦 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/caertos/8-BitsProcessor.git
cd 8-BitsProcessor

# Probar funcionalidad básica del bit
npm run test:bit

# Probar compuertas lógicas
npm run test:logicGates

# Probar compuertas derivadas
npm run test:derivedGates
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