'use strict'
const Perrito = use('App/Models/Perrito')
class PerritoController {

    async crear({request, response, auth}){
        const data = request.only(['nombre', 'foto'])
        const usuario = await auth.getUser()
        const perr = new Perrito()
        perr.nombre = data['nombre']
        perr.foto = data['foto']
        perr.due = usuario['usuario']
        await perr.save()
        return response.created({
            data,due:usuario
        })
    }

    async actualizar({params, request,response}){
        const data = request.only(['id','nombre', 'foto'])
        const posto = new Perrito()
        posto.id = data['id']
        posto.nombre = data['nombre']
        posto.foto = data['foto']
        
        if (await Perrito.query()
        .where('id', posto.id)
        .update({'nombre': posto.nombre, 'foto': posto.foto, 'updated_at': Date()})){
         return response.status(200).json({
             status: true,
             message: "Los datos del perrito han sido actualizados"
         })
        }
        return response.status(400).json({
            status: false,
             message: "No se han podido actualizar los datos del perrito"
        })
    }
}

module.exports = PerritoController
