import "dotenv/config";
import Fastify from 'fastify'
import { connectDB } from './src/config/connect.js';
import { admin, buildAdminRouter } from "./src/config/setup.js";
import { registerRoutes } from "./src/routes/index.js";
import fastifySocketIO from "fastify-socket.io"


const port = process.env.PORT || 10000;

const start = async () => {
    await connectDB(process.env.MONGODB_URI)
    const app = Fastify();

    app.register(fastifySocketIO, {
        cors: {
            origin: "*"
        },
        pingInterval: 1000,
        pingTimeout: 5000,
        transports: ["websocket"],
    })

    await registerRoutes(app);
    await buildAdminRouter(app);

    app.listen({
        port: port
    }, (err, addr) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Blinkit Started on http://localhost:${port}${admin.options.rootPath}`)
        }
    })


    app.ready().then(() => {
        app.io.on("connection", (socket) => {
            console.log("A User connected");
            socket.on("joinRoom", (orderId) => {
                socket.join(orderId);
                console.log(`User Joined room ${orderId}`);
            })

            socket.on("disconnect", () => {
                console.log("User disconnected")
            })
        })
    })
}

start();