const fs = require('fs');

let listadoporhacer = [];
let listadoporhacer2 = [];
const guardarDb = () => {

    let data = JSON.stringify(listadoporhacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDb = () => {

    try {
        listadoporhacer = require('../db/data.json');

    } catch (error) {
        listadoporhacer = [];

    }


}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {

        descripcion,
        completado: false
    };

    listadoporhacer.push(porHacer);
    guardarDb();
    return porHacer;

}


const getListado = (descripcion) => {
    cargarDb();
    if (descripcion == '1') {
        for (let tarea of listadoporhacer) {
            if (tarea.completado == false) {
                listadoporhacer2.push(tarea);
            }
        }
        listadoporhacer = listadoporhacer2;
    }
    return listadoporhacer;


}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoporhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })
    if (index >= 0) {
        listadoporhacer[index].completado = completado;
        guardarDb();
        return true;

    }
}

const borrar = (descripcion) => {
    cargarDb();
    let nuevoListado = listadoporhacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoporhacer.length == nuevoListado.length) {
        return false;
    } else {
        listadoporhacer = nuevoListado;
        guardarDb();
        return true;
    }
}

module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
}