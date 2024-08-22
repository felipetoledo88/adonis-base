import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, column, belongsTo, BelongsTo, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/Users'

export default class PasswordResets extends BaseModel {
  public static table = 'password_resets'

  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public token: string

  @column.dateTime({ autoCreate: true })
  public expires_at: DateTime

  @column.dateTime({ autoCreate: true})
  public created_at: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: true })
  public updated_at: DateTime

  @column.dateTime({ autoCreate: false, autoUpdate: false })
  public deleted_at: DateTime;
  
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @beforeSave()
  public static async hashPassword(usuario: PasswordResets) {
    if (usuario.$dirty.token) {
      usuario.token = await Hash.make(usuario.token)
    }
  }
}
