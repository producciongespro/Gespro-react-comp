# Gespro-react-comp
 Conjunto de componentes en **React** para desarrollo de aplicativos en ****GESPRO****
 > Componentes que contiene:
 
 1. Botones 
 2. Buscador 
 3. Calendario
 4. Login
 5. Tabla 
 6. Tarjetas
 7. Calificame

 ## 7. Calificame
Contiene el botón Calificame para los aplicativos.

---
> Pasos:
1. Descargar y copiar la carpeta **"Calificame"** en la carpeta componenetes del proyecto.

2. Importar Calificame en el componenete donde se va a utilizar:

  	`import Calificame from "./Calificame/Calificame" `

3. Crear filas y columnas Bootstrap para contener al componente:

`      <div className="row">
      <div className="col-12 text-center ">
          <Calificame />
      </div>
    </div>`

4. **Parámetros:** El componente tiene 4 parámetros:
- **idApp={}** Numéro que indica el id del aplicativo generado por el generador.

- **tipoBtn=" "** Texto que indica el tipo de la imagen que carga. Hay tres valores: ***gris*** (iamgen en escala de grises), ***dif*** (imagen difuminada) y ***full*** (Imagen original en full color)

- **tamano=""** Letra que indica el tamñano en que se desea desplegar la imagen. Hay tres tamaños: ***p*** (Pequeño), ***m*** (mediano) y ***g*** (grande)

- **flotante={}** Número que ndica la posición del elemento "flotante". Recibe números del 1 al 4. Van en orden de las manecilas del reloj. Si selecciona el 1 se despliega en la esquina superior izquierda, el 2: esquina superior derecha, 3: inferior derecha y 4: inferior izquierda.

Cabe aclarar que esta propiedad **no es requerida** y se utiliza solamente si desea "fijar" el botón en una posición. Cuando se utiliza esta propiedad, el componente no respeta las filas ni columnas Bootstrap.

A continuación tenemos dos ejemplos de código del componente: 

>Ejemplo 1: 
`   <div className="row">
      <div className="col-12 text-center ">
          <Calificame idApp={44} tipoBtn="gris"  tamano="g"  flotante={2}  />
      </div>
    </div>`

>Ejemplo 2:
   `<div className="row">
      <div className="col-12 text-center ">
          <Calificame idApp={44} tipoBtn="gris"  tamano="g"    />
      </div>
    </div>`

