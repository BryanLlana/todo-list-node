import fs from 'fs'

export const leerData = () => {
    if(!fs.existsSync('./data/tareas.json')){
        return null
    }

    const info = fs.readFileSync('./data/tareas.json', {encoding: 'utf-8'})
    const data = JSON.parse(info)
    return data
}

export const guardarData = (data) =>{
    fs.writeFileSync('./data/tareas.json', JSON.stringify(data))
}