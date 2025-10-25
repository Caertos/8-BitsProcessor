# Guía de Procedimientos: Implementación de Compuertas Derivadas

**Fecha:** 19 de octubre de 2025  
**Bitácora:** 1.1.3  
**Proyecto:** 8-Bits Processor  

---

## 🇪🇸 ESPAÑOL

## Procedimiento 1: Fundamentos Teóricos de Compuertas Derivadas
Las compuertas derivadas son circuitos lógicos construidos a partir de compuertas básicas (AND, OR, NOT). Estas compuertas realizan operaciones booleanas más complejas que son esenciales para circuitos digitales avanzados. En este proyecto, implementaremos cuatro compuertas derivadas: XOR, NAND, NOR y XNOR. Cada compuerta derivada puede expresarse como una combinación de compuertas básicas, demostrando la composición jerárquica de la lógica digital.

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

#### 3. Compuerta NOR (NOT OR)
- **Función:** Retorna 1 solo cuando ambas entradas son 0 (inverso de OR)
- **Fórmula:** NOR = NOT(A OR B)
- **Tabla de verdad:**
  ```
  A | B | A NOR B
  0 | 0 |   1
  0 | 1 |   0
  1 | 0 |   0
  1 | 1 |   0
  ```
- **Nota:** NOR es una compuerta universal - puede construir cualquier otra compuerta

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
La compuerta XOR se implementa usando una combinación de compuertas básicas: XOR = (A AND NOT B) OR (NOT A AND B). Requiere cuatro transistores para simular la lógica de "o exclusivo".

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/bdJCsD2OHB7-xor-without-ic?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Cálculos para resistencias:**
- **Resistencia de las bases de los transistores:**
  - R_base = (V_batería - V_BE) / I_B
  - R_base = (9V - 0.7V) / 0.01A = 830Ω (usar valor comercial cercano: 1kΩ)
- **Resistencia limitadora del LED:**
  - R_LED = (V_batería - V_LED) / I_LED
  - R_LED = (9V - 2V) / 0.02A = 350Ω (usar valor cercano: 3.3kΩ para menor corriente)

**Materiales Necesarios:**
- 2x Interruptores (Switch) como entradas A y B
- 4x Transistores NPN (2N2222 o equivalente)
- 4x Resistencias de 1kΩ (bases de transistores)
- 1x Resistencia de 350Ω (limitadora de corriente del LED)
- 1x LED como indicador de salida
- Batería de 9V
- Protoboard y cables de conexión

**Configuración de los transistores:**
1. **Primer par (A AND NOT B):**
   - Emisor a Tierra (GND)
   - Base a través de resistencia de 1kΩ al switch A
   - Colector a la siguiente etapa
2. **Segundo par (NOT A AND B):**
   - Emisor a Tierra (GND)
   - Base a través de resistencia de 1kΩ al switch B
   - Colector a la siguiente etapa
3. **Etapa OR final:** Combina ambos resultados

**Configuración del LED:**
- Ánodo del LED > VCC Batería (9V)
- Cátodo del LED > Resistencia de 350Ω > Salida del circuito XOR

**Funcionamiento:**
- **Ambos switches OFF:** LED apagado (0 XOR 0 = 0)
- **Un switch ON:** LED encendido (1 XOR 0 = 1 ó 0 XOR 1 = 1)
- **Ambos switches ON:** LED apagado (1 XOR 1 = 0)
- **¿Por qué funciona?:** XOR retorna 1 solo cuando las entradas son diferentes. El circuito implementa (A AND NOT B) OR (NOT A AND B), lo que significa que solo una de las dos condiciones puede ser verdadera a la vez. Si ambas entradas son iguales (ambas 0 o ambas 1), ninguna condición se cumple y el resultado es 0.

### Circuito NAND - Compuerta NO Y
La compuerta NAND se implementa como la inversión de una compuerta AND. Es una compuerta universal, lo que significa que puede usarse para construir cualquier otra compuerta lógica.

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/fRsfA3oBoWR-nand?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Cálculos para resistencias:**
- **Resistencia de las bases de los transistores:**
  - En esta compuerta la energia primero pasa por resistencias y LEDs antes de llegar a los transistores.
  - Para calcular la resistencia base se calcula la resistencia limitadora del LED:
- **Resistencia limitadora del LED:**
  - R_LED = (V_batería - V_LED) / I_LED
  - R_LED = (9V - 2V) / 0.02A = 350Ω
  Estas resistencias aseguran que el LED opere dentro de parámetros seguros, pero también que los transistores funcionen correctamente.
- **Resistencia de la base del transistor número 3:**
  - Obedeciendo el principio de que la energia fluye por el camino de menor resistencia, se debe calcular una resitencia mayor para la base del transistor 3, permitiendo que la energía fluya preferentemente por el bloque AND antes que por el transistor inversor, a eso se le conoce como resistencia pull-down cuyos valores estandar van de 1kΩ a 10kΩ.
  - R_base3 = (V_batería - V_BE) / I_B
  - R_base3 = (9V - 0.7V) / 0.0025A = 3320Ω (usar valor comercial cercano: 3.3kΩ)

**Materiales Necesarios:**
- 2x Interruptores (Switch) como entradas A y B
- 3x Transistores NPN (2 para AND + 1 para NOT)
- 1x Resistencia de 1kΩ (bases de transistores)
- 1x Resistencia de 3.3kΩ (pull-down del transistor 3)
- 2x Resistencia de 350Ω (limitadora de corriente del LED)
- 1x LED como indicador de salida
- Batería de 9V

**Configuración de los transistores:**
1. **Etapa AND (2 transistores en serie):**
   - Primer transistor: Emisor > GND, Base > LED 1 > Resistencia 350Ω > switch A
   - Segundo transistor: Emisor > Colector del primer transistor, Base > LED 2 > Resistencia 350Ω > switch B, Colector > resistencia pull-down de 3.3kΩ > VCC batería (9V)
2. **Etapa NOT (1 transistor inversor):**
   - Tercer transistor: Colector > Resistencia 1kΩ > VCC batería (9V), Base > Resistencia pull-down de 3.3kΩ > VCC batería (9V), Emisor > LED 3 >Z Ground (GND)

**Funcionamiento:**
- **Ambos switches OFF:** LED encendido (0 NAND 0 = 1)
- **Un switch ON:** LED encendido (1 NAND 0 = 1 ó 0 NAND 1 = 1)
- **Ambos switches ON:** LED apagado (1 NAND 1 = 0)
- **¿Por qué funciona?:** NAND es la inversión de AND. Primero, los transistores en serie realizan la operación AND (solo conducen cuando ambos están activos), esto se logra si existe una resistencia pull-down en la base del transistor inversor que permite que la energía fluya preferentemente por el bloque AND antes que por el transistor inversor. Luego, el transistor inversor invierte esta señal. Cuando el AND produce 1 (ambos switches ON), el inversor se activa y desvía la corriente del LED a tierra, apagándolo. En cualquier otro caso, el LED permanece encendido.

### Circuito NOR - Compuerta NO O
La compuerta NOR se implementa como la inversión de una compuerta OR. Al igual que NAND, es una compuerta universal que puede construir cualquier otra compuerta lógica.

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<iframe src="https://www.tinkercad.com/embed/eeLqetXWyqY-nor?editbtn=1" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>

**Cálculos para resistencias:**
- **Resistencia de las bases de los transistores:**
  - Se calcula la resistencia limitadora del LED:
- **Resistencia limitadora del LED:**
  - R_LED = (V_batería - V_LED) / I_LED
  - R_LED = (9V - 2V) / 0.02A = 350Ω
- Estas resistencias aseguran que el LED opere dentro de parámetros seguros, pero también que los transistores funcionen correctamente.
- **Resistencia pull-down del transistor 3:**
  - Para calcular una resistencia pull-down, debes tomar resistencias altas (1kΩ a 10kΩ) para asegurar que la energía fluya preferentemente por el bloque OR antes que por el transistor inversor.
  - R_base3 = (V_batería - V_BE) / I_B
  - R_base3 = (9V - 0.6V) / 0.01A = 830Ω (Puedes usar el valor comercial cercano: 1kΩ)


**Materiales Necesarios:**
- 2x Interruptores (Switch) como entradas A y B
- 3x Transistores NPN (2 para OR + 1 para NOT)
- 1x Resistencia de 1kΩ (pull-down del transistor 3)
- 2x Resistencia de 350Ω
- 3x LEDs como indicadores de salida
- Batería de 9V

**Configuración de los transistores:**
1. **Etapa OR (2 transistores en paralelo):**
   - Ambos transistores(1 y 2) > Emisores a GND, Bases > Respectivos LEDs > Resistencias de 350Ω > switches A y B respectivamente > VCC batería (9V), colectores > Resistencia pull-down de 1kΩ > VCC batería (9V)
   - Tercer transistor: Emisor > Ánodo LED > GND, Base > Resistencia pull-down de 1kΩ , Colector > Resistencia pull-down de 1kΩ > VCC batería (9V)

**Funcionamiento:**
- **Ambos switches OFF:** LED encendido (0 NOR 0 = 1)
- **Un switch ON:** LED apagado (1 NOR 0 = 0 ó 0 NOR 1 = 0)
- **Ambos switches ON:** LED apagado (1 NOR 1 = 0)
- **¿Por qué funciona?:** NOR es la inversión de OR. Los transistores en paralelo realizan la operación OR (conducen cuando cualquiera está activo), prefiriendo esto debido a que la resistencia pull-down en la base del transistor inversor permite que la energía fluya por el bloque OR antes que por el transistor inversor. Cuando el OR produce 1 (cualquiera de los switches ON), el inversor se activa y desvía la corriente del LED a tierra, apagándolo. Solo cuando ambos switches están OFF, el LED permanece encendido.

### Circuito XNOR - Compuerta NO O Exclusiva
**Pendiente de implementación física**

**Nota:** XNOR es útil como comparador - el LED se enciende cuando ambas entradas son iguales.

### Análisis de los Experimentos

#### 1. Validación de Tablas de Verdad
✅ **XOR:** Comportamiento verificado - Se activa solo con entradas diferentes  
✅ **NAND:** Comportamiento verificado - Se activa excepto cuando ambas entradas son 1  
✅ **NOR:** Comportamiento verificado - Se activa solo cuando ambas entradas son 0  
⚙️ **XNOR:** Pendiente de implementación física - Comportamiento teórico: se activa con entradas iguales

#### 2. Consideraciones de Hardware
- **Corriente del LED:** Calculada según las resistencias específicas de cada circuito
- **Configuración de transistores:** Transistores NPN utilizados como switches digitales
- **Resistencias de base:** Resistencias de 1kΩ para limitar la corriente de base y proteger los transistores
- **Alimentación:** Batería de 9V utilizada para el suministro de energía principal
- **Complejidad:** XOR y XNOR requieren más transistores que las compuertas básicas

#### 3. Correspondencia Hardware-Software
- **Estados binarios:** La representación física (LED ON/OFF) corresponde al software (1/0)
- **Lógica booleana:** Los circuitos físicos implementan las mismas operaciones que el código
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

1. **Sumadores completos:** Construir un medio sumador y un sumador completo usando XOR
2. **Multiplexores:** Implementarlos usando compuertas derivadas
3. **Decodificadores:** Crear circuitos de decodificación
4. **Memoria básica:** Implementar flip-flops usando NAND o NOR
5. **ALU simplificada:** Combinar compuertas para operaciones aritméticas básicas

### Optimizaciones

- Minimizar el número de transistores en implementaciones físicas
- Reducir el retardo de propagación en cadenas de compuertas
- Implementar versiones con circuitos integrados (serie 74LS)

---

