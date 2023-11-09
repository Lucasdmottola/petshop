import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        const category = await prismaClient.category.findMany()

        return category
    }


}

export { ListCategoryService }