(window.webpackJsonp=window.webpackJsonp||[]).push([[491],{1001:function(a,e,o){"use strict";o.r(e);var s=o(34),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"cargando-datos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cargando-datos"}},[a._v("#")]),a._v(" Cargando datos")]),a._v(" "),o("p",[a._v("Hemos visto como puedes usar comandos como "),o("code",[a._v("ls")]),a._v(", "),o("code",[a._v("ps")]),a._v(", "),o("code",[a._v("date")]),a._v(", y "),o("code",[a._v("sys")]),a._v(" para cargar información sobre los archivos, procesos, hora de fecha, y del mismo sistema. Cada comando nos entrega una tabla de información que podemos explorar. Hay otras maneras de cargar datos en una tabla de datos para trabajar.")]),a._v(" "),o("h2",{attrs:{id:"abriendo-archivos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abriendo-archivos"}},[a._v("#")]),a._v(" Abriendo archivos")]),a._v(" "),o("p",[a._v("Una de las funciones más destacadas de Nu para trabajar con datos es el comando "),o("code",[a._v("open")]),a._v(". Es una multi-herramienta que puede trabajar con varios formatos de datos. Para ver qué significa esto intentemos abrir un archivo en formato json:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> open editors/vscode/package.json\n------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------\n name | descript | author   | license | version | reposito | publishe | categori | keywords | engines  | activati | main     | contribu | scripts  | devDepen\n      | ion      |          |         |         | ry       | r        | es       |          |          | onEvents |          | tes      |          | dencies\n------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------\n lark | Lark     | Lark     | MIT     | 1.0.0   | [object] | vscode   | [0       | [1 item] | [object] | [1 item] | ./out/ex | [object] | [object] | [object]\n      | support  | develope |         |         |          |          | items]   |          |          |          | tension  |          |          |\n      | for VS   | rs       |         |         |          |          |          |          |          |          |          |          |          |\n      | Code     |          |         |         |          |          |          |          |          |          |          |          |          |\n------+----------+----------+---------+---------+----------+----------+----------+----------+----------+----------+----------+----------+----------+----------\n")])])]),o("p",[a._v("De manera similar a "),o("code",[a._v("ls")]),a._v(', abrir un tipo de archivo que Nu entienda nos devolverá algo más que solo texto (o una secuencia de bytes). Aquí abrimos el archivo "package.json" de un proyecto de JavaScript. Nu puede reconocer y abrir el texto en JSON y devolvernos una tabla de datos.')]),a._v(" "),o("p",[a._v("Si deseamos revisar la versión del proyecto que estamos mirando podemos usar el comando "),o("code",[a._v("get")]),a._v(".")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> open editors/vscode/package.json | get version\n1.0.0\n")])])]),o("p",[a._v("Actualmente Nu soporta los siguiente formatos para cargar datos directamente a tablas:")]),a._v(" "),o("ul",[o("li",[a._v("json")]),a._v(" "),o("li",[a._v("yaml")]),a._v(" "),o("li",[a._v("toml")]),a._v(" "),o("li",[a._v("xml")]),a._v(" "),o("li",[a._v("csv")]),a._v(" "),o("li",[a._v("ini")])]),a._v(" "),o("p",[a._v("¿Pero qué sucede si cargas un archivo de texto que no sea de estos? Probemos:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> open README.md\n")])])]),o("p",[a._v("Se nos muestra el contenido del archivo. Si el archivo es muy grande obtendremos una vista práctica desplazable para mirar el archivo y luego regresar a la terminal. Para ayudar con legibilidad Nu resaltará la sintaxis de formatos comunes de archivos como de código, markdown, y más.")]),a._v(" "),o("p",[a._v("Debajo de la superficie Nu mira estos archivos de texto como una cadena larga. Próximamente hablaremos de cómo trabajar con estas cadenas para extraer los datos que necesitemos de ellas.")]),a._v(" "),o("h2",{attrs:{id:"trabajando-con-cadenas"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#trabajando-con-cadenas"}},[a._v("#")]),a._v(" Trabajando con cadenas")]),a._v(" "),o("p",[a._v("Una parte importante de trabajar con datos llegando fuera de Nu es que no siempre estará en formato que Nu entiende. Comúnmente estos datos son proporcionados como una cadena.")]),a._v(" "),o("p",[a._v("Imaginemos que nos proporcionan estos datos de archivo:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> open gente.txt\nOctavia | Butler | Writer\nBob | Ross | Painter\nAntonio | Vivaldi | Composer\n")])])]),o("p",[a._v("Cada pedazo de dato que deseamos está separada por el símbolo de tubería (pipe '|'), y cada persona está en líneas separadas. Nu no contiene un formato de archivo delimitado con pleca ('|') predeterminado, por lo que tendremos que parsearlo nosotros mismos.")]),a._v(" "),o("p",[a._v("Lo primero que queremos hacer al cargar el archivo es trabajarlo línea por línea:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> open gente.txt | lines\n---+------------------------------\n # | value\n---+------------------------------\n 0 | Octavia | Butler | Writer\n 1 | Bob | Ross | Painter\n 2 | Antonio | Vivaldi | Composer\n---+------------------------------\n")])])]),o("p",[a._v("Podemos darnos cuenta que estamos trabajando con las líneas porque estamos de vuelta a una tabla. Nuestro próximo paso es mirar si podemos dividir las filas a algo más útil. Para eso, usaremos el comando "),o("code",[a._v("split")]),a._v(". "),o("code",[a._v("split")]),a._v(", como implica el nombre, nos da una manera de dividir una cadena delimitada. Usaremos el subcomando "),o("code",[a._v("column")]),a._v(" para dividir el contenido a varias columnas. Indicamos cuál es el delimitador y se hace el resto:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open gente.txt | lines | split column "|"\n---+----------+-----------+-----------\n # | Column1  | Column2   | Column3\n---+----------+-----------+-----------\n 0 | Octavia  |  Butler   |  Writer\n 1 | Bob      |  Ross     |  Painter\n 2 | Antonio  |  Vivaldi  |  Composer\n---+----------+-----------+-----------\n')])])]),o("p",[a._v("Casi se ve correcto. Parece que hay espacio extra ahí. Cambiemos nuestro delimitador:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open gente.txt | lines | split column " | "\n---+---------+---------+----------\n # | Column1 | Column2 | Column3\n---+---------+---------+----------\n 0 | Octavia | Butler  | Writer\n 1 | Bob     | Ross    | Painter\n 2 | Antonio | Vivaldi | Composer\n---+---------+---------+----------\n')])])]),o("p",[a._v("Nada mal. El comando "),o("code",[a._v("split")]),a._v(" nos da datos que podemos usar. Adicionalmente nos crea nombres de columnas predeterminadas:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open gente.txt | lines | split column " | " | get Column1\n---+---------\n # | value\n---+---------\n 0 | Octavia\n 1 | Bob\n 2 | Antonio\n---+---------\n')])])]),o("p",[a._v("También podemos nombrar nuestras columnas en vez de usar nombres predeterminados:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open gente.txt | lines | split column " | " primer_nombre apellido trabajo\n---+---------------+-----------+----------\n # | primer_nombre | apellido  | trabajo\n---+---------------+-----------+----------\n 0 | Octavia       | Butler    | Writer\n 1 | Bob           | Ross      | Painter\n 2 | Antonio       | Vivaldi   | Composer\n---+---------------+-----------+----------\n')])])]),o("p",[a._v("Ahora que tenemos nuestros datos en una tabla podemos usar todos los comandos que hemos usado en tablas antes:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open gente.txt | lines | split column " | " primer_nombre apellido trabajo | sort-by primer_nombre\n---+---------------+-----------+----------\n # | primer_nombre | apellido  | trabajo\n---+---------------+-----------+----------\n 0 | Antonio       | Vivaldi   | Composer\n 1 | Bob           | Ross      | Painter\n 2 | Octavia       | Butler    | Writer\n---+---------------+-----------+----------\n')])])]),o("p",[a._v("Hay otros comandos que puedes usar para trabajar con cadenas:")]),a._v(" "),o("ul",[o("li",[a._v("str")]),a._v(" "),o("li",[a._v("lines")]),a._v(" "),o("li",[a._v("size")])]),a._v(" "),o("p",[a._v("También hay un conjunto de comandos auxiliares que podemos llamar si conocemos de antemano que los datos tienen una estructura que Nu debería de entender. Por ejemplo, abramos un Rust archivo lock:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open Cargo.lock\n# This file is automatically @generated by Cargo.\n# It is not intended for manual editing.\n[[package]]\nname = "adhoc_derive"\nversion = "0.1.2"\n')])])]),o("p",[a._v("The "),o("code",[a._v("from")]),a._v(" command can be used for each of the structured data text formats that Nu can open and understand by passing it the supported format as a subcommand.")]),a._v(" "),o("p",[a._v('El archivo "Cargo.lock" es un archivo en formato .toml pero la extensión del archivo no es .toml. Está bien, podemos usar el comando '),o("code",[a._v("from")]),a._v(" usando el subcomando "),o("code",[a._v("toml")]),a._v(":")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> open Cargo.lock | from toml\n----------+-------------\n metadata | package\n----------+-------------\n [object] | [405 items]\n----------+-------------\n")])])]),o("p",[a._v("El comando "),o("code",[a._v("from")]),a._v(" se puede usar para cada dato estructurado de formatos de texto que Nu pueda abrir y entender pasando el formato soportado como subcomando.")]),a._v(" "),o("h2",{attrs:{id:"abriendo-en-modo-crudo"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abriendo-en-modo-crudo"}},[a._v("#")]),a._v(" Abriendo en modo crudo")]),a._v(" "),o("p",[a._v("Mientras es útil poder abrir un archivo e inmediatamente trabajar con una tabla de sus datos, esto no siempre es lo que deseas hacer. Para llegar al texto subyacente, el comando "),o("code",[a._v("open")]),a._v(" puede tomar una bandera opcional:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v('> open Cargo.toml --raw\n[package]\nname = "nu"\nversion = "0.1.3"\nauthors = ["Yehuda Katz <wycats@gmail.com>", "Jonathan Turner <jonathan.d.turner@gmail.com>"]\ndescription = "A shell for the GitHub era"\nlicense = "MIT"\n')])])]),o("h2",{attrs:{id:"abriendo-urls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#abriendo-urls"}},[a._v("#")]),a._v(" Abriendo URLs")]),a._v(" "),o("p",[a._v("Además de cargar archivos desde tu archivos de sistema, también puedes usar el comando "),o("code",[a._v("fetch")]),a._v(" proporcionando una URL. Se cargará el contenido de la URL por internet y devolverá:")]),a._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[a._v("> fetch http://www.andresrobalino.com/feed.xml\n----------\n rss\n----------\n [1 item]\n----------\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);