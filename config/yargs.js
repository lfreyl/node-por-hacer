const opts = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Descripcion de la tarea por hacer'

    }
}
const opts1 = {
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'marca como completado o pendiente la tarea'

    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Descripcion de la tarea por hacer'
    }
}
const opts2 = {
    descripcion: {
        alias: 'd',
        demand: false,
        desc: 'Descripcion de la tarea por hacer'

    }
}
const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', opts)
    .command('listar', 'lista un elemento por hacer', opts2)
    .command('actualizar', 'actualizar', opts1)
    .command('borrar', 'borrar un elemento', opts)
    .help()
    .argv;


module.exports = {
    argv
}