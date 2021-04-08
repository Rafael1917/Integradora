'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class InfoDispensador extends Model {   
    dispensador(){
        this.belongsTo('App/Models/Dispensador')
    }
}

module.exports = InfoDispensador
