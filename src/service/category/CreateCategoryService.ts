import prismaClient from "../../prisma";

interface CategoryProps {
    name: string
}

class CreateCategoryService {
    async execute({ name }: CategoryProps) {
        if (name === "") {
            throw new Error("Nome é obrigatório")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })
        return category;
    }
}

export { CreateCategoryService }