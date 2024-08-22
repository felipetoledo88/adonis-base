import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'

export default class NotificationController {
  public async index({ response }: HttpContextContract) {
    // Tipos de notificações mockados
    const notificationTypes = [
      { id: 1, name: 'message' },
      { id: 2, name: 'sponsored' },
      { id: 3, name: 'system' }
    ];

    // Notificações mockadas
    const notifications = [
      {
        id: 1,
        message: 'Nova mensagem',
        time: DateTime.local().set({ day: 25, hour: 16, minute: 22 }).toISO(),
        typeId: 1, // Referencia o tipo de notificação 'message'
        view: 0,
        link: '/messages',
        user: {
          id: 1,
          name: 'Tony O. Elumelu, C.F.R',
          profileImage: 'https://media.licdn.com/dms/image/C4E03AQFw7S1b4MNQ-A/profile-displayphoto-shrink_100_100/0/1636363254239?e=1727308800&v=beta&t=ZNfMqMVNxOlpizdNy-sHqwjolbdRM5kt6t9egDj52ZA'
        }
      },
      {
        id: 2,
        message: 'Nova mensagem',
        time: DateTime.local().set({ day: 25, hour: 11, minute: 11 }).toISO(),
        typeId: 1, // Referencia o tipo de notificação 'message'
        view: 1,
        link: '/messages',
        user: {
          id: 2,
          name: 'Milton Maluhy Filho',
          profileImage: 'https://media.licdn.com/dms/image/C4D03AQH317zAmF7EKA/profile-displayphoto-shrink_100_100/0/1622719452228?e=1727308800&v=beta&t=5idxiEMugD_dz6qC_CEUNLZzVfGiMh_9mW2Q0ltFR-o'
        }
      },
      {
        id: 3,
        message: 'Atualização de software programada para 26/07 às 02h00',
        time: DateTime.local().set({ day: 26, hour: 2, minute: 0 }).toISO(),
        typeId: 3, // Referencia o tipo de notificação 'system'
        view: 0,
        link: '/system',
        user: {
          id: 1,
          name: 'Scraper',
          profileImage: 'https://scraperapi-homol.swiftsoft.online/images/logo/favicon.ico'
        }
      },
      {
        id: 4,
        message: 'Conheça as vantagens de ser um associado Sicredi!',
        time: DateTime.local().set({ day: 27, hour: 10, minute: 0 }).toISO(),
        typeId: 2, // Referencia o tipo de notificação 'sponsored'
        view: 0,
        link: 'https://meusite.com.br',
        user: {
          id: 3,
          name: 'Sicredi',
          profileImage: 'https://logospng.org/download/sicredi/logo-sicredi-icon-1024.png'
        }
      },
      {
        id: 5,
        message: 'Está na hora de levar sua empresa ao próximo nível com as soluções de cloud da Microsoft Azure!',
        time: DateTime.local().set({ day: 27, hour: 15, minute: 0 }).toISO(),
        typeId: 2, // Referencia o tipo de notificação 'sponsored'
        view: 0,
        link: 'https://meusite.com.br',
        user: {
          id: 4,
          name: 'Azure',
          profileImage: 'https://www.vaisulweb.com/wp-content/uploads/2019/02/azure_logo_794_new.png'
        }
      }
    ];
    await new Promise(resolve => setTimeout(resolve, 4000));
    return response.json({ notifications, notificationTypes });
  }
}
