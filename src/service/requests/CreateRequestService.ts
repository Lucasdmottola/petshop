import prismaClient from "../../prisma"

interface RequestData {
    names: string[]
    clientId: string
}

class CreateRequestService {
    async execute({ names, clientId }: RequestData) {
        console.log({names})
        const request = await prismaClient.requestsClients.create({
            data: {
                names: names,
                clientId: clientId
            } as any, 
        })

        return request
    }
}

export { CreateRequestService }
