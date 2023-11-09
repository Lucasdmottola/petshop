import prismaClient from "../../prisma";

interface LoginProps {
    email: string;
    password: string;
}


class LoginUserService {
    async execute({ email, password }: LoginProps) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email,
                password: password
            },
            select:{
                name:true,
            }
        })

        if (!user) {
            throw new Error('Login ou senha, incorretos')
        }

        return user
    }
}
export { LoginUserService }