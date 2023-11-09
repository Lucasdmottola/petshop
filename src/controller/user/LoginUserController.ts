import { Request , Response} from "express";
import { LoginUserService } from "../../service/user/LoginUserService";



class LoginUserController {
    async handle(req:Request, res:Response){
        const {email, password} = req.body;

        const login = new LoginUserService();


        const auth = await login.execute({
            email,
            password
          })
      
          return res.json(auth);

    }
}

export {LoginUserController}