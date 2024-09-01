import { Category } from "../../models/index.js";

export const getAllCategories = async (req, reply) => {
    try {
        const categories = await Category.find();
        return reply.status(200).send({
            message: "Get categories list successfully",
            categories
        })
    } catch (error) {
        return reply.status(500).send({ message: "An error occurred", error })
    }
}