import { Customer, DeliveryPartner } from '../../models/user.js'
import { handleError } from "../../utils/errorHandler.js";

export const updateUser = async (req, reply) => {
    try {
        const { userId } = req.user;
        const updateData = req.body;

        let user = await Customer.findById(userId) || await DeliveryPartner.findById(userId)

        if (!user) {
            return reply.status(404).send({ message: "User not found" });
        }

        let UserModel;

        if (user.role === "Customer") {
            UserModel = Customer
        } else if (user.role === "DeliveryPartner") {
            UserModel = DeliveryPartner
        } else {
            return reply.status(403).send({ message: "Invalid role" })
        }

        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true, runValidators: true }
        )

        if (!updatedUser) {
            return reply.status(404).send({ message: "User not found" })
        }

        return reply.status(200).send({ message: "User updated successfully", user: updatedUser })
    }
    catch (error) {
        // Use the custom error handler to format the error
        const { statusCode, message, details } = handleError(error);
        return reply.status(statusCode).send({ message, details });
    }
}