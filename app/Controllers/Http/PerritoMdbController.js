'use strict'
const Perrito = use('App/Models/UserMDB')
class PerritoMdbController {

    async index({response}){
        const data = await Perrito.find({});
        try{
            return response.status(200).json(data);
        }catch (e){
            return response.status(400).send({'Error': e});
        }
    }
    
    async registrar({request, response}){
        const data = await Perrito.find({});
        const idN = data.lenght + 1
        const id = idN.toString()
        const rules = {
            id: 'required|integer',
            nombre: 'required|string',
            foto: 'required|string',
            due: 'required|string'
        }
    
        const validation = await validate(request.all(), rules)
        if (validation.fails()){
            return validation.messages()
        }else{
            try{
                const{id, nombre, foto, due} = request.only([
                    'id',
                    'nombre',
                    'foto',
                    'due'
                ])
                console.log(nombre)
                await Perrito.create({
                    id: id,
                    nombre: nombre,
                    foto: foto,
                    due: foto
                })
                console.log(id)
                return response.status(201).send({message: 'El perrito se ha creado correctamente'})
            }catch (e){
                return response.status(400).send({'Error': e.toString()});
            }
        }
    }

}

module.exports = PerritoMdbController
