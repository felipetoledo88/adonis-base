import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Users from 'App/Models/Users'

export default class UsersSeeder extends BaseSeeder {

    public async run() {
        await Users.createMany([
            {
                profile_id: 2,
                name: 'Higor Soares',
                email: 'soares@swiftsoft.com.br',
                password: 'toFixed(1)',
            },
            {
                profile_id: 2,
                name: 'Jean Gustavo',
                email: 'jean@swiftsoft.com.br',
                password: 'toFixed(1)',
            },
        ])
    }
}