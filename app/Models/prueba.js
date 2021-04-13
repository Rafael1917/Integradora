'use strict'

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')

const {Schema} = mongoose

const PruebaSchema = new Schema({
  nombre: String,
  apellido: String
})

/**
 * @class prueba
 */
class prueba extends BaseModel {

  static get schema () {
    return {}
  }
}

PruebaSchema.loadClass(prueba)

module.exports = mongoose.model('prueba', PruebaSchema)
