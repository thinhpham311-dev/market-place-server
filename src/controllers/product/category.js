import { Category } from "../../models/index.js";
import { handleError } from "../../utils/errorHandler.js";

export const getAllCategories = async (req, reply) => {
    try {
        const categories = await Category.find();

        // If no categories found, return a specific message
        if (!categories || categories.length === 0) {
            return reply.status(404).send({ message: "No categories found" });
        }

        return reply.status(200).send({ message: "Get categories list successfully", categories })
    } catch (error) {
        // Use the custom error handler to format the error
        const { statusCode, message, details } = handleError(error);
        return reply.status(statusCode).send({ message, details });
    }
}