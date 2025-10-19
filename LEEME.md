# Simulador de Procesador de 8 Bits

Una implementación paso a paso de un procesador de 8 bits, desde transistores básicos hasta una simulación completa de CPU.

## 🎯 Objetivo del Proyecto

Este proyecto documenta el viaje de construir una comprensión completa de los procesadores digitales implementando cada componente desde cero, comenzando con transistores básicos.

## 🚀 Progreso Actual

### ✅ Componentes Completados
- **Implementación de Bit** - Simulación básica de transistor con abstracción en JavaScript
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./bit/bitacora1.1.1.md)

## 📁 Estructura del Proyecto

```
8-BitsProcessor/
├── bit/                    # Implementación básica de bit
│   ├── bit.js             # Lógica central del bit
│   ├── transistor.js      # Prueba de simulación de hardware
│   └── bitacora1.1.1.md   # Bitácora de desarrollo (Bilingüe)
└── [otros componentes conforme se desarrollen]
```

## 🛠 Implementación Actual

### Componente Bit
La unidad más básica de información digital. Nuestra implementación incluye:

- **Simulación de Hardware**: Circuito basado en transistores en Tinkercad
- **Abstracción de Software**: Función JavaScript que imita el comportamiento del transistor
- **Pruebas**: Conmutación automatizada entre estados (0/1)

```javascript
import { bit } from "./bit/bit.js";

// Uso básico
const resultado = bit(1); // Retorna 1 (ENCENDIDO)
const resultado2 = bit(0); // Retorna 0 (APAGADO)
```

## 🚦 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/caertos/8-BitsProcessor.git
cd 8-BitsProcessor

# Probar funcionalidad básica del bit
npm run test:bit
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
2. **Construir Registro**: Combinar 8 bits para almacenamiento de datos
3. **Crear ALU**: Implementar operaciones aritméticas y lógicas
4. **Agregar Control**: Crear decodificación y ejecución de instrucciones
5. **Completar CPU**: Integrar todos los componentes

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