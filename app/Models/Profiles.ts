import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'

export default class Profiles extends BaseModel {
  public static table = 'profiles'

  @column({ isPrimary: true })
  public id: number

  @column()
  public secure_id: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  public deleted_at: DateTime;
  
  @beforeCreate()
  public static assignUuid(perfil: Profiles) {
    perfil.secure_id = uuidv4()
  }
}
