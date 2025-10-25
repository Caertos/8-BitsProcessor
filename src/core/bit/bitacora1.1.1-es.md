# Guía de Procedimientos: Implementación de Bit

**Fecha:** 19 de octubre de 2025  
**Bitácora:** 1.1.1  
**Proyecto:** 8-Bits Processor

---

## Prefacio: Unidad Fundamental - El Bit

El bit es la unidad básica de información en computación y electrónica. Representa un estado binario, ya sea 0 (apagado) o 1 (encendido). En este proyecto, iniciaremos con el bit como unidad mínima ya que es un concepto fundamental para el entendimiento de los sistemas digitales. Hemos implementado su comportamiento tanto en hardware (simulación) como en software (JavaScript).

## Procedimiento 1: Simulación en Tinkercad

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe width="725" height="453" src="https://www.tinkercad.com/embed/57Rf0VVflk2" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>

### Materiales Necesarios
- 1x Transistor NPN (2N2222 o similar)
- 1x Pulsador
- 2x Resistencias (350Ω y 8.3kΩ)
- 1x LED
- 1x Batería (9V)
- Cables de conexión

### Pasos de Implementación

1. **Configuración del transistor (NPN)**
   - Conectar el emisor del transistor a tierra (GND)
   - Conectar el colector al cátodo del LED
   - Conectar la base al pulsador

2. **Configuración de control**
   - El otro terminal del pulsador se conecta a la resistencia de 1kΩ, que a su vez se conecta a la batería de 9V

3. **Configuración del LED**
   - El ánodo del LED se conecta a través de una resistencia de 470Ω a la batería de 9V

4. **Verificación de estados**
   - **Estado 0:** Señal de control = 0V → LED apagado
   - **Estado 1:** Señal de control = 9V → LED encendido

5. **Pruebas de funcionamiento**
   - Alternar señal de control entre 0V y 9V
   - Verificar respuesta del LED (ON/OFF)
   - Confirmar conmutación limpia sin estados intermedios

### Consideraciones Técnicas

**Cálculo de Corriente del LED:**
Para hacer funcionar el LED de manera segura, se utiliza una resistencia limitadora. Su valor se calcula con la fórmula:

```R = (V_batería - V_LED) / I_LED
```
Donde:
- R = Resistencia (Ω)
- V_batería = Voltaje de la batería (9V)
- V_LED = Voltaje directo del LED (~2V)
- I_LED = Corriente deseada del LED (20mA = 0.02A)

Basándonos en la ley de Ohm, se obtiene:

```R = (9V - 2V) / 0.02A = 350Ω
```

**Cálculo de Resistencia de Base:**
Para limitar la corriente en la base del transistor, se utiliza una resistencia base calculada como:

```R_base = (V_batería - V_BE) / I_B
```
Donde:
- V_BE = Voltaje base-emisor (~0.7V)
- I_B = Corriente base (usualmente 1/10 de la corriente del colector)
Asumiendo I_B = 1mA:

```R_base = (9V - 0.7V) / 0.001A = 8.3kΩ
```

## Procedimiento 2: Abstracción en JavaScript

### Implementación Final (bit.js)

```javascript
export function bit(input = 0) {
    let bitValue = input;
    bitValue = bitValue ? 1 : 0;
    return bitValue;
}
```

### Implementación de Prueba (transistorTest.js)
Simulación de señales alternadas para verificar el comportamiento del bit:

```javascript
import { bit } from "../src/core/bit/bit.js";
import { displayTransistorHeader, displayTransistorSignal } from "./visualizeLogic/visualizer.js";

function transistor() {
  displayTransistorHeader();
  
  for (let i = 0; i < 10; i++) {
    const signal = i % 2;
    const result = bit(signal);
    displayTransistorSignal(signal, result);
  }
}

transistor();
```

### Pasos de Desarrollo

1. **Crear estructura modular**
   - Usar `export` para permitir importación
   - Definir función `bit(input)` con parámetro de entrada

2. **Implementar lógica de transistor**
   - Recibir señal de control como `input`
   - Aplicar normalización binaria: `input ? 1 : 0`
   - Retornar estado del bit (0 o 1)

3. **Crear simulación de transistor**
   - El ciclo `for` alterna señales (0 y 1) usando el operador módulo 
   - Cada iteración envía señal al bit
   - Visualizar resultado con emojis (🟡/⚫)

4. **Validar comportamiento**
   - Ejecutar con `npm run test:bit`
   - Verificar alternancia correcta entre estados
   - Confirmar correspondencia hardware-software

## Resultados Obtenidos

### Hardware (Tinkercad)
✅ **Funcionamiento correcto:** Transistor conmuta entre estados 0 y 1  
✅ **Visualización clara:** LED indica estado actual del bit  
✅ **Control efectivo:** Señal de entrada controla estado de salida  

### Software (JavaScript)
✅ **Función operativa:** Acepta parámetro de entrada y retorna valores binarios  
✅ **Código limpio:** Estructura modular y exportable  
✅ **Simulación correcta:** Transistor envía señales alternadas al bit  
✅ **Visualización funcional:** Emojis indican estado (🟡=1, ⚫=0)  
✅ **Comportamiento verificado:** Alternancia correcta entre estados  

## Conclusiones

### 1. Correspondencia Hardware-Software
La simulación en Tinkercad demuestra el funcionamiento físico real de un bit, mientras que la abstracción en JavaScript proporciona un modelo funcional equivalente.

### 2. Principios Fundamentales Verificados
- **Binaridad:** Solo existen dos estados válidos (0, 1)
- **Conmutación:** Capacidad de cambiar entre estados
- **Determinismo:** Estado de salida predecible basado en entrada

### 3. Limitaciones Superadas
- **Hardware:** Dependiente de componentes físicos y alimentación
- **Software:** ✅ Implementación corregida permite cambio de estado dinámico
- **Simulación:** ✅ Correspondencia funcional entre transistor físico y virtual

### 4. Aprendizajes Clave
- Un bit es la unidad fundamental de información digital
- La abstracción software debe recibir parámetros para simular señales de control
- La visualización ayuda a entender el comportamiento del transistor
- El bucle `for` puede simular efectivamente un generador de señales

## Acciones de Seguimiento

### Completadas ✅
1. **Función JavaScript corregida:** Implementado parámetro de entrada
2. **Simulación funcional:** Transistor virtual alternando estados
3. **Visualización implementada:** Emojis muestran estados del bit
4. **Comportamiento validado:** Correspondencia hardware-software verificada

---
**Estado:** ✅ Implementación completada y funcional | **Archivo de prueba:** `transistorTest.js` | **Próxima revisión:** Implementación de registro de 8 bits
