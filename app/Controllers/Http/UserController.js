'use strict'
const User = use('App/Models/User')
class UserController {

    async crear({request, response}){
        const data = request.only(['usuario', 'password'])
        await User.create(data)
        return response.created({
            status: "Usuario registrado"
        })
    }

    async actualizar({params, request,response}){
        const data = request.only(['id','usuario', 'password'])
        const posto = new User()
        posto.id = data['id']
        posto.username = data['usuario']
        posto.contra = data['password']
        
        if (await User.query()
        .where('id', posto.id)
        .update({'usuario': posto.username, 'password': posto.contra, 'updated_at': Date()})){
         return response.status(200).json({
             status: true,
             message: "Usuario actualizado"
         })
        }
        return response.status(400).json({
            status: false,
             message: "Usuario no actualizado"
        })
    }

}

module.exports = UserController
