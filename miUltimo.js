alert ("mensaje enviado al navegador")
 let entrada = prompt ("ingresar alias")
    switch (entrada) {
        case "estilo esencial":
        alert ("hola empresa estilo esencial");
        break;

        case "jeans esencial":
        alert ("hola empresa estilo esencial");
        break;

        default:
        alert("quien sos?");
        break;
    }

/* operador IN y FOR */

const dueño = {
    nombre : "Estilo Esencial",
    productos : "Ropa de abrigo",
    temporada : "invierno",
}
for (const propiedad in dueño){
    console.log(dueño[propiedad]);
}

localStorage.setItem("empresa" , "estilo esencial");
localStorage.setItem("edad" , [3 , 4]);
localStorage.setItem("direccion" , "celedonio flores 2474");

const compras = [
{id:1, nombre: "pantalones" , precio : 3000},
{id:2, nombre: "sweter" , precio : 2000},
{id:3, nombre: "camperas" , precio : 5000},
]
console.log(compras);

const productos = [
    {id:1, nombre: "pants"},
    {id:2, nombre: "sweaters"},
    {id:3, nombre: "jackets"},
]

console.log(productos);

function guardarLocal(clave, valor) {
    localStorage.setItem(clave, valor);
}
for ( const prenda of compras) {
 guardarLocal(prenda.id , JSON.stringify (prenda));
}
guardarLocal("lista de compras", JSON.stringify(compras));

/*podemos ir cambiando el presupuesto segun la compra*/

let resultado = 0;
function mostrar (){
    console.log("tu presupuesto dio como resultado = " + resultado);
}
function sumar(a , b, c){
    return a+b+c;
}
let a = sumar (3000, 2000, 5000 );
console.log(a);

/*ejemplo de prodcuto mas iva*/

const suma = (a , b) => a+b;
const resta = (a, b) => a-b;
const iva = x => x * 0.21;

let precioProducto = 3000;
let descuento = 50;
let nuevoPrecio = resta (suma(precioProducto, iva (precioProducto)), descuento)
console.log(nuevoPrecio);

/*New*/

function nuevosProductos(nombre, presupuesto){
    this.nombre = nombre;
    this.presupuesto = presupuesto;
}
const producto1 = new nuevosProductos("gorro de lana", 600);
const producto2 = new nuevosProductos("cuellito polar", 400);
console.log(producto1.nombre);
console.log(producto2.presupuesto);

/*clases*/
class direccion{
    constructor(calle, numero, localidad){
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
    }
    hablar(){
        console.log("calle:" + this.calle);
        console.log("numero:" + this.numero);
        console.log("localidad:" + this.localidad);
    }
}
const personal = new direccion("celedonio flores", 2474, "rafael calzada");
personal.hablar();






