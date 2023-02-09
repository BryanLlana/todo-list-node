import Tarea from "./Tarea.js"

class Tareas{

    get listadoArreglo(){
        let listadoArreglo = []
        Object.keys(this.listadoTareas).forEach(id => {
            listadoArreglo = [...listadoArreglo, this.listadoTareas[id]]
        })
        return listadoArreglo
    }

    constructor(){
        this.listadoTareas = {}
    }

    cargarDataTareas(tareas){
        tareas.forEach(tarea => {
            this.listadoTareas[tarea.id] = tarea
        })
    }

    agregarTarea(descripcion){
        const tarea = new Tarea(descripcion)
        this.listadoTareas[tarea.id] = tarea
    }

    borrarTarea(id){
        if(this.listadoTareas[id]){
            delete this.listadoTareas[id]
        }
    }

    mostrarListadoTareas(){
        console.log()
        this.listadoArreglo.forEach((tarea, idx) => {
            console.log(`${String(idx+1).blue}${'.'.blue} ${tarea.descripcion} :: ${tarea.fechaCompletado ? 'Completado'.green : 'Pendiente'.red}`)
        })
    }

    mostrarTareasCompletadas(){
        console.log()
        let contador = 1
        this.listadoArreglo.forEach(tarea => {
            const {descripcion, fechaCompletado} = tarea
            if(tarea.fechaCompletado){
                console.log(`${String(contador).blue}${'.'.blue} ${descripcion} :: ${fechaCompletado}`)
                contador++
            }
        })
    }

    mostrarTareasPendientes(){
        console.log()
        let contador = 1
        this.listadoArreglo.forEach(tarea => {
            const {descripcion, fechaCompletado} = tarea
            if(!tarea.fechaCompletado){
                console.log(`${String(contador).blue}${'.'.blue} ${descripcion} :: ${'Pendiente'.red}`)
                contador++
            }
        })
    }

    actualizarEstadoTareas(ids){
        this.listadoArreglo.forEach(tarea => {
            if(ids.includes(tarea.id)){
                this.listadoTareas[tarea.id].fechaCompletado = new Date().toISOString()
            }else{
                this.listadoTareas[tarea.id].fechaCompletado = null
            }
        })
    }
}

export default Tareas