import AdminJS from 'adminjs'
import AdminJSFastify from '@adminjs/fastify'
import * as AdminJSMongoose from '@adminjs/mongoose'
import * as Models from '../models/index.js'
import { authenticate, COOKIE_PASSWORD, sessionStore } from './config.js'
import { dark, light, noSidebar } from '@adminjs/themes'


AdminJS.registerAdapter(AdminJSMongoose)
const userParent = {
    name: 'User',
    icon: 'User',
}

const productParent = {
    name: 'Product',
    icon: 'ShoppingBag',
}

const orderParent = {
    name: 'Order',
    icon: 'Truck',
}
export const admin = new AdminJS({
    resources: [
        {
            resource: Models.Customer,
            options: {
                parent: userParent,
                listProperties: ["name", "phone", "role", "isActivated"],
                filterProperties: ["phone", "role"]
            }
        },
        {
            resource: Models.DeliveryPartner,
            options: {
                parent: userParent,
                listProperties: ["name", "phone", "role", "address", "branch"],
                filterProperties: ["phone", "role"]
            }
        },
        {
            resource: Models.Admin,
            options: {
                parent: userParent,
                listProperties: ["name", "email", "role", "isActivated"],
                filterProperties: ["email", "role"]
            }
        },
        {
            resource: Models.Branch,
            options: {
                parent: productParent,
                filterProperties: ["name", "address"]
            }
        },
        {
            resource: Models.Category,
            options: {
                parent: productParent,
                filterProperties: ["name"]
            }
        },
        {
            resource: Models.Product,
            options: {
                parent: productParent,
                filterProperties: ["name", "price", "discountPrice"]
            }
        },
        {
            resource: Models.Counter,
            options: {
                parent: orderParent,
            }
        },
        {
            resource: Models.Order,
            options: {
                parent: orderParent,
                listProperties: ["customer", "deliveryPartner", "status", "createdAt", "updatedAt"],
                filterProperties: ["customer", "deliveryPartner", "status", "createdAt", "updatedAt"]
            }
        },
    ],
    branding: {
        companyName: "Blinkit",
        withMadeWithLove: true,
        favicon: 'https://res.cloudinary.com/dgincjt1i/image/upload/v1724934782/blinkit-seeklogo_akt6qi.svg',
        logo: "https://res.cloudinary.com/dgincjt1i/image/upload/v1724935053/blinkit-logo_casestudy_afb9yx.webp",
    },
    overrides: {
        colors: {
            primary100: 'teal',
        },
    },
    defaultTheme: light.id,
    availableThemes: [dark, light, noSidebar],
    rootPath: "/admin"
})


export const buildAdminRouter = async (app) => {
    await AdminJSFastify.buildAuthenticatedRouter(admin,
        {
            authenticate,
            cookiePassword: COOKIE_PASSWORD,
            cookieName: 'adminjs'
        }, app, {
        store: sessionStore,
        saveUnintialized: true,
        secret: COOKIE_PASSWORD,
        cookie: {
            httpOnly: process.env.NODE_ENV = 'production',
            secure: process.env.NODE_ENV = 'production'
        }
    })
}