import { Request, Response } from "express";
import { CreateClientService } from "../../service/clients/CreateClientService";


class CreateClientController {
    async handle(req: Request, res: Response) {
        const { name, email, password, address, celular } = req.body;

        const createClient = new CreateClientService();


        const client = await createClient.execute({
            name,
            email,
            password,
            celular,
            address
        })

        return res.json(client)
    }
}

export { CreateClientController }