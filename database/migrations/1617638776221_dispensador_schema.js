'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DispensadorSchema extends Schema {
  up () {
    this.create('dispensadors', (table) => {
      table.increments()
      table.string('codigo', 254).notNullable().unique()
      table.string('nombre', 254).notNullable()
      table.integer('usuario', 254).references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('dispensadors')
  }
}

module.exports = DispensadorSchema
