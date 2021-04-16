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
        const {usuario} = await request.only(['usuario'])
        const {password} = await request.only(['password'])

        let user = await auth.getUser()
    
        if (!user.id) {
          return response.status(400).send(false)
        }
    
        user.usuario = usuario
        user.password = password
    
        if (!await user.save()) {
          return response.status(500).send(false)
        }
    
        return response.status(200).send("Usuario actualizado correctamente")
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
