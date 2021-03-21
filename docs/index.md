# Informe Práctica 5. Arrays, tuplas y enumerados
## 1. Introducción

Informe de la quinta práctica de la asignatura de **Desarrollo de Sistemas Informáticos**. En la práctica propuesta se ha realizado 3 ejercicios diversos de typescript para realizar la introdución a los diversos tipos de datos **objetos**, **clases** e **interfaces**.

## 2. Objetivos

El objetivo principal de la práctica es la realización de diversos ejercicios para aprender los fundamentos de Typescript y Javascript. Para conseguirlo se tienen los siguientes ejercicios:

* Ejercicio 1 Pokedex
* Ejercicio 2 Gestor bibliográfico
* Ejercicio 3 Medios de transporte


## 3. Desarrollo

### 3.1 Tareas Previas

Para el desarrollo de la práctica cómo tal primero hay que hacer unas preparaciones previas, hay que aceptar la asignación de la práctica 5 y preparar el entorno del proyecto la práctica 5, para esto es necesario crear y configurar los archivos *package.json* y *tsconfig.jon* así cómo crear la **estructura de directorios**. Además de seguir las pautas para generar la documentación por **typedoc** y los **tests unitarios** realizados **mocha** y **chai**. 

### [Ejercicio 1 Pokedex.](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101123677/tree/master/src/ejercicio-1)

En este ejercicio creamos las clases Pokemon y la clase Combat

En la clase Pokemon definiria los atributos de cada pokemon, recibe 8 privados paramteros, un nombre, un peso, una altura, un tipo, el ataque, la defensa, la velocidad y la vidad. Contamos luego con 16 métodos, 8 getters y 8 setters para conseguir las variables y modificarlas.

En la clase Combat llevará a cabo todo el combate entre los dos pokemons seleccionados, recibe dos objetos de la clase Pokemon, Pokemon1 y Pokemon2.  Contamos a su vez con dos métodos, el método start y el método damage.

El método start lleva a cabo el combate entre los pokemons. Empezamos inicianlizando una variable booleana ``healt_zero`` a false, una variable number ``turn`` a uno, para ir contando cada turno y una variable de tipo number llamada ``winner`` a 0 para retornarla al final del método y saber que pokemon es el victorioso. Entramos en un bucle  while cuya condicioón es que ``healt_zero`` sea false, una vez que la vida de uno de los dos pokemon sea 0 o menor que 0 esta variable booleana se pondrá a true, en el bucle while inicializamos dos variables tipo number para comprobar quien ataca primero y quien ataca segundo dependiendo de la velocidad de ambos pokemon, cuando ataque uno de los pokemon se calculará el daño que hace a su contricante llamando al método damage y con los puntos de daño realizados se los restamos a la vida del pokemon contrincante.

El método damage es una copia del ejercicio 9 de la práctica 3, calcula el daño que hace un pokemon a su contrincante pasandole por parametros el tipo del pokemon atacante, el tipo del pokemon contrincante, el ataque del pokemon y la defensa del pokemon contrincante. Retornando el daño que se realiza.

### [Ejercicio 2 Gestor bibliográfico.](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101123677/tree/master/src/ejercicio-2)

En este ejercicio creamos las clases Article y Gestor.

En la clase Article se definene los atributos de un articulo. Cuenta con 8 atributos, un string que sería el titulo, un array de string de string que indican los nombres de los autores, un array de string que indican el email de los autores, un array de string de palabras clave, un string que sería el abstrac, un tipo Date que sería la fecha de publicación, un tipo string que sería la editorial y un tipo number que serían las citaciones. Contamos también con un método APAFormat.

El método APAFormat a partir de los atributos de la clase consigue el formato APA para revista electrónica sin DOI y lo retornamos como un string.

En la clase Gestor llevamos a cabo la definición de un gestor bibliográfico, recibe un array de objetos de la clase Article y contiene tres métodos, table, filter y export.

El método table muestra por pantalla los títulos de los diferentes articulos en formato tabla, mostrando el indice y el titulo de cada artículo usando el ``console.table``

El método filter filtra los objetos del vector de Article pasandole por parametro de tipo string que sería el filtro y filtraría por editorial, palabras clave, fechas y autores. Esto lo hacemos creando un array de tipo Article vacio llamado ``filtrado`` y en un ``forEach`` que recorra el array que tiene como atributo la clase, en cada objeto buscaremos si la palabra que usamos para filtrar se encuentra en los diferentes campos del objeto, si es así realizamos un push en ``filtrado`` añadiendo el objeto en cuestión, luego mostramos por pantalla la tabla filtrada y llamamos al método export.

El método export exporta el formato APA para revista electrónica sin DOI, recibe un array de objetos de Article y retorna un array de string donde cada string es el equivalente al formato APA de cada objeto.


### [Ejercicio 3 Medios de transporte.](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct05-objects-classes-interfaces-alu0101123677/tree/master/src/ejercicio-3)

En este ejercicio 


## 4. Conclusiones

En conclusión, este tipos de ejercicios para ir aprendiendo y cogiendo buenas praxis en **Typescript** y si ya se tiene conocimiento en programación son bastante entretenidos, útiles y diveros, aunque se van haciendo más complicados que en ejercicios anteriores, pero se pueden llegar a las soluciones de diversas maneras igual que en la práctica anterior, además de profundizar en la utilización de **objetos**, **clases** e **interfaces**. 

## 5. Bibliografía

**[Guión Práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/):** Guión de la práctica 4 de la asignatura de Desarrollo de Sistemas Informáticos.

**[Apuntes de objetos, clases e interfaces](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-objects-classes-interfaces.html):** Apuntes de objetos, clases e interfaces en typescript.

