import { guardarData, leerData } from "./helpers/data.js"
import { borrarTarea, confirmar, leerInput, mostrarCheckBox, mostrarOpciones, pausa } from "./helpers/inquirer.js"
import Tareas from "./models/Tareas.js"

let opt
const tareas = new Tareas()

const tareasDB = leerData()

if(tareasDB){
    tareas.cargarDataTareas(tareasDB)
}

do{
    const {opcion} = await mostrarOpciones()
    opt = opcion

    switch (opt) {
        case '1':
            const {desc} = await leerInput('Descripción: ')
            tareas.agregarTarea(desc)
            break
        case '2':
            tareas.mostrarListadoTareas()
            break
        case '3':
            tareas.mostrarTareasCompletadas()
            break
        case '4':
            tareas.mostrarTareasPendientes()
            break
        case '5':
            const {ids} = await mostrarCheckBox(tareas.listadoArreglo)
            tareas.actualizarEstadoTareas(ids)
            break
        case '6':
            const {tareaId} = await borrarTarea(tareas.listadoArreglo)
            if(tareaId !== '0'){
                const ok = await confirmar('¿Esta seguro?')
                if(ok){
                    tareas.borrarTarea(tareaId)
                    console.log('Tarea borrada')
                }
            }
            break
        default:
            break
    }
    guardarData(tareas.listadoArreglo)
    if(opt !== '0'){
        await pausa()
    }
}while(opt !== '0')