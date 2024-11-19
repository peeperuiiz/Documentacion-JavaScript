
let promesa = new Promise((resolve, reject) => {                                        //SIEMPRE DEBE TENER AL MENOS UNO DE LOS PARÁMETROS

    let resuelto = false;

    if(resuelto){
        resolve([1,2,3,4,5]);
    }else{
        reject("Error");
    }
});

promesa
.then((datos) => {                                                                      //SIEMPRE SE ESCRIBE CON .then YA QUE TENEMOS QUE EJECUTAR ESTO TRAS LA PROMESA Y HACEMOS UN CALLBACK DE DATOS
    console.log(datos);
}).catch(error => {                                                                     //CONTROLAMOS LA EXCEPCIÓN O ERROR
    console.log(error)
});