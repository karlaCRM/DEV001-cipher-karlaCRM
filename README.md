# Cifrado César Red de acompañamiento de Aborto


***

# Resumen del proyecto

Se nos planteo la tarea de realizar una aplicación web en donde nuestros usuarios fueran capaces de cifrar y descifrar un mensaje en el navegador mediante el uso del cifrado caesar y que a su vez fuera una posibilidad para las usuarias seleccionar el número (offset) de desplazamiento con el que querrian cifrar su mensaje. 
La idea principal esta planteada para que:

* El cifrador fuera capaz de cifrar MAYUSCULAS.
* Se pudiera cifrar el mensaje con un número de desplazamiento comprendido entre el 1 y el 33. 
* El mensaje cifrado apareciera en pantalla. 
* Se pudiera descifrar el mensaje previamente cifrado. 


### ¿Qué es el cifrado caesar?

Es un metodo de cifrado de texto de sustitución simple también conocido como cifrado por desplazamiento mediante el cual una letra es reemplazada por otra que se encuentra a determinado número de posiciones más adelante en nuestro alfabeto.
Un ejemplo sería si quisieramos cifrar la letra A con un desplazamiento de 2 espacios, entonces en vez de colocar la "A" esta sería sustituida por la "C".


## Problemática

El acceso al aborto  legal, seguro y gratuido en México actualmente y a pesar de que hace un año la Suprema Corte de Justicia de la Nación emitio un fallo a favor de la despenalizacion del aborto en el país (asento jurisprudencia) sigue siendo una cuestión que no termina de concretarse. De las 32 Entidades Federativas con las que consta el país, todavía existen 22 entidades que no han "dado su brazo a torcer" y en las cuales las mujeres todavía encuentran limitantes para abortar, siendo un daño directo a sus derechos fundamentales. 
Ciudad de México fue la primera entidad en despenalizar el aborto hasta la semana 12 de gestación, por ello se erigio como el "bastión" de la lucha por el derecho a abortar.
Aun así el aborto existe en todo el País y cientos (o miles) de mujeres abortan en el contexto de la clandestinidad, un aborto clandestino sin la información correcta o cuidados adecuados es inseguro, llevando a las mujeres a arriesgar su vida por el hecho de tomar decisiones sobre su propio cuerpo. 
Ante este panorama grupos de mujeres han tejido redes de apoyo para acompañar, auxiliar y permitir el acceso a mujeres de todo el país a un aborto seguro pues clandestino NO es sinonimo de inseguro. El aborto en casa con medicamento ha demostrado que con la información y el acompañamiento adecuados es altamente seguro. 
* Las mujeres que dan acompañamientos también arriesgan su integridad al compartir información o medicamentos a las mujeres en situación de aborto, siendo necesario buscar establecer estrategias que garanticen su seguridad.
* Las mujeres en situación de aborto aparte de tener que enfrentar un contexto de criminalización por parte del Estado también luchan contra el estigma social o la falta de apoyo familiar o de la pareja; ante esta situación muchas buscan el acompañamiento al encontrarse solas ante la decisión y su integridad corre riesgo si la desición que tomaron se llegará a saber en su nucleo cercano, ante esto también es necesario que cuenten con vías de comunicación seguras para enviar dudas o recibir información.

![img](https://imagenes.elpais.com/resizer/Kv7JUMxBOckAGKc7ygRcgdKsI7w=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/4KOCEBMKANAATAHEN4AH3TKRZY.aspx)


## 3. A quién va enfocado

Este proyecto fue pensado como herramienta de una Red de Acompañamiento de Aborto llamada "Fondo ILE" en donde usuarias fueran tanto las Acompañantes que comparten los protocolos y dan seguimiento a los abortos como a las mujeres que se acercan a la red solicitando información, dando datos respecto a semanas de embarazo o su contexto personal. 

La mayoria de los acompañamientos se dan de manera asincrona pues las mujeres que se acercan a la red leen los mensajes o responden cuando les es posible, siento mucho más seguro que el mensaje que reciban se encuentre cifrado y no al alcance de cualquiera. 

* Acompañantes de Fondo ILE
* Mujeres en situación de aborto

## 4. Cómo el proyecto resuelve sus problemas.

* Mediante el uso de la web app podrán comunicarse de manera "segura", está pensada como auxiliar en la comunicación por Whatsapp, una vez que la mujer que necesita acompañamiento contacta a la red, las Acompañantes le envían el acceso a la aplicación web y el número de offset en el cual estarán comunicandose. Así los textos se envian codificados al whats y una vez recibidos se decodifican. 
* La idea es generar un espacio más seguro de comunicación para ambas, evitando que cualquier persona que tenga acceso a su whats pueda entender aquello de lo que hablan. 


# 5. Proceso

Una vez recibido el proyecto, este se dividio en varías etapas, las cuales se describen a continuación: 


## 1. Diseño de prototipo base

Se realizo un esquema general a mano respecto a como quería que se viera, en el proyecto de "QUIZ" había realizado mi página unida por medio de varios HMTL y esta vez quería probar que todo se desplegara en una misma con una smooth transition; la idea fue enfocar el diseño (lo visual) a eso. 

![img](https://postimg.cc/n9tvnkyc)




 * **Descifrar un mensaje**
    * Insertar el mensaje (texto) que quieres descifrar. El mensaje usa alfabeto simplificado (solamente mayúsculas y sin ñ).
    * Elegir un numero desplazamiento (_offset_, que corresponda al que usamos para cifrar) indicando cuántas posiciones quieres que
  el cifrado desplace cada caracter en el alfabeto. El numero sera positivo y entero (positive integer).
    * Ver el resultado del mensaje descifrado.

**2. Pruebas unitarios de los métodos.**  
  Los metódos de `cipher` (`encode` y `decode`) deben tener cobertura con pruebas unitarias.

**3. Código de tu proyecto subido a tu repo y interfaz "desplegada".**  
  El código final debe estar subido en un repositorio en GitHub. La interfaz o pagina web, debe ser "desplegada" usando GitHub Pages.

**4. Un README que contiene una definición del producto.**  
  En el README cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso para definir el producto final a nivel de experiencia y de interfaz. Estas preguntas sirven como guia:

  * Quiénes son los principales usuarios de producto.
  * Cuáles son los objetivos de estos usuarios en relación con tu producto.
  * Cómo crees que el producto que estás creando está resolviendo sus problemas.

Con estos requisitos cumplidos puedes agendar un Project Feedback con unx coach.

## 6. Decisión de diseño

Las partes "opcionales" tienen como intención permitirte profundizar un poco más sobre 
los objetivos de aprendizaje del proyecto. Todo en la vida tiene pros y contras, decide 
sabiamente si quieres invertir el tiempo en profundizar/perfeccionar o aprender cosas 
nuevas en el siguiente proyecto.

El hito 1 no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El _boilerplate_ incluye algunos _tests_ (comentados en principio) que 
puedes usar como punto de partida para implementar el soporte para estos casos adicionales.

## 7. Diseño final

La lógica del proyecto debe estar implementada completamente en JavaScript. En
este proyecto NO está permitido usar librerías o frameworks, solo JavaScript puro
también conocido como Vanilla JavaScript.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio que contiene un _boilerplate_ con tests (pruebas). Un _boilerplate_ es la estructura basica de un proyecto que sirve como un punto de partida con archivos inicial y configuración basica de dependencias y tests.  

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El boilerplate que les damos contiene esta estructura:

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```

## ¿Como se usa?

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación web,
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS (Bootstrap, Materialize, etc).
* `src/cipher.js`: acá debes implementar el objeto `cipher`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`cipher`) debe contener dos
  métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

### Deploy

Hacer que los sitios estén publicados (o _desplegados_) para que usuarias de
la web puedan acceder a él es algo común en proyectos de desarrollo de software.

En este proyecto, utilizaremos _Github Pages_ para desplegar nuestro sitio web.

El comando `npm run deploy` puede ayudarte con esta tarea y también puedes
 consultar su [documentación oficial](https://docs.github.com/es/pages).
 
***

## 8. Objetivos alcanzados

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/01-css/01-intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/01-css/02-boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/02-dom/03-1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Tipos de datos primitivos**

  <details><summary>Links</summary><p>

  * [Valores primitivos - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#valores_primitivos)
</p></details>

- [ ] **Strings (cadenas de caracteres)**

  <details><summary>Links</summary><p>

  * [Strings](https://curriculum.laboratoria.la/es/topics/javascript/06-strings)
  * [String — Cadena de caracteres - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/01-values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/01-basics/02-variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/02-loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

***

## 9. Pistas, tips y lecturas complementarias

### Prepara tu PC para trabajar.

1. Asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programa que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
3. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

Súmate al canal de Slack [#project-cipher](https://claseslaboratoria.slack.com/archives/C03LJSH6R7D) para conversar y pedir ayuda del proyecto.

A continuación un video que te lleva a través de la fórmula matemática del Cifrado César 
y un par de cosas más que debes saber para resolver este proyecto. La fórmula no es lo iportante del proyecto, no te confundas.

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

Terminal y shell de UNIX:

[![Playlist de Terminal y shell de UNIX](https://img.youtube.com/vi/GB35Eyb-J4c/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Control de versiones y trabajo colaborativo con Git y GitHub:

[![Playlist de control de versiones y trabajo colaborativo](https://img.youtube.com/vi/F1EoBbvhaqU/0.jpg)](https://www.youtube.com/playlist?list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)

[Link](https://www.youtube.com/playlist?list=PLiAEe0-R7u8nGH5TEHfSTeDNIvjZFe_Yd)

Desarrollo Front-end:

* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.

***

## 10. Para considerar Project Feedback

En resumen, los criterios de aceptación mínimos del proyecto para considerar Project Feedback:

* [ ] Tiene una interfaz que permite a la usuaria cifrar y descifrar.
* [ ] El proyecto será entregado incluyendo pruebas unitarios de los métodos de `cipher` (`encode` y `decode`). 
* [ ] El proyecto será entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [ ] El proyecto será entregado subiendo tu código a GitHub.
* [ ] La interfaz será "desplegada" usando GitHub Pages. 
* [ ] El README contiene una definición del producto.
