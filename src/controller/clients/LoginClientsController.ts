import { Request, Response } from "express";
import { LoginClientService } from "../../service/clients/LoginClienteService";


class LoginClientController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        const login = new LoginClientService();

        const auth = await login.execute({
            email,
            password
        })

        return res.json(auth)
    }
}

export { LoginClientController }