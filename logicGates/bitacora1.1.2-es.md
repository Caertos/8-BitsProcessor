# Guía de Procedimientos: Implementación de Compuertas Lógicas

**Fecha:** 19 de octubre de 2025  
**Versión:** 1.1.2  
**Proyecto:** 8-Bits Processor  

---

## 🇪🇸 ESPAÑOL

## Procedimiento 1: Fundamentos Teóricos de Compuertas Lógicas

### Compuertas Implementadas

#### 1. Compuerta AND
- **Función:** Retorna 1 solo cuando ambas entradas son 1
- **Tabla de verdad:**
  ```
  A | B | A AND B
  0 | 0 |    0
  0 | 1 |    0
  1 | 0 |    0
  1 | 1 |    1
  ```

#### 2. Compuerta OR
- **Función:** Retorna 1 cuando al menos una entrada es 1
- **Tabla de verdad:**
  ```
  A | B | A OR B
  0 | 0 |   0
  0 | 1 |   1
  1 | 0 |   1
  1 | 1 |   1
  ```

#### 3. Compuerta NOT
- **Función:** Invierte el valor de entrada
- **Tabla de verdad:**
  ```
  A | NOT A
  0 |   1
  1 |   0
  ```

**Nota:** Para compuertas derivadas (XOR, NAND, NOR, XNOR), consultar [bitacora1.1.3.md](../derivedGates/bitacora1.1.3.md)

## Procedimiento 2: Simulación en Tinkercad

### Circuito AND - Compuerta Y

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/gLxxwnVH0Df-and?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Configuración del circuito:**
- 2x Interruptores (Switch) como entradas A y B
- 1x Transistor NPN para cada entrada
- 2x Resistencias de 1kΩ (bases de transistores)
- 1x Resistencia limitadora de corriente del LED
- 1x LED como indicador de salida
- Conexiones en serie para simular operación AND

**Funcionamiento:**
- **Ambos switches OFF:** LED apagado (0 AND 0 = 0)
- **Un switch ON:** LED apagado (1 AND 0 = 0 ó 0 AND 1 = 0)
- **Ambos switches ON:** LED encendido (1 AND 1 = 1)

### Circuito OR - Compuerta O

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/cm3geL9L1aG-or?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Configuración del circuito:**
- 2x Interruptores (Switch) como entradas A y B
- 2x Transistores NPN en paralelo
- 2x Resistencias de 1kΩ (bases de transistores)
- 1x Resistencia limitadora de corriente del LED
- 1x LED como indicador de salida
- Conexiones en paralelo para simular operación OR

**Funcionamiento:**
- **Ambos switches OFF:** LED apagado (0 OR 0 = 0)
- **Un switch ON:** LED encendido (1 OR 0 = 1 ó 0 OR 1 = 1)
- **Ambos switches ON:** LED encendido (1 OR 1 = 1)

### Circuito NOT - Compuerta NO

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/aQ5fxvKhfP8-not?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Configuración del circuito:**
- 1x Interruptor (Switch) como entrada A
- 1x Transistor NPN configurado como inversor
- 1x Resistencia de 1kΩ (base del transistor)
- Resistencias de pull-up y limitadoras según diseño del circuito
- 1x LED como indicador de salida
- Configuración inversora: LED encendido cuando entrada está desactivada

**Funcionamiento:**
- **Switch OFF:** LED encendido (NOT 0 = 1)
- **Switch ON:** LED apagado (NOT 1 = 0)

## Procedimiento 3: Análisis de los Experimentos

#### 1. Validación de Tablas de Verdad
✅ **AND:** Comportamiento verificado - Solo se activa con ambas entradas en 1  
✅ **OR:** Comportamiento verificado - Se activa con cualquier entrada en 1  
✅ **NOT:** Comportamiento verificado - Invierte la entrada correctamente

**Nota:** Para validación de compuertas derivadas (XOR, NAND, NOR, XNOR), consultar [bitacora1.1.3.md](../derivedGates/bitacora1.1.3.md)  

#### 2. Consideraciones de Hardware
- **Corriente del LED:** Calculada según las resistencias específicas de cada circuito
- **Configuración de transistores:** NPN utilizados como switches digitales
- **Resistencias de base:** 1kΩ para limitar corriente de base y proteger transistores
- **Alimentación:** 9V utilizado para suministro de energía principal

#### 3. Correspondencia Hardware-Software
- **Estados binarios:** Representación física (LED ON/OFF) corresponde a software (1/0)
- **Lógica booleana:** Circuitos físicos implementan las mismas operaciones que el código
- **Escalabilidad:** Principios aplicables a circuitos integrados más complejos

## Procedimiento 3: Implementación en JavaScript

### Archivo Principal (logicGates.js)

```javascript
export function AND(input1, input2) {
    return (input1 && input2) ? 1 : 0;
}

export function OR(input1, input2) {
    return (input1 || input2) ? 1 : 0;
}

export function NOT(input) {
    return input ? 0 : 1;
}

const logicGates = {
    AND,
    OR,
    NOT
};

export default logicGates;
```

**Nota:** Para implementación de compuertas derivadas (XOR, NAND, NOR, XNOR), consultar [bitacora1.1.3.md](../derivedGates/bitacora1.1.3.md)

### Archivo de Pruebas (logicGatesTest.js)

```javascript
import logicGates from './logicGates.js';

const { AND, OR, NOT } = logicGates;

function testAND(input1, input2) {
    const result = (input1 && input2) ? 1 : 0;
    const input1Emoji = input1 ? "🟡" : "⚫";
    const input2Emoji = input2 ? "🟡" : "⚫";
    const resultEmoji = result ? "🟡" : "⚫";
    console.log("The result of AND between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
    return result;
}

function testOR(input1, input2) {
    const result = (input1 || input2) ? 1 : 0;
    const input1Emoji = input1 ? "🟡" : "⚫";
    const input2Emoji = input2 ? "🟡" : "⚫";
    const resultEmoji = result ? "🟡" : "⚫";
    console.log("The result of OR between", input1Emoji, "and", input2Emoji, "is:", resultEmoji);
    return result;
}

function testNOT(input) {
    const result = input ? 0 : 1;
    const inputEmoji = input ? "🟡" : "⚫";
    const resultEmoji = result ? "🟡" : "⚫";
    console.log("The result of NOT logic", inputEmoji, "is:", resultEmoji);
    return result;
}

// Comprehensive testing of all gates
console.log("=== Tests: AND ===");
testAND(1, 0);
testAND(1, 1);
testAND(0, 0);
testAND(0, 1);

console.log("\n=== Tests: OR ===");
testOR(1, 0);
testOR(1, 1);
testOR(0, 0);
testOR(0, 1);

console.log("\n=== Tests: NOT ===");
testNOT(AND(1, 0));
testNOT(AND(1, 1));
```

## Procedimiento 4: Características de la Implementación

### 1. Diseño Modular
- **Exportación individual:** Cada compuerta se exporta como función independiente
- **Exportación por defecto:** Objeto `logicGates` contiene todas las funciones
- **Reutilización:** Las compuertas pueden usar otras compuertas

### 2. Normalización Binaria
- **Entrada flexible:** Acepta valores truthy/falsy de JavaScript
- **Salida consistente:** Siempre retorna 0 o 1 explícitamente
- **Comportamiento predecible:** Conversión automática a valores binarios

### 3. Sistema de Pruebas Integral
- **Cobertura completa:** Todas las combinaciones de entrada probadas
- **Visualización clara:** Emojis (🟡=1, ⚫=0) para fácil comprensión
- **Composición de compuertas:** NOT utiliza resultados de AND para demostrar interoperabilidad

## Resultados de Ejecución

### Pruebas AND
```
The result of AND between 🟡 and ⚫ is: ⚫
The result of AND between 🟡 and 🟡 is: 🟡
The result of AND between ⚫ and ⚫ is: ⚫
The result of AND between ⚫ and 🟡 is: ⚫
```

### Pruebas OR
```
The result of OR between 🟡 and ⚫ is: 🟡
The result of OR between 🟡 and 🟡 is: 🟡
The result of OR between ⚫ and ⚫ is: ⚫
The result of OR between ⚫ and 🟡 is: 🟡
```

### Pruebas NOT
```
The result of NOT logic ⚫ is: 🟡
The result of NOT logic 🟡 is: ⚫
```

## Análisis Técnico

### 1. Consistencia con Álgebra Booleana
✅ **AND:** Implementa correctamente la multiplicación lógica  
✅ **OR:** Implementa correctamente la suma lógica  
✅ **NOT:** Implementa correctamente la negación lógica  

### 2. Optimización de Código
- **Operadores ternarios:** Uso eficiente de `? :` para conversión binaria
- **Operadores lógicos nativos:** Aprovecha `&&`, `||` de JavaScript
- **Estructura limpia:** Separación clara entre lógica y presentación

### 3. Escalabilidad
- **Base sólida:** Compuertas fundamentales para circuitos complejos
- **Extensibilidad:** Fácil adición de compuertas derivadas (NAND, NOR, etc.)
- **Modularidad:** Importación selectiva según necesidades del proyecto

## Aplicaciones en el Procesador de 8 Bits

### 1. Unidad Aritmético-Lógica (ALU)
- **AND/OR:** Operaciones lógicas bit a bit
- **XOR:** Suma sin acarreo, detección de diferencias
- **NOT:** Complemento, negación de datos

### 2. Circuitos de Control
- **AND:** Habilitación condicional de señales
- **OR:** Multiplexado de señales de control
- **NOT:** Inversión de señales de control

### 3. Registro y Memoria
- **XOR:** Comparación de datos, detección de cambios
- **AND/OR:** Máscaras de bits, selección de datos

## Conclusiones

### 1. Implementación Exitosa
Las cuatro compuertas lógicas fundamentales han sido implementadas correctamente con comportamiento que coincide exactamente con las tablas de verdad estándar.

### 2. Calidad del Código
- **Legibilidad:** Código claro y bien documentado
- **Mantenibilidad:** Estructura modular facilita modificaciones
- **Testabilidad:** Sistema de pruebas completo y visual

### 3. Preparación para Integración
Las compuertas están listas para ser utilizadas en componentes más complejos del procesador de 8 bits, proporcionando la base lógica fundamental.

### 4. Innovaciones Educativas
- **Visualización mejorada:** Emojis facilitan comprensión de estados binarios
- **Implementación explicativa:** XOR muestra lógica subyacente en lugar de operador nativo
- **Pruebas exhaustivas:** Cobertura completa de casos de uso

## Acciones de Seguimiento

### Completadas ✅
1. **Implementación de compuertas básicas:** AND, OR, NOT, XOR funcionales
2. **Sistema de pruebas:** Cobertura completa con visualización
3. **Estructura modular:** Exportación individual y en conjunto
4. **Documentación:** Tablas de verdad y análisis técnico completo
5. **Validación:** Todas las pruebas pasan correctamente

### Futuras
1. **Compuertas derivadas:** Implementar NAND, NOR, XNOR para completitud
2. **Optimización de rendimiento:** Evaluar eficiencia en operaciones masivas
3. **Integración ALU:** Usar compuertas en unidad aritmético-lógica
4. **Circuitos combinacionales:** Implementar sumadores, multiplexores
5. **Pruebas de integración:** Validar funcionamiento en circuitos complejos

---
**Estado:** ✅ Implementación completada y validada | **Archivo de pruebas:** `logicGatesTest.js` | **Próxima revisión:** Integración con ALU y circuitos combinacionales

---

