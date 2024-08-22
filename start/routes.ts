/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
import Route from '@ioc:Adonis/Core/Route'

//Autenticação
Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout')
  Route.post('register', 'AuthController.register')
  Route.get('verify-token', 'AuthController.validateToken')
  Route.post('reset-password', 'AuthController.resetPassword')
}).prefix('api')

//Usuário
Route.group(() => {
  Route.get('user-settings', 'UserController.userSettings')
  Route.put('user-settings-edit', 'UserController.editUserSettings')
  Route.post('access-level', 'UserController.accessLevel')
}).prefix('api')
  .middleware('auth')

//Mail
Route.group(() => {
  Route.post('recover-token', 'MailController.recoverToken')
}).prefix('api')

Route.group(() => {
  Route.get('/notifications', 'Notifications/NotificationController.index')
}).prefix('api')


Route.group(() => {
  Route.get('/search', 'Search/SearchController.search')
}).prefix('api')
