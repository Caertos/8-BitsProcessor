# Guía de Procedimientos: Implementación de Bit

**Fecha:** 19 de octubre de 2025  
**Versión:** 1.1.1  
**Proyecto:** 8-Bits Processor  

---

## Procedimiento 1: Simulación en Tinkercad

**🔗 Simulación Interactiva:**
<div class="embed-simulation">
<!-- Embed en modo vista (solo visualización). Evitamos parámetros de edición que requieren sesión/login. -->
<iframe width="725" height="453" src="https://www.tinkercad.com/embed/57Rf0VVflk2" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" title="Simulación Tinkercad — vista"></iframe>
</div>

<p class="embed-fallback"><strong>Nota:</strong> Esta incrustación está configurada para visualización pública. Si necesitas abrir el editor (editar la simulación) se requiere iniciar sesión en Tinkercad — usa el enlace de abajo para abrir el editor en una nueva pestaña.</p>

<p class="embed-fallback"><a href="https://www.tinkercad.com/embed/57Rf0VVflk2?editbtn=1" target="_blank" rel="noopener noreferrer">Abrir/Editar en Tinkercad (requiere iniciar sesión)</a></p>

### Materiales Necesarios
- 1x Transistor NPN (2N2222 o similar)
- 2x Resistencias (220Ω y 1kΩ)
- 1x LED
- 1x Batería (9V)
- Cables de conexión

### Pasos de Implementación

1. **Configuración del circuito base**
   - Conectar el emisor del transistor a tierra (GND)
   - Conectar el colector a través de resistencia de 220Ω al LED
   - Conectar el otro terminal del LED a VCC (9V)

2. **Configuración de control**
   - Conectar la base del transistor a través de resistencia de 1kΩ
   - Crear punto de entrada para señal de control

3. **Verificación de estados**
   - **Estado 0:** Señal de control = 0V → LED apagado
   - **Estado 1:** Señal de control = 9V → LED encendido

4. **Pruebas de funcionamiento**
   - Alternar señal de control entre 0V y 9V
   - Verificar respuesta del LED (ON/OFF)
   - Confirmar conmutación limpia sin estados intermedios

### Consideraciones Técnicas

**Cálculo de Corriente del LED:**
- Voltaje de alimentación: 9V
- Voltaje directo LED (típico): ~2V
- Resistencia limitadora: 220Ω
- Corriente: I = (9V - 2V) / 220Ω = 31.8mA

⚠️ **Nota importante:** La corriente calculada (31.8mA) excede ligeramente el límite recomendado de 20mA para LEDs estándar. Para mantener una corriente segura < 20mA, se recomienda usar una resistencia de 390Ω:
- I = (9V - 2V) / 390Ω = 17.9mA ✅

## Procedimiento 2: Abstracción en JavaScript

### Implementación Final (bit.js)

```javascript
export function bit(input = 0) {
    let bitValue = input;
    bitValue = bitValue ? 1 : 0;
    return bitValue;
}
```

### Implementación de Prueba (transistor.js)

```javascript
import { bit } from "./bit/bit.js";

function main() {
  console.log("El transistor envía señales alternadas al bit:\n");
  
  for (let i = 0; i < 10; i++) {
    const signal = i % 2;     // Genera señal alternada 0,1,0,1...
    const result = bit(signal); // Envía señal al bit
    
    if (result === 1) {
      console.log("🟡");       // LED encendido
    } else {
      console.log("⚫");       // LED apagado
    }
  }
}

main();
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
   - Bucle `for` genera señales alternadas (0,1,0,1...)
   - Cada iteración envía señal al bit
   - Visualizar resultado con emojis (🟡/⚫)

4. **Validar comportamiento**
   - Ejecutar con `node ./bit/transistor.js`
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

### Futuras
1. **Expandir funcionalidad:** Agregar métodos `set()` y `get()` para persistencia
2. **Integrar con sistema:** Preparar para uso en registros de 8 bits
3. **Optimizar rendimiento:** Evaluar eficiencia en operaciones masivas
4. **Documentar patrones:** Crear biblioteca de señales de prueba
5. **Organizar pruebas:** Crear archivos específicos (alu.js, register.js, etc.)

---
**Estado:** ✅ Implementación completada y funcional | **Archivo de prueba:** `transistor.js` | **Próxima revisión:** Implementación de registro de 8 bits
