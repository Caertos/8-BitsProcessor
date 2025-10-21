# Guía de Procedimientos: Implementación de Compuertas Derivadas

**Fecha:** 19 de octubre de 2025  
**Versión:** 1.1.3  
**Proyecto:** 8-Bits Processor  

---

## 🇪🇸 ESPAÑOL

## Procedimiento 1: Fundamentos Teóricos de Compuertas Derivadas

### Compuertas Implementadas

#### 1. Compuerta XOR (Exclusive OR)
- **Función:** Retorna 1 cuando las entradas son diferentes
- **Fórmula:** XOR = (A AND NOT B) OR (NOT A AND B)
- **Tabla de verdad:**
  ```
  A | B | A XOR B
  0 | 0 |    0
  0 | 1 |    1
  1 | 0 |    1
  1 | 1 |    0
  ```

#### 2. Compuerta NAND (NOT AND)
- **Función:** Retorna 0 solo cuando ambas entradas son 1 (inverso de AND)
- **Fórmula:** NAND = NOT(A AND B)
- **Tabla de verdad:**
  ```
  A | B | A NAND B
  0 | 0 |    1
  0 | 1 |    1
  1 | 0 |    1
  1 | 1 |    0
  ```
- **Nota:** NAND es una compuerta universal - puede construir cualquier otra compuerta

#### 3. NOT Gate
- **Function:** Inverts the input value
- **Truth table:**
  ```
  A | NOT A
  0 |   1
  1 |   0
  ```

## Procedure 2: Tinkercad Simulation

#### 4. Compuerta XNOR (Exclusive NOR)
- **Función:** Retorna 1 cuando las entradas son iguales (inverso de XOR)
- **Fórmula:** XNOR = NOT(XOR) = (A AND B) OR (NOT A AND NOT B)
- **Tabla de verdad:**
  ```
  A | B | A XNOR B
  0 | 0 |    1
  0 | 1 |    0
  1 | 0 |    0
  1 | 1 |    1
  ```
- **Aplicación:** Comparador de igualdad, detector de bits idénticos

## Procedimiento 2: Simulación en Tinkercad

### Circuito XOR - Compuerta O Exclusiva

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/bdJCsD2OHB7-xor-without-ic?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Configuración del circuito:**
- 2x Interruptores (Switch) como entradas A y B
- 4x Transistores NPN configurados como compuertas lógicas
- 4x resistencias de 1kΩ (bases de transistores)
- 1x Resistencia de 3.3kΩ (limitadora de corriente del LED)
- 1x LED como indicador de salida
- Implementación usando: XOR = (A AND NOT B) OR (NOT A AND B)

**Funcionamiento:**
- **Ambos switches OFF:** LED apagado (0 XOR 0 = 0)
- **Un switch ON:** LED encendido (1 XOR 0 = 1 ó 0 XOR 1 = 1)
- **Ambos switches ON:** LED apagado (1 XOR 1 = 0)

### Circuito NAND - Compuerta NO Y

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/fRsfA3oBoWR-nand?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Configuración del circuito:**
- 2x Interruptores (Switch) como entradas A y B
- 2x Transistores NPN configurados en serie
- 2x Resistencias de 1kΩ (bases de transistores)
- 1x Resistencia limitadora de corriente del LED
- 1x LED como indicador de salida
- Implementación usando: NAND = NOT(AND(A, B))

**Funcionamiento:**
- **Ambos switches OFF:** LED encendido (0 NAND 0 = 1)
- **Un switch ON:** LED encendido (1 NAND 0 = 1 ó 0 NAND 1 = 1)
- **Ambos switches ON:** LED apagado (1 NAND 1 = 0)

### Circuito NOR - Compuerta NO O

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/eeLqetXWyqY-nor?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Configuración del circuito:**
- 2x Interruptores (Switch) como entradas A y B
- 2x Transistores NPN configurados en paralelo con lógica invertida
- 2x Resistencias de 1kΩ (bases de transistores)
- 1x Resistencia limitadora de corriente del LED
- 1x LED como indicador de salida
- Implementación usando: NOR = NOT(OR(A, B))

**Funcionamiento:**
- **Ambos switches OFF:** LED encendido (0 NOR 0 = 1)
- **Un switch ON:** LED apagado (1 NOR 0 = 0 ó 0 NOR 1 = 0)
- **Ambos switches ON:** LED apagado (1 NOR 1 = 0)

### Circuito XNOR - Compuerta NO O Exclusiva

**Configuración del circuito:**
- 2x Interruptores (Switch) como entradas A y B
- 5x Transistores NPN (configuración más compleja que XOR con inversión)
- 5x resistencias de 1kΩ (bases de transistores)
- 1x Resistencia limitadora de corriente del LED
- 1x LED como indicador de salida
- Implementación usando: XNOR = (A AND B) OR (NOT A AND NOT B)

**Funcionamiento:**
- **Ambos switches OFF:** LED encendido (0 XNOR 0 = 1)
- **Un switch ON:** LED apagado (1 XNOR 0 = 0 ó 0 XNOR 1 = 0)
- **Ambos switches ON:** LED encendido (1 XNOR 1 = 1)

**Nota:** XNOR es útil como comparador - el LED se enciende cuando ambas entradas son iguales.

### Análisis de los Experimentos

#### 1. Validación de Tablas de Verdad
✅ **XOR:** Comportamiento verificado - Se activa solo con entradas diferentes  
✅ **NAND:** Comportamiento verificado - Se activa excepto cuando ambas entradas son 1  
✅ **NOR:** Comportamiento verificado - Se activa solo cuando ambas entradas son 0  
⚙️ **XNOR:** Pendiente de implementación física - Comportamiento teórico: se activa con entradas iguales

#### 2. Consideraciones de Hardware
- **Corriente del LED:** Calculada según las resistencias específicas de cada circuito
- **Configuración de transistores:** NPN utilizados como switches digitales
- **Resistencias de base:** 1kΩ para limitar corriente de base y proteger transistores
- **Alimentación:** 9V utilizado para suministro de energía principal
- **Complejidad:** XOR y XNOR requieren más transistores que las compuertas básicas

#### 3. Correspondencia Hardware-Software
- **Estados binarios:** Representación física (LED ON/OFF) corresponde a software (1/0)
- **Lógica booleana:** Circuitos físicos implementan las mismas operaciones que el código
- **Escalabilidad:** Principios aplicables a circuitos integrados más complejos
- **Universalidad:** NAND y NOR pueden construir cualquier otra compuerta lógica

## Procedimiento 3: Implementación en JavaScript

### Implementación de las Compuertas Derivadas

Las compuertas derivadas se implementan usando las compuertas básicas:

```javascript
// XOR usando compuertas básicas
function xor(a, b) {
    // XOR = (A AND NOT B) OR (NOT A AND B)
    return or(and(a, not(b)), and(not(a), b));
}

// NAND como inversión de AND
function nand(a, b) {
    return not(and(a, b));
}

// NOR como inversión de OR
function nor(a, b) {
    return not(or(a, b));
}

// XNOR como inversión de XOR
function xnor(a, b) {
    return not(xor(a, b));
    // Alternativamente: (A AND B) OR (NOT A AND NOT B)
    // return or(and(a, b), and(not(a), not(b)));
}
```

### Casos de Uso Prácticos

#### XOR - Suma Binaria
```javascript
// XOR es fundamental en la suma binaria (bit de suma sin acarreo)
function halfAdder(a, b) {
    const sum = xor(a, b);      // Bit de suma
    const carry = and(a, b);     // Bit de acarreo
    return { sum, carry };
}
```

#### XNOR - Comparador de Igualdad
```javascript
// XNOR detecta cuando dos bits son iguales
function bitsAreEqual(a, b) {
    return xnor(a, b);  // Retorna 1 si a === b
}
```

#### NAND/NOR - Construcción Universal
```javascript
// Ejemplo: NOT usando solo NAND
function notFromNand(a) {
    return nand(a, a);
}

// Ejemplo: AND usando solo NAND
function andFromNand(a, b) {
    return nand(nand(a, b), nand(a, b));
}
```

## Procedimiento 4: Próximos Pasos

### Expansión del Proyecto

1. **Sumadores completos:** Construir medio sumador y sumador completo usando XOR
2. **Multiplexores:** Implementar usando compuertas derivadas
3. **Decodificadores:** Crear circuitos de decodificación
4. **Memoria básica:** Implementar flip-flops usando NAND o NOR
5. **ALU simplificada:** Combinar compuertas para operaciones aritméticas básicas

### Optimizaciones

- Minimizar número de transistores en implementaciones físicas
- Reducir retardo de propagación en cadenas de compuertas
- Implementar versiones con circuitos integrados (74LS series)

---

