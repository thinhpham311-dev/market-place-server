import { Product } from "../../models/index.js";
import { handleError } from "../../utils/errorHandler.js";

export const getProductsByCategoryId = async (req, reply) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find({ category: categoryId }).select("-category").exec();
        // If no categories found, return a specific message
        if (!products || products.length === 0) {
            return reply.status(404).send({ message: "No products found" });
        }

        return reply.status(200).send({ message: "Get products list successfully", products })
    } catch (error) {
        // Use the custom error handler to format the error
        const { statusCode, message, details } = handleError(error);
        return reply.status(statusCode).send({ message, details });
    }
}