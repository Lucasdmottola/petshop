import prismaClient from "../../prisma";


interface ListRequest {
    clientId: string
}


class ListRequestService {
    async execute({ clientId }: ListRequest) {
        const findByRequest = await prismaClient.requestsClients.findMany({
            where: {
                clientId: clientId
            }
        })

        return findByRequest
    }
}

export { ListRequestService }