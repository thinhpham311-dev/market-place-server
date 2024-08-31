import { confirmOrder, createOrder, getOrderById, getOrders, updateOrderStatus } from "../controllers/order/order.js";
import { verifyToken } from "../middleware/auth.js"

export const orderRoutes = async (fastify, options)=>{
    fastify.addHook("preHandler", async (req, reply) => {
        const isAuthenticated = await verifyToken(req, reply);

        if(!isAuthenticated){
            return reply.status(404).send({message: "Unauthenticated"});
        }
    });
    
    fastify.post('/order', createOrder);
    fastify.get('/order', getOrders);
    fastify.get('/order/:orderId', getOrderById);
    fastify.patch('/order/:orderId/status', updateOrderStatus)
    fastify.post('/order/:orderId/confirm', confirmOrder)
}