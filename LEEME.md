# Simulador de Procesador de 8 Bits

Una implementación paso a paso de un procesador de 8 bits, desde transistores básicos hasta una simulación completa de CPU.

## 🎯 Objetivo del Proyecto

Este proyecto documenta el viaje de construir una comprensión completa de los procesadores digitales implementando cada componente desde cero, comenzando desde el bit a circuitos basicos con transistores y uso de circuitos integrados.

📁 **[Ver Estructura del Proyecto](./Estructura.md)** - Arquitectura detallada y organización de componentes

## 🚀 Progreso Actual

### ✅ Componentes Completados: Indice
- **Implementación de Bit** - Simulación básica de transistor con abstracción en JavaScript
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./src/core/bit/bitacora1.1.1-es.md)
- **Compuertas Lógicas Básicas** - Implementación completa de AND, OR, NOT con simulaciones interactivas
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./src/core/logicGates/bitacora1.1.2-es.md)
- **Compuertas Derivadas** - Compuertas avanzadas: XOR, NAND, NOR, XNOR construidas a partir de compuertas básicas
  - 📋 [Bitácora de Desarrollo (Bilingüe)](./src/core/derivedGates/bitacora1.1.3-es.md)
  - Simulaciones interactivas de hardware e implementación de software usando combinaciones de compuertas

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
**Primera Actualización:** 19 de octubre de 2025
**Última Actulización:** 24 de octurbe de 2025

---

*🏠 [Volver al README Principal](./README.md) | 🇺🇸 [View in English](./README-EN.md)*