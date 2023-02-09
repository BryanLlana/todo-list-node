import {v4} from 'uuid'

class Tarea{
    constructor(descripcion){
        this.descripcion = descripcion
        this.fechaCompletado = null
        this.id = v4()
    }
}

export default Tarea