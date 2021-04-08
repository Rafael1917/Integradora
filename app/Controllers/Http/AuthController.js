'use strict'

class AuthController {

    async login({request, response, auth}){
        const {usuario, password} = request.only(['usuario', 'password'])
        const token = await auth.withRefreshToken().attempt(usuario,password)

        return response.ok(token)
    }
    async getUser({response, auth}){
        const user = await auth.getUser()

        return response.ok({
            data: user['id']
        })
    }

}

module.exports = AuthController
