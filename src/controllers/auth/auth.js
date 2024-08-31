import { Customer, DeliveryPartner } from "../../models/user.js";
import jwt from 'jsonwebtoken'


const generateTokens = (user) => {
    const accessToken = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1h" }
    );

    return { accessToken, refreshToken }
}

export const loginCustomer = async (req, reply) => {
    try {
        const { phone } = req.body;
        const customer = await Customer.findOne({ phone })

        if (!customer) {
            customer = new Customer({
                phone,
                role: "Customer",
                isActivated: true
            })
            await customer.save();
        }

        const { accessToken, refreshToken } = generateTokens(customer);
        return reply.status(200).send({ message: customer ? "Login successful" : "Customer created and logged in", accessToken, refreshToken, customer })
    } catch (error) {
        return reply.status(500).send({ message: "An error occurred", error })
    }
}

export const loginDeliveryPartner = async (req, reply) => {
    try {
        const { email, password } = req.body;
        const deliveryPartner = await DeliveryPartner.findOne({ email })

        if (!deliveryPartner) {
            return reply.status(404).send({ message: "Delivery Partner not found" })
        }

        const isMatch = password === deliveryPartner.password

        if (!isMatch) {
            return reply.status(400).send({ message: "Invalid Credentials" })
        }

        const { accessToken, refreshToken } = generateTokens(deliveryPartner);

        return reply.send({ message: "Login successful", accessToken, refreshToken, deliveryPartner })
    } catch (error) {
        return reply.status(500).send({ message: "An error occurred", error })
    }
}

export const refreshToken = async (req, reply) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return reply.status(401).send({ message: "Refresh token required" })
    }

    try {
        const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        let user;
        if (decode.role === "Customer") {
            user = await Customer.findById(decode.userId)
        } else if (decode.role === "DeliveryPartner") {
            user = await DeliveryPartner.findById(decode.userId)
        } else {
            return reply.status(403).send({ message: "Invalid role" })
        }

        if (!user) {
            return reply.status(403).send({ message: "Invalid Refresh Token" })
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens(user)
        return reply.status(200).send({
            message: "Token Refreshed",
            accessToken,
            refreshToken: newRefreshToken
        })
    } catch (error) {
        return reply.status(403).send({ message: "Invalid Refresh token" })
    }
}

export const fetchUser = async (req, reply) => {
    try {
        const { userId, role } = req.body;
        let user;
        if (role === "Customer") {
            user = await Customer.findById(userId)
        } else if (role === "DeliveryPartner") {
            user = await DeliveryPartner.findById(userId)
        } else {
            return reply.status(403).send({ message: "Invalid role" })
        }

        if (!user) {
            return reply.status(404).send({ message: "User not found" })
        }
        return reply.status(200).send({
            message: "User fetched successful"
        })
    } catch (error) {
        return reply.status(500).send({ message: "An error Occurred", error })
    }
}