import inquirer from "inquirer"
import colors from 'colors'

const preguntas = {
    type: 'list',
    name: 'opcion',
    message: '¿Que desea hacer?',
    choices: [{
        name: `${'1.'.blue} Agregar Tarea`,
        value: '1'
    }, {
        name: `${'2.'.blue} Listar Tareas`,
        value: '2'
    }, {
        name: `${'3.'.blue} Listar Tareas Completadas`,
        value: '3'
    }, {
        name: `${'4.'.blue} Listar Tareas Pendientes`,
        value: '4'
    }, {
        name: `${'5.'.blue} Completar Tarea(s)`,
        value: '5'
    }, {
        name: `${'6.'.blue} Borrar Tarea`,
        value: '6'
    }, {
        name: `${'0.'.blue} Salir`,
        value: '0'
    }]
}

export const mostrarOpciones = async() => {
    console.clear()
    console.log('======================'.blue)
    console.log('Aplicacion de Tareas'.blue)
    console.log('======================'.blue)

    const opc = await inquirer.prompt(preguntas)

    return opc
}

export const pausa = async() => {
    console.log('\n')
    await inquirer.prompt({
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`
    })
}

export const leerInput = async(mensaje) => {
    const desc = await inquirer.prompt({
        type: 'input',
        name: 'desc',
        message: mensaje,
        validate(input){
            if(input.length === 0){
                return 'La descripción es obligatoria'
            }

            return true
        }
    })

    return desc
}

export const mostrarCheckBox = async(tareas) => {
    const opciones = tareas.map(tarea => {
        return {
            name: ` ${tarea.descripcion}`,
            value: tarea.id,
            checked: tarea.fechaCompletado ? true : false
        }
    })

    const ids = await inquirer.prompt({
        type: 'checkbox',
        name: 'ids',
        message: 'Seleccione',
        choices: opciones
    })

    return ids
}

export const borrarTarea = async(tareas) => {
    let choices = tareas.map(tarea => {
        return {
            name: tarea.descripcion,
            value: tarea.id
        }
    })

    choices = [...choices, {name: 'Cancelar', value: '0'}]

    const tarea = await inquirer.prompt({
        type: 'list',
        name: 'tareaId',
        message: 'Escoger tarea',
        choices
    })

    return tarea
}

export const confirmar = async(mensaje) => {
    const {ok} = await inquirer.prompt({
        type: 'confirm',
        name: 'ok',
        message: mensaje
    })

    return ok
}