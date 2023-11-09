import prismaClient from "../../prisma";


interface UserProps {
    name: string;
    email: string;
    password: string;

}

class CreateUserService {
    async execute({name, email, password}:UserProps){
        if(!email){
            throw new Error("E-mail é um campo obrigatório")
        }

        const alreadyExisits = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(alreadyExisits){
            throw new Error('Usuário já cadastrado')
        }

    const user = await prismaClient.user.create({
        data:{
            name: name,
            email: email,
            password: password,
        },
        select:{
            id: true, 
            name: true,
            email: true,
        }
    })
    return user
    }
}


export {CreateUserService}