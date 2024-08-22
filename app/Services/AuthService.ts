import Users from 'App/Models/Users'

export default class AuthService {

    public async login(auth, email, password, response) {
        const user = await Users.findBy('email', email)
        if (!user) {
            return response.status(404).json({ message: 'Usuário não encontrado.' })
        }

        try {
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '300mins',
                name: user.email,
            })

            return {
                token: token.token,
                user: {
                    secure_id: user.secure_id,
                    email: user.email,
                    profile_id: user.profile_id,
                },
            }
        } catch (error) {
            return response.status(401).json({ message: 'E-mail ou senha incorretos' })
        }
    }
    // Service
    async register(data) {
        try {
            const userExists = await Users.findBy('email', data.email);
            if (userExists) {
                return { success: "error", message: 'E-mail já está em uso.' };
            }

            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>çÇ])[A-Za-z\d!@#$%^&*(),.?":{}|<>çÇ]{8,}$/
            if (!data.password || !passwordRegex.test(data.password)) {
                return { success: "error", message: 'A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, um número e um caractere especial.' }
            }

            await Users.create({
                name: data.name,
                email: data.email,
                password: data.password,
                profile_id: 2,
            });

            return { success: "success", message: 'Usuário cadastrado com sucesso.' };

        } catch (error) {
            console.error(error);
            return { success: "error", message: 'Erro ao criar usuário' };
        }
    }


    public async logout(auth, response) {

        try {
            await auth.use('api').revoke()
            return {
                revoked: true
            }
        } catch {
            return response.badRequest('Erro ao fazer logout')
        }
    }
}
