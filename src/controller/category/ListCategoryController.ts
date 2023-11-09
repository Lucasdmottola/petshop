import { Request, Response } from "express";
import { ListCategoryService } from "../../service/category/ListCategoryService";


class ListCategoryController {
    async handle(req: Request, res: Response) {
        const list = new ListCategoryService;
        const category = await list.execute()

        return res.json(category)
    }
}

export { ListCategoryController }