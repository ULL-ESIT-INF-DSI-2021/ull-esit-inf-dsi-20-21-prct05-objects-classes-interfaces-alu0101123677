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

En este ejercicio creamos la función decodeResistor que recibe una cadena string con los colores de la resistencia y retornar un number con el valor de la resistencia. 

Declaramos dos array, uno que contiene los diferentes colores que vamos a usar y otro array que contendrá sus valores númericos correspondientes.

Lo siguiente es recorrer todo el array de colores y igualar cada color con el string correspondiente del array que ha recibido la función, si son iguales se le asigna a un string vacio el valor correspondiente, esto lo hacemos para la primera y segunda posición del array pasado por paramétros y luego concatenamos los dos string conseguidos y los retornamos como si fuera de un tipo number.


### Ejercicio 2 Palabras encadenadas en un array.

En este ejercicio creamos la función meshArray que recibe un array de string con diversas palabras y retorna un string con un mensaje de error o con las partes encadenadas del array.

Declaramos una variable tipo string en donde se guardará la cadena concatenada.

Luego realizamos un bucle for que dure tantas posiciones tenga el array pasado por parametros - 1 y en donde creamos y asignamos las variables que vamos a usar, en este caso dos variables de tipo string y dos varaibles de tipo number. Continuamos con un bucle while que irá desde la última letra de la primera palabra hasta su primera letra, comprobando si coincide con la primera letra de la segunda palabra. Una vez encontrada entramos en un bucle for que va desde la posición en la que se realizo la coincidencia avanzando para ir comprobando letra por letra.


### Ejercicio 3 Calcular la media y concatenar cadenas.

En este ejercicio creamos la función meanAndConcatenate que recibe un array de string con números y letras, y retorna un array de string que contiene la media de los números dados y la concatenación de las letras.

declaramos dos string, un string contiene los números del 0 al 9 y el otro string contiene el alfabeto tanto en minusculas como en mayusculas.

Lo que haremos es realizar un bucle for que recorra todo el array dado por parametro y vaya comparando cada elemento con los string declarados con anterioridad, si se trata de un numero se va añadiendo incrementalmente a una variable tipo number y aumentando un contador, si se trata de una letra se va concatenando a un string vacio inicialmente. Cuando se termine de recorrer todo el array se procede a conseguir la media de la suma de todos los números sumados y se añaden a un array vacio, tanto la media de los números como la concatenación de las letras y se retorna.


## 4. Conclusiones

En conclusión, este tipos de ejercicios para irse iniciando en **Typescript** y si ya se tiene conocimiento en programación son bastante entretenidos, útiles y diveros, si es cierto, que hay alguno que otro que son más complicados, pero se pueden llegar a las soluciones de diversas maneras igual que en la práctica anterior, además de profundizar en la utilización de **arrays**, **tuplas** y **enumerados**. 

## 5. Bibliografía

**[Guión Práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/):** Guión de la práctica 4 de la asignatura de Desarrollo de Sistemas Informáticos.

**[Apuntes de objetos, clases e interfaces](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-objects-classes-interfaces.html):** Apuntes de objetos, clases e interfaces en typescript.

