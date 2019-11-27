# Data Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Problemática](#2-problemática)
* [3. Web - Pokedata](#3-web---pokedata)
* [4. Diseño de la Interfaz de Usuario](#4-diseño-de-la-interfaz-de-usuario)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender, procesar y mostrar estos datos. Una manera
simple de hacerlo es creando _interfaces_ y _visualizaciones_.

En la siguiente imagen, podrás ver cómo con la data que que se ve en la parte
izquierda se puede construir (a la derecha) una interfaz amigable y comprensible
para el usuario.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

\* Puedes ver el detalle de la data en este [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
y la interfaz construida en este [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## 2. Problemática.

El juego Pokémon Go, permite a los usuarios convertirse en maestros Pokémon, 
atrapar pokémon, combatir, competir en gimnasios Pokémon, etc. Para poder lograrlo 
los usuarios necesitan tener información adicional, que el juego no brinda. Por ejemplo, 
necesitan conocer cuáles son los Pokémon que tienen mayor tiempo de aparición, cuáles 
son los que necesitan menos caramelos para evolucionar además de poder clasificarlos por 
sus tipos y debilidades.


## 3. Web - Pokedata.

Pokedata es una web dedicada a Pokémon Go, que permite visualizar a los 151 Pokémon de la región Kanto, 
además de brindar información útil para el jugador, permitiéndoles:

* Realizar filtros por tipo y debilidad
* Ordenar alfabéticamente
* Ordenar por número de caramelos
* Saber el top 10 de Pokémon con mayor tiempo de aparición.


### Historias de usuario

#### Historia 1:

*"Yo como jugador de Pokémon GO, quiero poder ver a todos los personajes de 
la región de Kanto al momento de entrar a la web"*

#### Historia 2:

*"Yo como jugador de Pokémon GO, me gustaría ver cada pokemon a través de 
un filtro de tipos y debilidades"*

#### Historia 3

*"Yo como jugador de Pokémon GO, quiero ver todos los pokemon y poder ordenarlos
alfabéticamente o por número de caramelos"*

#### Historia 4:

*"Yo como jugador de Pokémon GO, quiero ver información de los pokémon que están
en el TOP 10 de frecuencia de aparición"*


## 4. Diseño de la Interfaz de Usuario

### Prototipos Baja y Alta Fidelidad

**Primeros bocetos:**

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo_Prueba_Web1.jpg)

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo_Prueba_Web2.jpg)

Se hicieron pruebas con usuarios y tomando en cuenta las sugerencias, se realizaron cambios.

**Prototipos baja fidelidad - Web.**

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo_Baja%20Fidelidad%20Web0.jpg)

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo_Baja%20Fidelidad%20Web2.jpg)

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo_Baja%20Fidelidad%20Web1.jpg)

**Prototipos baja fidelidad - Móvil.**

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo_Baja%20Fidelidad%20Movil1.jpg)

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo_Baja%20Fidelidad%20Movil2.jpg)

Se hicieron pruebas con usuarios y tomando en cuenta las sugerencias, se realizaron cambios.

**Prototipo alta fidelidad - Web.**

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Historia-1.jpg)

**Prototipo alta fidelidad - Móvil.**

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Prototipo%20de%20Alta%20Fidelidad%20-%20M%C3%B3vil.png)

Se hicieron pruebas con usuarios y tomando en cuenta las sugerencias, se realizaron cambios.

**Última versión web:**

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Version%20Web.jpg)

**Última versión móvil:**

![](https://raw.githubusercontent.com/claudiaret/LIM011-data-lovers/poke-rama/Prototipos%20Pokedata/Versi%C3%B3n%20M%C3%B3vil.png)


## 5. Objetivos de aprendizaje

El objetivo principal de este proyecto es que, entendiendo las necesidades de
tus usuarios, aprendas a diseñar y construir una interfaz web donde se pueda
visualizar y manipular data.

Revisa la lista y reflexiona sobre los objetivos que conseguiste en el
proyecto anterior. Piensa en eso al decidir tu estrategia de trabajo individual
y de equipo.

### UX

- [x] Diseñar la aplicación pensando y entendiendo al usuario.
- [x] Crear prototipos para obtener _feedback_ e iterar.
- [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
- [x] Planear y ejecutar _tests_ de usabilidad.

### HTML y CSS

- [x] Entender y reconocer por qué es importante el HTML semántico.
- [x] Identificar y entender tipos de selectores en CSS.
- [x] Entender como funciona `flexbox` en CSS.
- [x] Construir tu aplicación respetando el diseño planeado (maquetación).

### DOM

- [x] Entender y reconocer los selectores del DOM (querySelector | querySelectorAll).
- [x] Manejar eventos del DOM. (addEventListener)
- [ ] Manipular dinámicamente el DOM. (createElement, appendchild, innerHTML, value)

### Javascript

- [ ] Manipular arrays (`filter` | `map` | `sort` | `reduce`).
- [ ] Manipular objects (key | value).
- [x] Entender el uso de condicionales (`if-else` | `switch`).
- [x] Entender el uso de bucles (`for` | `forEach`).
- [ ] Entender la diferencia entre expression y statements.
- [x] Utilizar funciones (parámetros | argumentos | valor de retorno).
- [ ] Entender la diferencia entre tipos de datos atómicos y estructurados.
- [x] Utilizar ES Modules (`import` | `export`).

### Pruebas Unitarias (_testing_)
- [ ] Testear funciones (funciones puras).

### Git y GitHub
- [x] Ejecutar comandos de git (`add` | `commit` | `pull` | `status` | `push`).
- [x] Utilizar los repositorios de GitHub (`clone` | `fork` | gh-pages).
- [ ] Colaborar en Github (pull requests).

### Buenas prácticas de desarrollo
- [x] Organizar y dividir el código en módulos (Modularización).
- [x] Utilizar identificadores descriptivos (Nomenclatura | Semántica).
- [x] Utilizar linter para seguir buenas prácticas (ESLINT).


### Introspección de mis objetivos de aprendizaje

* Sé lo que es, para qué sirve, su contexto y cómo se espera que funcione.
* Lo hice en este proyecto y lo puedo explicar.
* Lo puedo volver a hacer en otro contexto/proyecto diferente.
* Qué propones para trabajar la siguiente semana.

***
