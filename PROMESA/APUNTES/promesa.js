//DÍA 1
// let promesa = new Promise((resolve, reject) => {                              //SIEMPRE DEBE TENER AL MENOS UNO DE LOS PARÁMETROS
//     let resuelto = false;
//     if(resuelto){
//         resolve([1,2,3,4,5]);
//     }else{
//         reject("Error");
//     }
// });

// promesa
// .then((datos) => {                                                            //SIEMPRE SE ESCRIBE CON .then YA QUE TENEMOS QUE EJECUTAR ESTO TRAS LA PROMESA Y HACEMOS UN CALLBACK DE DATOS
//     console.log(datos);
// }).catch((error) => {                                                         //CONTROLAMOS LA EXCEPCIÓN O ERROR
//     console.log(error)
// });



//DÍA 2
// let promesa = new Promise((resolve,reject) => {
//     let cond = false;
//     setTimeout(() => {
//         if(cond){
//             resolve("Darte dinero")
//         }else{
//             reject("No tengo tu dinero");
//         }
//     }, 1000);
// });

// promesa.then((loPrometido) => {
//     console.log(loPrometido);
// }).catch((error) => {
//     console.log(error);
// });



const datos = [
    {
        id: 1,
        nombre: "Pepe",
    }
];

let leerDatos = new Promise((resolve) => {
    setTimeout(() => {
        resolve(datos);
    }, 2000);
});

leerDatos.then(respuesta => console.log(respuesta));