// profiles
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PgrPerfis extends BaseSchema {
  protected tableName = 'profiles'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('secure_id', 36).notNullable()
      table.string('name', 255).notNullable()
      table.timestamps(true, true)
      table.timestamp('deleted_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
