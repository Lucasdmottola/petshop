import { Request, Response } from "express";
import { CreateRequestService } from "../../service/requests/CreateRequestService";

class CreateRequestController {
  async handle(req: Request, res: Response) {
    const { names, clientId } = req.body;
    console.log({names})

    const service = new CreateRequestService();

    const requestItem = await service.execute({
      names,
      clientId
    })

    return res.json(requestItem)
  }
}


export { CreateRequestController }