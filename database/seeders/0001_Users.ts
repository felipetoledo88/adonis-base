import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Users from 'App/Models/Users'

export default class UsersSeeder extends BaseSeeder {

    public async run() {
        await Users.createMany([
            {
                profile_id: 2,
                name: 'Felipe Toledo',
                email: 'felipetoledo88@gmail.com',
                password: 'toFixed(1)',
            },
        ])
    }
}