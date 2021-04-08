'use strict'
const Usuario = use('App/Models/UserMDB')

class UsuarioMdbController {
async index({response}){
    const data = await Usuario.find({});
    try{
        return response.status(200).json(data);
    }catch (e){
        return response.status(400).send({'Error': e});
    }
}

async registrar({request, response}){
    const data = await Usuario.find({});
    const idN = data.lenght + 1
    const id = idN.toString()
    const rules = {
        id: 'required|integer',
        usuario: 'required|string',
        password: 'required|string'
    }

    const validation = await validate(request.all(), rules)
    if (validation.fails()){
        return validation.messages()
    }else{
        try{
            const{id, usuario, password} = request.only([
                'id',
                'usuario',
                'password'
            ])
            console.log(usuario)
            await Usuario.create({
                id: id,
                usuario: usuario,
                password: password
            })
            console.log(id)
            return response.status(201).send({message: 'El usuario se ha creado correctamente'})
        }catch (e){
            return response.status(400).send({'Error': e.toString()});
        }
    }
}


}

module.exports = UsuarioMdbController
