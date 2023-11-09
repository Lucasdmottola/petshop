import { Request, Response } from "express";
import { listProductService } from "../../service/products/ListProductsService";

class ListProductController{
    async handle(req:Request, res:Response){
        const category_id = req.query.category_id as string;

        const list = new listProductService();

        const products = await list.execute({
            category_id
        })

        return res.json(products);

    }
}

export {ListProductController}