import { Request, Response } from "express";
import { CreateProductService } from "../../service/products/CreateProductService";


class CreateProductController {
    async handle(req: Request, res: Response) {
        const { name, price, description, category_id } = req.body;

        const productService = new CreateProductService();

        if (!req.file) {
            throw new Error("Erro upload file")
        } else {
            const { originalname, filename: banner } = req.file;
            console.log(req)
            const product = await productService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });
            return res.json(product)
        }
    }
}

export { CreateProductController }