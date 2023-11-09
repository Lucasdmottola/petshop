import { Request, Response } from "express";
import { ListRequestService } from "../../service/requests/ListRequestService";


class ListRequestController {
    async handle(req: Request, res: Response) {
        const clientId = req.query.clientId as string


        const list = new ListRequestService();

        const requests = await list.execute({
            clientId
        })

        return res.json(requests)
    }
}

export { ListRequestController }