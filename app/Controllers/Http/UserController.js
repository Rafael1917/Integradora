'use strict'
const User = use('App/Models/User')
class UserController {
//===================================== REGISTRAR USUARIOS =======================================
    async crear({request, response}){
        const data = request.only(['usuario', 'password'])
        await User.create(data)
        return response.created({
            message: "Usuario registrado"
        })
    }
//===================================== ACTUALIZAR USUARIOS =======================================
    async actualizar({ request,response,auth}){
        const data = request.only(['usuario', 'password'])
        await User.save(data)
        return response.save({
            message: User
        })
    }
 //===================================== SELECT USUARIOS =======================================
    async getusuarios({response}){
        const usuario = await User.query().fetch()
        return response.ok({
            status: true,
            data: usuario
        })
    }
}

module.exports = UserController
