'use strict'
const Perrito = use('App/Models/Perrito')
class PerritoController {
//===================================== REGISTRAR PERRITOS =======================================
    async crear({request, response, auth}){
        const data = request.only(['nombre'])

        const imagen = request.file('foto', {
            types: ['image'],
            size: '2mb'
          })
          const nombreF = data['nombre'] + "." + imagen.extname;

          await imagen.move('./public/fotosperritos', {
            name: nombreF,
            overwrite: true
          })

          if(! imagen.moved())
          {
              return response.status(422).send({
                  res:false,
                  message: foto.error()
              })
          }

        const usuario = await auth.getUser()
        const perr = new Perrito()
        perr.nombre = data['nombre']
        perr.foto = nombreF
        perr.due = usuario['usuario']
        await perr.save()
        return response.created({
            data,due:usuario
        })
    }
//===================================== ACTUALIZAR PERRITOS =======================================
    async actualizar({params, request,response}){
        const data = request.only(['id','nombre', 'foto'])
        const posto = new Perrito()
        posto.id = data['id']
        posto.nombre = data['nombre']
        
        const imagen = request.file('foto', {
            types: ['image'],
            size: '2mb'
          })

          const nombreF = data['nombre'] + "." + imagen.extname;
          await imagen.move('./public/fotosperritos', {
            name: nombreF,
            overwrite: true
          })

          if(! imagen.moved())
          {
              return response.status(422).send({
                  res:false,
                  message: foto.error()
              })
          }
        
        if (await Perrito.query()
        .where('id', posto.id)
        .update({'nombre': posto.nombre, 'foto': nombreF, 'updated_at': Date()})){
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
    //=====================================SELECT PERRITOS =======================================
    async getperritos({response, auth}){
        const usuario = await auth.getUser()
        const data = usuario.usuario
        const perrito = await Perrito.query().where('due', data).fetch()

        return response.ok({
            status: true,
            data: perrito
        })
    }
}

module.exports = PerritoController
