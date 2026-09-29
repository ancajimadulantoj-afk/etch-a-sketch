# Etch-a-Sketch

Una versión digital e interactiva del clásico juguete de dibujo, creada como proyecto del curso The Odin Project.

## Acerca del proyecto

Este proyecto genera una cuadrícula dinámica sobre la que el usuario puede "dibujar" pasando el mouse, con varios modos y controles adicionales: tamaño de cuadrícula personalizable, colores aleatorios, oscurecimiento progresivo, bordes de celda alternables y limpieza del lienzo.

## Funcionalidades incluidas

- Cuadrícula generada dinámicamente según el tamaño que el usuario elija (1-100), con validación de entradas inválidas
- Coloreado aleatorio de celdas al pasar el mouse (Random Mode)
- Shadow Mode: oscurecimiento progresivo de cada celda en pasos del 10%, hasta llegar a negro sólido en 10 pasadas, usando `opacity` y un contador por celda (`data-*` attributes)
- Botón para alternar los bordes de las celdas (mostrar/ocultar) con `classList.toggle`
- Botón "Delete" para limpiar el lienzo sin alterar el tamaño de la cuadrícula
- Reseteo automático de opacidad y contador al volver al modo de color aleatorio, para que los modos no interfieran entre sí

## Construido con

- HTML5
- CSS3
- JavaScript 

## Lo que aprendí

- Generación dinámica de elementos con bucles, incluyendo tamaño de celda calculado en tiempo real
- Uso de `data-*` attributes para guardar estado individual por elemento
- Diferencia entre `opacity` y manipular `backgroundColor` directamente
- Patrones de alternancia de estado (toggle) con booleanos y con `classList.toggle`
- Validación de datos ingresados por el usuario antes de ejecutar lógica dependiente de ellos
- Detección y corrección de efectos secundarios entre distintos modos de una misma función (reseteo de estado)
- Estilizado con `box-sizing: border-box` para evitar problemas de tamaño con bordes
- Uso de fuentes personalizadas de Google Fonts para lograr una identidad visual coherente con el tema del proyecto