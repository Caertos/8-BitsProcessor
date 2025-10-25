# Guía de Procedimientos: Implementación de Compuertas Lógicas

**Fecha:** 19 de octubre de 2025  
**Bitácora:** 1.1.2  
**Proyecto:** 8-Bits Processor  

---

## 🇪🇸 ESPAÑOL

## Procedimiento 1: Fundamentos Teóricos de Compuertas Lógicas
Las compuertas lógicas son los bloques fundamentales de los circuitos digitales. Realizan operaciones booleanas básicas que son esenciales para el procesamiento de datos en sistemas digitales. En este proyecto, implementaremos las tres compuertas lógicas básicas: AND, OR y NOT. Basada en la lógica matemática de Boole, cada compuerta tiene una función específica definida por su tabla de verdad.

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

## Procedimiento 2: Simulación en Tinkercad

### Circuito AND - Compuerta Y
La compuerta AND se implementa utilizando transistores NPN en configuración en serie, donde ambos transistores deben estar en estado ON para que el LED se encienda.

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/gLxxwnVH0Df-and?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Cálculos para resistencias:**
- **Resistencia las bases de los transistores:**
  - R_base = (V_batería - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (usar valor comercial cercano: 1kΩ)

**Materiales Necesarios:**
- 2x Interruptores (Switch) como entradas A y B
- 2x Transistor NPN (uno para cada entrada)
- 2x Resistencias de 1kΩ (bases de transistores)
- 1x Resistencia de 350Ω limitadora de corriente del LED
- 1x LED como indicador de salida
- Conexiones en serie para simular operación AND

**Configuración de los transistores (NPN):**
- Transistor 1: Base > Resistencia A 1kΩ > Interruptor A
- Transistor 2: Base > Resistencia B 1kΩ > Interruptor B
- Emisor de transistor 1 > Colector de transistor 2
- Emisor de transistor 2 > Tierra (GND)
- Colector de transistor 1 > Resistencia de 350Ω

**Configuración del LED:**
- Ánodo del LED > VCC Batería (9V)
- Cátodo del LED > Resistencia de 350Ω > Colector del transistor 1

**Configuración de los controles:**
- Interruptor A > resistencia de 1kΩ > Base del transistor 1
- Interruptor B > resistencia de 1kΩ > Base del transistor 2

**Funcionamiento:**
- **Ambos switches OFF:** LED apagado (0 AND 0 = 0)
- **Un switch ON:** LED apagado (1 AND 0 = 0 ó 0 AND 1 = 0)
- **Ambos switches ON:** LED encendido (1 AND 1 = 1)
- **¿Por qué funciona?:** Solo cuando ambos interruptores están encendidos, ya que es un circuito en serie. Si el transistor 1 no permite que fluya la energía, esta no llega al transistor 2, pero si el transistor 2 está apagado tampoco permite que la energía fluya hacia GND. Solo cuando ambos transistores se activan (ON) la corriente puede fluir a través de ellos hacia tierra (GND), encendiendo el LED.

### Circuito OR - Compuerta O
La compuerta OR se implementa utilizando transistores NPN en configuración en paralelo, donde cualquiera de los transistores puede estar en estado ON para que el LED se encienda.

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/cm3geL9L1aG-or?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Cálculos para resistencias:**
- **Resistencia las bases de los transistores:**
  - R_base = (V_batería - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (usar valor comercial cercano: 1kΩ)

**Materiales Necesarios:**
- 2x Interruptores (Switch) como entradas A y B
- 2x Transistor NPN (uno para cada entrada)
- 2x Resistencias de 1kΩ (bases de transistores)
- 1x Resistencia de 350Ω limitadora de corriente del LED
- 1x LED como indicador de salida
- Conexiones en paralelo para simular operación OR

**Configuración de los transistores (NPN):**
- Transistor 1: Base > Resistencia A 1kΩ > Interruptor A
- Transistor 2: Base > Resistencia B 1kΩ > Interruptor B
- Emisor de transistor 1 > Tierra (GND)
- Emisor de transistor 2 > Tierra (GND)
- Colector de transistor 1 > Resistencia de 350Ω
- Colector de transistor 2 > Resistencia de 350Ω (compartida)

**Configuración del LED:**
- Ánodo del LED > VCC Batería (9V)
- Cátodo del LED > Resistencia de 350Ω > Colectores de los transistores (conexión paralela)

**Configuración de los controles:**
- Interruptor A > resistencia de 1kΩ > Base del transistor 1
- Interruptor B > resistencia de 1kΩ > Base del transistor 2

**Funcionamiento:**
- **Ambos switches OFF:** LED apagado (0 OR 0 = 0)
- **Un switch ON:** LED encendido (1 OR 0 = 1 ó 0 OR 1 = 1)
- **Ambos switches ON:** LED encendido (1 OR 1 = 1)
- **¿Por qué funciona?:** Cuando ambos interruptores están apagados, ambos transistores están en estado OFF, impidiendo que la corriente fluya a través del LED, manteniéndolo apagado. Cuando cualquiera de los interruptores está encendido, el transistor correspondiente se activa (ON), haciendo que la corriente pueda fluir a través de él hacia GND, permitiendo que encienda el LED.

### Circuito NOT - Compuerta NO
La compuerta NOT se implementa utilizando un transistor NPN en configuración inversora, donde el transistor funciona como un interruptor que invierte la señal de entrada.

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/aQ5fxvKhfP8-not?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Cálculos para resistencias:**
- **Resistencia de la base del transistor:**
  - R_base = (V_batería - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (usar valor comercial cercano: 1kΩ)
- **Resistencia pull-up del LED:**
  - R_pullup = (V_batería - V_LED) / I_LED
  - R_pullup = (9V - 2V) / 0.02A = 350Ω

**Materiales Necesarios:**
- 1x Interruptor (Switch) como entrada A
- 1x Transistor NPN configurado como inversor
- 1x Resistencia de 1kΩ (base del transistor)
- 1x Resistencia de 350Ω (pull-up del LED)
- 1x LED como indicador de salida
- Configuración inversora: LED encendido cuando entrada está desactivada

**Configuración del transistor (NPN):**
- Transistor: Base > Resistencia 1kΩ > Interruptor A
- Emisor del transistor > Tierra (GND)
- Colector del transistor > Cátodo del LED

**Configuración del LED:**
- Ánodo del LED > Resistencia de 350Ω > VCC Batería (9V)
- Cátodo del LED > Colector del transistor

**Configuración del control:**
- Interruptor A > resistencia de 1kΩ > Base del transistor

**Funcionamiento:**
- **Switch OFF:** LED encendido (NOT 0 = 1) - Transistor OFF, corriente fluye por LED
- **Switch ON:** LED apagado (NOT 1 = 0) - Transistor ON, corriente desviada a tierra
- **¿Por qué funciona?:** Basándonos en el hecho de que la energía fluye por el camino de menor resistencia. Cuando el interruptor está apagado, el transistor está en estado OFF, permitiendo que la corriente fluya a través del LED, encendiéndolo. Cuando el interruptor está encendido, el transistor se activa (ON), creando un camino directo a tierra (GND) y desviando la corriente del LED, apagándolo.

## Procedimiento 3: Análisis de los Experimentos

#### 1. Validación de Tablas de Verdad
✅ **AND:** Comportamiento verificado - Solo se activa con ambas entradas en 1  
✅ **OR:** Comportamiento verificado - Se activa con cualquier entrada en 1  
✅ **NOT:** Comportamiento verificado - Invierte la entrada correctamente

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
The result of AND between ⚫ and ⚫ is: ⚫
The result of AND between ⚫ and 🟡 is: ⚫
The result of AND between 🟡 and ⚫ is: ⚫
The result of AND between 🟡 and 🟡 is: 🟡
```

### Pruebas OR
```
The result of OR between ⚫ and ⚫ is: ⚫
The result of OR between ⚫ and 🟡 is: 🟡
The result of OR between 🟡 and ⚫ is: 🟡
The result of OR between 🟡 and 🟡 is: 🟡
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

