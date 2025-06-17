# About Me - Simple Web Profile

Este proyecto es una pequeña página web personal que muestra información básica de un usuario, usando TypeScript para insertar dinámicamente el contenido HTML y CSS para un diseño limpio y moderno con fondo oscuro y tonos verdes suaves.

## Características

- **Contenido dinámico:** El nombre, edad, profesión y mensaje se insertan mediante TypeScript.
- **Estilo moderno:** Diseño con fondo negro y colores verdes sutiles para un look profesional y relajado.
- **Responsivo y legible:** Tipografía clara y espaciamiento agradable.
- **Código limpio y modular:** CSS separado y uso de plantillas literales para insertar HTML dinámico.

## Archivos

- `index.html`: Archivo HTML principal con el contenedor `#app`.
- `style.css`: Estilos principales para la página, incluyendo la sección About Me.
- `main.ts`: Código TypeScript que inyecta el contenido en el DOM.

## Uso

1. Clonar o descargar el repositorio.
2. Instalar dependencias si es necesario (por ejemplo, si usas un bundler para TypeScript).
3. Compilar TypeScript a JavaScript (`tsc main.ts`).
4. Abrir `index.html` en un navegador moderno.
5. Verás tu perfil personal con el nombre, edad y mensaje aplicando los estilos definidos.

## Estructura del código

- La interface `AboutMe` define la estructura de la información personal.
- Variables para el nombre completo y mensaje.
- El DOM se actualiza con contenido que usa las propiedades de `aboutMe`.
- CSS proporciona fondo negro, verde suave y textos en tonos grises claros para un diseño elegante y legible.

## Personalización

- Cambia los valores en el objeto `aboutMe` para mostrar tu propia información.
- Modifica los estilos en `style.css` para adaptar colores y tipografía a tu gusto.
- Agrega nuevas secciones o contenido dinámico modificando el archivo `main.ts`.
