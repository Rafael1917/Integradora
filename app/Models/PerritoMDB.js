'use strict'

const BaseModel = use('MongooseModel')

const BaseModel = use('MongooseModel')
const mongoose = use('Mongoose')
const {Schema} = mongoose


/**
 * @class PerritoMDB
 */
class PerritoMDB extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'PerritoMDBHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * PerritoMDB's schema
   */
  static get schema () {
    return {

    }
  }
}

PerritoMDBSchema.loadClass(PerritoMDB)
module.exports = mongoose.model('UserMDB', PerritoMDBSchema)
