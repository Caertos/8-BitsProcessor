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

**Nota:** Para compuertas derivadas (NAND, NOR, XNOR), consultar [bitacora1.1.3.md](../derivedGates/bitacora1.1.3.md)

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
- **Configuración de transistores:** Transistores NPN utilizados como switches digitales
- **Resistencias de base:** Resistencias de 1kΩ para limitar la corriente de base y proteger los transistores
- **Alimentación:** Batería de 9V utilizada para el suministro de energía principal

#### 3. Correspondencia Hardware-Software
- **Estados binarios:** La representación física (LED ON/OFF) corresponde al software (1/0)
- **Lógica booleana:** Los circuitos físicos implementan las mismas operaciones que el código
- **Escalabilidad:** Principios aplicables a circuitos integrados más complejos

## Procedimiento 4: Implementación en JavaScript

### Archivo Principal (logicGates.js)

La implementación real del repositorio utiliza la función de normalización `bit` y exporta las tres compuertas básicas en `logicGates/logicGates.js`.

```javascript
import { bit } from '../bit/bit.js';

export function AND(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit(normalizedInput1 && normalizedInput2);
}

export function OR(input1, input2) {
    const normalizedInput1 = bit(input1);
    const normalizedInput2 = bit(input2);
    return bit(normalizedInput1 || normalizedInput2);
}

export function NOT(input) {
    const normalizedInput = bit(input);
    return bit(!normalizedInput);
}

const logicGates = {
    AND,
    OR,
    NOT
};

export default logicGates;
```

### Archivo de Pruebas (`test/logicGatesTest.js`)

El archivo de pruebas real se encuentra en `test/logicGatesTest.js` y usa los helpers de visualización en `test/visualizeLogic/visualizer.js`. Importa `../logicGates/logicGates.js` y muestra los resultados de cada compuerta usando emojis.

Esto coincide con el archivo de pruebas presente en el workspace (`/test/logicGatesTest.js`).

## Procedimiento 5: Características de la Implementación

### 1. Diseño Modular
- **Exportación individual:** Cada compuerta se exporta como función independiente
- **Exportación por defecto:** Objeto `logicGates` contiene todas las funciones
- **Reutilización:** Las compuertas pueden usar otras compuertas

### 2. Normalización Binaria
- **Entrada flexible:** Acepta valores truthy/falsy de JavaScript
- **Salida consistente:** Siempre retorna explícitamente 0 o 1
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
- **Operadores ternarios:** Uso eficiente del operador `? :` para conversión binaria
- **Operadores lógicos nativos:** Aprovecha los operadores `&&` y `||` de JavaScript
- **Estructura limpia:** Separación clara entre lógica y presentación

### 3. Escalabilidad
- **Base sólida:** Compuertas fundamentales para circuitos complejos
- **Extensibilidad:** Fácil adición de compuertas derivadas (NAND, NOR, etc.)
- **Modularidad:** Importación selectiva según necesidades del proyecto

## Aplicaciones en el Procesador de 8 Bits

### 1. Unidad Aritmético-Lógica (ALU)
- **AND/OR:** Operaciones lógicas bit a bit
- **NOT:** Complemento, negación de datos

### 2. Circuitos de Control
- **AND:** Habilitación condicional de señales
- **OR:** Multiplexado de señales de control
- **NOT:** Inversión de señales de control

### 3. Registro y Memoria
- **AND/OR:** Máscaras de bits, selección de datos

## Conclusiones

### 1. Implementación Exitosa
Las tres compuertas lógicas fundamentales han sido implementadas correctamente con comportamiento que coincide exactamente con las tablas de verdad estándar.

### 2. Calidad del Código
- **Legibilidad:** Código claro y bien documentado
- **Mantenibilidad:** Estructura modular facilita modificaciones
- **Testabilidad:** Sistema de pruebas completo y visual

### 3. Preparación para Integración
Las compuertas están listas para ser utilizadas en componentes más complejos del procesador de 8 bits, proporcionando la base lógica fundamental.

### 4. Innovaciones Educativas
- **Visualización mejorada:** Los emojis facilitan la comprensión de estados binarios
- **Pruebas exhaustivas:** Cobertura completa de todos los casos de uso

## Acciones de Seguimiento

### Completadas ✅
1. **Implementación de compuertas básicas:** AND, OR, NOT funcionales
2. **Sistema de pruebas:** Cobertura completa con visualización
3. **Estructura modular:** Exportación individual y en conjunto
4. **Documentación:** Tablas de verdad y análisis técnico completo
5. **Validación:** Todas las pruebas pasan correctamente

---
**Estado:** ✅ Implementación completada y validada | **Archivo de pruebas:** `logicGatesTest.js` | **Próxima revisión:** Integración con ALU y circuitos combinacionales

---

