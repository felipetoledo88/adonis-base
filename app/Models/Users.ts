import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Users extends BaseModel {
  public static table = 'users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: string

  @column()
  public profile_id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  public deleted_at: DateTime;

  @beforeCreate()
  public static assignUuid(usuario: Users) {
    usuario.secure_id = uuidv4()
  }

  @beforeSave()
  public static async hashPassword(usuario: Users) {
    if (usuario.$dirty.password) {
      usuario.password = await Hash.make(usuario.password)
    }
  }
}
