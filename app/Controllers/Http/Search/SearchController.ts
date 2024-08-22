import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export default class SearchController {
  public async search({ request, response }: HttpContextContract) {
    const query = request.input('query').toLowerCase()

    // Dados mockados de mensagens
    const messages = [
      {
        id: 1,
        content: 'Hello World',
        time: DateTime.local().set({ day: 25, hour: 16, minute: 22 }).toISO(),
        user: {
          id: 1,
          name: 'Tony O. Elumelu, C.F.R',
          profileImage: 'https://media.licdn.com/dms/image/C4E03AQFw7S1b4MNQ-A/profile-displayphoto-shrink_100_100/0/1636363254239?e=1727308800&v=beta&t=ZNfMqMVNxOlpizdNy-sHqwjolbdRM5kt6t9egDj52ZA'
        }
      },
      {
        id: 2,
        content: 'React is awesome',
        time: DateTime.local().set({ day: 24, hour: 11, minute: 11 }).toISO(),
        user: {
          id: 2,
          name: 'Milton Maluhy Filho',
          profileImage: 'https://media.licdn.com/dms/image/C4D03AQH317zAmF7EKA/profile-displayphoto-shrink_100_100/0/1622719452228?e=1727308800&v=beta&t=5idxiEMugD_dz6qC_CEUNLZzVfGiMh_9mW2Q0ltFR-o'
        }
      },
      {
        id: 3,
        content: 'Bootstrap makes styling easy',
        time: DateTime.local().set({ day: 23, hour: 9, minute: 9 }).toISO(),
        user: {
          id: 3,
          name: 'Bob Johnson',
          profileImage: 'https://via.placeholder.com/40'
        }
      },
    ]

    // Dados mockados de usuários
    const users = [
      {
        id: 1,
        name: 'Tony O. Elumelu, C.F.R',
        profileImage: 'https://media.licdn.com/dms/image/C4E03AQFw7S1b4MNQ-A/profile-displayphoto-shrink_100_100/0/1636363254239?e=1727308800&v=beta&t=ZNfMqMVNxOlpizdNy-sHqwjolbdRM5kt6t9egDj52ZA'
      },
      {
        id: 2,
        name: 'Milton Maluhy Filho',
        profileImage: 'https://media.licdn.com/dms/image/C4D03AQH317zAmF7EKA/profile-displayphoto-shrink_100_100/0/1622719452228?e=1727308800&v=beta&t=5idxiEMugD_dz6qC_CEUNLZzVfGiMh_9mW2Q0ltFR-o'
      },
      {
        id: 3,
        name: 'Bob Johnson',
        profileImage: 'https://via.placeholder.com/40'
      },
    ]

    // Filtrar mensagens com base na query
    const filteredMessages = messages.filter(message =>
      message.content.toLowerCase().includes(query)
    )

    // Filtrar usuários com base na query
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(query)
    )

    return response.json({ messages: filteredMessages, users: filteredUsers })
  }
}