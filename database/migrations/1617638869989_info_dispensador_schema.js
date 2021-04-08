'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InfoDispensadorSchema extends Schema {
  up () {
    this.create('info_dispensadors', (table) => {
      table.increments()
      table.float('temperatura', 254).notNullable()
      table.integer('dispensador', 6).notNullable()
      table.float('nivel', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('info_dispensadors')
  }
}

module.exports = InfoDispensadorSchema
