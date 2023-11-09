import prismaClient from "../../prisma";


interface LoginClient {
    email: string;
    password: string;
}


class LoginClientService {
    async execute({ email, password }: LoginClient) {
        const client = await prismaClient.userClient.findFirst({
            where: {
                email: email,
                password: password
            },
            select: {
                name: true,
                id: true
            }
        })

        if (!client) {
            throw new Error('Login ou senha, incorretos')
        }

        return client
    }
}

export { LoginClientService }