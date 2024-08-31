import { Order, Customer, Branch, DeliveryPartner } from "../../models/index.js"

export const createOrder = async (req, reply) => {
    const { userId } = req.user
    const { items, branch, totalPrice } = req.body
    try {
        const customerData = await Customer.findById(userId)
        const branchData = await Branch.find(branch)

        if (!customerData) {
            return reply.status(404).send({ message: "Customer not found" })
        }

        const newOrder = new Order({
            customer: userId,
            items: items.map((item) => ({
                id: item.id,
                item: item.item,
                count: item.count
            })),
            branch: branchData,
            totalPrice,
            deliveryLocation: {
                latitude: customerData.liveLocation.latitude,
                longtitude: customerData.liveLocation.longtitude,
                address: customerData.address || "No address available"
            },
            pickupLocation: {
                latitude: branchData.liveLocation.latitude,
                longtitude: branchData.liveLocation.longtitude,
                address: branchData.address || "No address available"
            }
        })

        const savedOrder = await newOrder.save();
        return reply.status(200).send({
            message: "Created orders successfully",
            order: savedOrder
        })

        // const createdOrder = Order.create
    } catch (error) {
        return reply.status(500).send({ message: "Failed to create order", error })
    }
}

export const confirmOrder = async (req, reply) => {
    const { orderId } = req.params;
    const { userId } = req.user;
    const { deliveryPersonLocation } = req.body;
    try {
        const deliveryPerson = await DeliveryPartner.findById(userId)
        if (!deliveryPerson) {
            return reply.status(404).send({ message: "Delivery Person not found" });
        }
        const order = await Order.findById(orderId);
        if (!order) {
            return reply.status(404).send({ message: "Order not found" });
        }
        if (order.status !== "available") {
            return reply.status(400).send({ message: "Order is not available" })
        }
        order.status = "confirmed"

        order.deliveryPartner = userId;
        order.deliveryPersonLocation = {
            latitude: deliveryPersonLocation?.latitude,
            longtitude: deliveryPersonLocation?.longtitude,
            address: deliveryPersonLocation?.address || ""
        }
        await order.save()

        return reply.status(200).send({ message: "Order confirmed successfully" });
    } catch (error) {
        return reply.status(500).send({ message: "Failed to confirm order" })
    }
}

export const updateOrderStatus = async (req, reply) => {

    try {

    } catch (error) {
        return reply.status(500).send({ message: "Failed to update status order" })
    }
}