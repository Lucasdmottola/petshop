import prismaClient from "../../prisma";


interface ClientsProps {
    name: string;
    email: string;
    password: string;
    address: string;
    celular: string
}


class CreateClientService {
    async execute({ name, email, password, address, celular }: ClientsProps) {

        if (!email) {
            throw new Error("Para realizar o cadastro e-mail é obrigatório")
        }

        const alreadyExisits = await prismaClient.userClient.findFirst({
            where: {
                email: email
            }
        })
        if (alreadyExisits) {
            throw new Error('Usuário já cadastrado')
        }

        const client = await prismaClient.userClient.create({
            data: {
                name: name,
                email: email,
                password: password,
                address: address,
                celular: celular
            }
        })

        return client
    }
}

export { CreateClientService }