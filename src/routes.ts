import { Router, Request, Response } from "express";
import multer from "multer";
import { CreateUserController } from "./controller/user/CreateUserController";
import { LoginUserController } from "./controller/user/LoginUserController";
import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { CreateProductController } from "./controller/products/CreateProductController";

import uploadConfig from './config/multer'
import { ListProductController } from "./controller/products/ListProductController";
import { CreateClientController } from "./controller/clients/CreateClientsController";
import { LoginClientController } from "./controller/clients/LoginClientsController";
import { CreateRequestController } from "./controller/request/CreateRequestContoller";
import { ListRequestController } from "./controller/request/ListRequestController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));


router.post('/add/user', new CreateUserController().handle)
router.post('/login', new LoginUserController().handle)

router.post('/create/category', new CreateCategoryController().handle)
router.get('/list/category', new ListCategoryController().handle)


router.post('/add/prod', upload.single('file'), new CreateProductController().handle)
router.get('/list/prod', new ListProductController().handle)


router.post("/add/client", new CreateClientController().handle)
router.post("/login/client", new LoginClientController().handle)


router.post('/add/req', new CreateRequestController().handle)
router.get('/list/req', new ListRequestController().handle)




export { router }