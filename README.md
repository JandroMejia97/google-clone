# Curso Práctico de HTML y CSS

En este curso crearemos un clon de la página de Google y pondrás en práctica tus conocimientos de CSS y HTML.

## Análisis del proyecto Google Clone

La estructura del proyecto comprende 3 secciones, las cuales son:

- **Header:** Posee una barra de navegación.
- **Main:** Este se subdivide en 3 secciones más, el ícono, el campo de texto y los botones.
- **Footer:** Pie de página con algunos enlaces.

## Configuración del proyecto

En esta clase se configura la estructura de carpetas a utilizar.

1. Creamos el archivo **index.html** en la raíz del proyecto.
2. Creamos una carpeta con el nombre ***css***, en la cual ubicaremos los estilos del proyecto. Dentro de dicha carpeta creamos el archivo **styles.css.**
3. Añadimos el contenido del **index.html** con haciendo uso del shortcut ***! + Enter***.
4. Enlazamos la hoja de estilos creada a nuestro proyecto con la etiqueta `<link>`.

## Chrome Dev Tools

Es una herramienta que nos da el navegador para mejorar el proceso de desarrollo, la cual nos ayuda para ver en el navegador el comportamiento de nuestro proyecto.

En nuestro caso lo usaremos para manipular el **CSS**.

Para acceder a este lo podemos hacer de las siguientes maneras:

- Click derecho sobre la pantalla y luego click sobre la opción **Inspeccionar elemento** del menú contextual, esto nos abrirá **Chrome Dev Tools**.
- O bien usando el atajo de teclado ***Ctrl + Shift + I*.**

## Header Google Clone

### Maquetando el header

Para generar el header haremos uso de la etiqueta `<header></heeader>`, esta etiqueta tiene 2 elementos internos, las etiquetas `<nav></nav>`

1. Añadimos la etiqueta `<header></header>` y dentro de la misma la etiqueta `<nav></nav>` con la cuál construiremos la sección de navegación.
2. La sección de navegación se componen de vínculos, los cuales nos llevan a otras páginas, para añadirlos vínculos lo haremos con la ayuda de la etiqueta contenedora de lista desordenada *(unordered list)* `<ul></ul>`.
3. Dentro del contenedor de lista no ordenada añadiremos elementos a dicha lista, con la etiqueta *(list item)* `<li></li>`.
4. Para enlazar nuestra navegación a otros sitios haremos uso de la etiqueta ancla *(anchor)* `<a href="https://unenlace.com"></a>` la cual requiere un atributo llamado *href* el cual nos permite hacer la referencia, para ellos la incluimos dentro de la etiqueta anterior.

Para poder visualizar nuestras modificaciones en tiempo real haremos uso de la extensión **Live Server**, esta extensión nos evitará tener que actualizar el navegador cada vez que hacemos un cambio. La misma la podremos instalar desde VSCode presionando ***Ctrl + Shift + X*** (en windows).

Esto nos abre un menú contextual en la barra lateral con un campo de texto, en el cual escribiremos el nombre de nuestra extensión y seleccionamos la que fue publicada por **Ritwick Dey** (normalmente es la primer opción). Presionamos en instalar y listo.

### Agregando estilos al header

Esta clase se le empieza a dar estilos al header de nuestro clon de Google.

Hasta el momento hemos usado 3 etiquetas contenedoras.

Es importante entender que HTML5 tiene 2 tipos de etiquetas, las etiquetas **contenedoras** y las etiquetas de **contenido.**

Manejar una buena arquitectura de etiquetas contenedoras nos facilitará posicionar nuestro contenido.

Para este proyecto, manejaremos 3 tipos de layout:

- **Display layout.**
- **Display grid.**
- **Display flex.**

Para darle estilos a nuestro header haremos lo siguiente:

1. Le añadiremos las propiedades `margin: 0px;` y un `padding: 0px;` a nuestro **body**, para resetear los valores por defectos que nos da el navegador. O bien podemos hacer uso del selector **\*** con el cual reseteamos los estilos por defecto de todas las etiquetas.
2. Agregamos la propiedad `font-size: 13px;` al **body** y modificamos las fuentes con `font-family: Arial, Helvetica, sans-serif;`.
3. Le añadimos las siguientes propiedades a nuestro **header `width: 100%;` y `height: 60px;`.**
4. Para ser más específicos al momento de darles estilos al **nav** hacemos uso del selector `header nav`,** esto nos asegura que solamente aplicaremos estos estilos a aquellas que están contenidas en un **header.**
5. Aplicamos la propiedad `display: flex;`, ****esto nos permite posicionar nuestro contenido  y la propiedad `justify-content: flex-end;` la cual nos permite justificar el contenido a la derecha.
6. Añadimos el atributo `class="nav-right-section"` a nuestra etiqueta **ul** para darle un estilo personalizado.

    Una clase es el identificador que le damos a un conjunto de estilos CSS para posteriormente aplicarle los mismos a las secciones que se repitan. El selector para indicar una clase es el punto, ejemplo: `.mi-clase`

    Los identificadores son únicos y estos los usamos para darles estilos a un elemento en particular, el selector para los identificadores es #, ejemplo: `#miIdentificador`.

7. Le damos los siguientes estilos a nuestra clase `nav-right-section`, un `width: 250px`, una altura que se ajuste de forma automática a la altura de su contenedor padre `height: auto;`, `display: flex` para poder posicionar los elementos del **nav**, le quitamos la decoración por defecto de a los elementos de la lista desordenada con `list-style: none;` y para finalizar justificamos (horizontalmente) y alineamos (verticalmente) el contenido al centro con `justify-content: center` y `aling-items: center`.
8. Aplicamos estilos a las anclas contenidas en nuestra barra de navegación con el selector `nav .nav-right-section a`,** le daremos un color negro `color: #000000;` y un margen derecho de 10 píxeles `margin-right: 10px;`.
9. Ahora removeremos el subrayado a todas las anclas que de nuestro proyecto con la propiedad `text-decoration: none;` y haremos que cuando posicionemos el cursor sobre ellas nos aparezca una mano como puntero con la propiedad `cursor: pointer;`.

    Además, le añadiremos el pseudo elemento **:hover** para que al pasar el puntero sobre las anclas estas tengan un subrayado y una opacidad del 85% con las propiedades `text-decoration: underline;` y `opacity: 0.85;`.

### Manejo de íconos e imágenes en etiquetas

Para comenzar debemos obtener el ícono del menú de Google, para ello, lo podemos descargar de [este enlace](https://static.thenounproject.com/png/756729-200.png). Luego crearemos un directorio llamado ***assets*** donde guardamos todos nuestros recursos cómo imágenes, iconos, etc.

Ahora procemos a añadir la clase `menu-icon` a nuestro elemento de la lista que realizará dicha función y procedemos a darle estilos con el selector `nav .nav-right-section .menu-icon`. Para añadir el ícono haremos uso de la propiedad `background-image: url('LA URL');` y para evitar que este se repita usaremos la propiedad `background-repeat: no-repeat;`. Para posicionar en el centro el icono y ajustarlo al tamaño del contenedor usaremos `background-position: center;` y `background-size: contain;` respectivamente. Además, le daremos al ícono un ancho y una altura de 25 píxeles.

Luego, debemos añadir la foto del usuario dentro del elemento de lista destinado para ello. Esto lo haremos con la etiqueta `<img src="ruta" alt="texto alternativo">`, la cual requiere el atributo ***source*** para indicarle de donde obtendrá dicha imagen. y adicionalmente se le puede añadir un texto alternativo, el cuál aparecerá si la imagen no puede ser cargada y además sirve para darle información al usuario que usa herramientas de accesibilidad sobre el contenido de la misma.

Para obtener nuestra foto de perfil de Google debemos ingresar a [google.com](https://google.com), presionamos Click derecho sobre nuestra imagen, luego seleccionamos **Inspeccionar elemento** y se nos abrirá el inspeccionador de elementos del navegador, de ahí copiaremos la URL de donde obtiene Google nuestra foto de perfil y esta la pegamos en el atributo source de la imagen en nuestro proyecto.

Para terminar, le daremos estilos a nuestra imagen con el selector `nav .nav-right-section img`, para los estilos le daremos un radio al borde del 50% y un margen izquierdo de 10 píxeles, con las propiedades `margin-left: 10px;` y `border-radius: 50%;` respectivamente.

>ℹ Haz click [aquí](https://github.com/JandroMejia97/google-clone/tree/69eead2146aa03b0362adb5b8af40364020d7cc8) para ver el código fuente del proyecto hasta el momento.

### Enlaces

- [Arquitectura BEM](http://getbem.com/introduction/) para nombrar clases e identificadores.

## Main Google Clone

### Maquetando el main

Para maquetar la sección principal de nuestro Google Clone haremos uso de la etiqueta contenedora `<main></main>`,  la cual incluiremos luego del **header**, recordemos que está sección se divide en otras 3 secciones, las cuales eran el logo, el campo de texto para el buscador y los botones.

Primero añadimos la etiqueta antes mencionada y añadiremos 3 secciones con la etiqueta `<section></section>` con la clase `main-input`.

Para la primer sección añadiremos una imagen y le pondremos la clase `main-input`, mientras que para la segunda debemos hacer las siguientes observaciones:

1. El campo de texto tiene una sombra en su contorno cuando esta tiene el foco.
2. Hay 2 íconos en cada uno de los extremos del campo de texto. Donde el segundo no solamente es un icono, sino que también es un botón.

Para resolver el punto 2, haremos uso de un contenedor `<div></div>`, al cual le pondremos la clase `main-input-container`. Dentro de este añadiremos una etiqueta `<span></span>` con la clases `search-icon`, la cual nos servirá para poner el primer icono como fondo, luego añadiremos campo de texto `<input type="text">`, y para el segundo icono haremos uso de una ancla y le pondremos la clase `microphone-icon`.

A la última sección le pondremos la clase `main-buttons` y dentro de ella anidaremos 2 contenedores **div**, cada uno tendrá dentro de sí un botón.

### Agregando estilos al main

Para comenzar, le daremos un margen superior a nuestro **main** para separarlo un poco de nuestro **header**, además, centraremos el texto con la propiedad `text-align: center;`.

A nuestra sección del logo le añadiremos un ancho y un alto de 272 y 92 píxeles respectivamente, además, dejaremos a la misma sin un margen superior, pero con un margen inferior de 35 pixeles y dejaremos que el margen derecho e izquierdo se ajusten de forma automática a la pantalla con la propiedad `margin: 0 auto 35px;`.

Para cargar la imagen la podremos obtener de [este enlace](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png) y le añadimos al atributo source dicha URL.

Ahora a la sección principal le daremos un ancho de 530 píxeles y los mismos márgenes que aplicamos anteriormente a la sección del logo.

En el caso de nuestro contenedor del **input** le daremos un ancho de 525px y un radio en los bordes de 100px, esto lo haremos con la propiedad `border-radius: 100px;`, también, le añadiremos un borde sólido de un píxel de grosor y de color #eeeff1 con la propiedad `border: 1px solid #eeeff1;`, además, añadiremos la propiedad `display: flex;` la cual nos ayudará a posicionar el contenido en forma de línea, cómo complemento a esta propiedad centraremos el contenido de forma vertical y horizontal con `align-items: center;` y `justify-content: center;` respectivamente.

Para el campo de texto procederemos a darle una altura y un ancho de 40 y 450 píxeles respectivamente, también eliminaremos el borde que tiene por defecto, así cómo el outline que aparece cuando este tiene el foco, esto lo haremos dándole el valor `none` a las propiedades `border;` y `outline`

Además, le añadiremos al contenedor de nuestro input el efecto de sombreado cuando pasamos el puntero sobre él con ayuda del pseudo elemento **:hover**, para ello, usaremos el selector `main .main-input-container:hover` y aplicaremos la propiedad `box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);`, dicha sombra tendrá un desplazamiento de 0 y 1 píxeles en el eje x e y respectivamente, 6 una difuminación de 6 píxeles, 0 pixeles para la expansión de la sombra y un color oscuro, con una transparencia de **50f**. Para terminar añadiremos el color `rgba(223,225,229,0)` al borde.

### Manejo de íconos e imágenes en etiquetas

Crearemos una clase llamada icon y se la añadiremos a todos nuestras etiquetas que tengan un icono como fondo para ello usaremos el selector `.icon`, acá agruparemos las propiedades css comunes a todos, en las cuales el icono no se repite, está posicionado en el centro y se ajusta al tamaño del contenedor como lo hicimos anteriormente.

Para colocar el icono de la lupa y del micrófono usaremos los selectores `main .main-input .search-icon` y `main .main-input .microphone-icon` respectivamente, los pondremos como imagen de fondo y le daremos un ancho y una altura de 24 píxeles a ambos. En el caso del micrófono haremos que el cursor se convierta en un puntero.

### Estilos en los botones

El navegador le da un estilo por defecto a los botones, pero los vamos a personalizar con **css**.

A nuestra sección con la clase `main-buttons` le daremos un ancho y una altura de 570 y 70 píxeles respectivamente, sin los márgenes superior e inferior y los márgenes laterales se ajustarán de forma automática.

Ahora distribuiremos los contenedores dentro de nuestra sección en línea como elementos en bloque con la propiedad `display: inline-block;`y el selector `main .main-buttons div`.

A nuestros botones le daremos un altura de 36 píxeles y un ancho mínimo de 54 píxeles, le daremos `#f2f2f2` como color de fondo y un borde sólido de un píxel de grosor con el mismo color del fondo y un radio de 4px, también le quitaremos el relleno superior  e inferior y le daremos 15px de relleno a los costados, un margen superior e inferior de 11px y a los costados un margen de 4px, además, al texto le daremos el color `#5f6368` y un tamaño de fuente de 14px.

Para terminar, también les añadiremos un efecto `:hover`, el cual tendrá un borde sólido de un píxel de color `#c6c6c6`, le agregaremos una sombra negra con 10% de transparencia, desplazada 0px en el eje ***x*** y 1px en el eje ***y*** y una difuminación 1px `box-shadow: 0 1px 1px rgba(0,0,0,0.1);`, también le añadiremos `#f8f8f8`  como color de fondo y  el texto tendrá el color `#222`. 

>ℹ Haz click [aquí](https://github.com/JandroMejia97/google-clone/tree/4f54b1ded7c62d7c6786ae4ec6a316f7a285ecff) para ver el código fuente del proyecto hasta el momento.

## Footer Google Clone

### Maquetando el footer

El pien de la página se divide en 2 partes, un contenedor con enlaces situado a la derecha y otro a la izquierda.

Para ello usaremos 2 contenedores de listas desordenadas, dentro de las cuales añadiremos los elementos de cada lista y su respectiva ancla, a cada lista le añadiremos una clase para posicionarlo a la izquierda o a la derecha de nuestro footer, estas serán `footer-left` y `footer-right`.

### Agregando estilos al footer

El pie de página deberá ocupar el 100% del ancho de la pantalla, le daremos una altura de 40px, `#f2f2f2` será el color de fondo y le añadiremos un borde superior sólido de un píxel de espesor, de color `#e4e4e4`, alineamos verticalmente los elementos al centro y le damos un tamaño a la fuente de 14px.

Para que el footer se mantenga en la parte inferior de la pantalla debemos usar la propiedad `position: absolute;` y le asignamos como valor cero a las propiedades `bottom`, `left` y `right` para que este siempre esté pegado a dichas posiciones de la pantalla.

Para separar las listas haremos uso de la propiedad `display: grid;`, esta propiedad nos genera un cuadrícula en la cual podremos distribuir nuestro contenido, en nuestro caso usaremos una cuadrícula de 2 fracciones, esto lo lograremos con la propiedad `grid-template-columns: 1fr 1fr;`.

Las propiedades `display: grid` y `display: flex` son complementarias. `grid` nos ayuda a posicionar etiquetas contenedoras, mientras que `flex` nos ayuda a posicionar el contenido que está dentro de dichas etiquetas.

Procederemos a quitarle el relleno izquierdo a las listas y el estilo por defecto, además le daremos un margen superior de 2px y le quitaremos el margen inferior, mientras que el margen izquierdo y derecho será de 10px.

Ahora le daremos estilos a nuestras clases `footer-left` y `footer-right` para que estos se ubiquen en sus respectivos lugares, para ello usaremos las propiedades `justify-self: left;` y `justify-self: right;` respectivamente.

Para terminar, le daremos un margen de 10px a nuestras anclas que se encuentran en las listas y le daremos `#5f6368` como color al texto.

>ℹ Haz click [aquí](https://github.com/JandroMejia97/google-clone/tree/6875612814d382d95de76b2cde2f58788a2fa56c) para ver el código fuente final del proyecto.