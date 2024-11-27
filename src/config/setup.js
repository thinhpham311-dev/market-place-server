import AdminJS from 'adminjs'
import AdminJSFastify from '@adminjs/fastify'
import * as AdminJSMongoose from '@adminjs/mongoose'
import * as Models from '../models/index.js'
import { authenticate, COOKIE_PASSWORD, sessionStore } from './config.js'
import { dark, light, noSidebar } from '@adminjs/themes'
import { componentLoader, Components } from '../components/index.js'
import {
    userParent,
    productParent,
    orderParent,
    branding
} from '../constants/icons.js';
import { productProperties, categoriesProperties } from '../constants/properties.js'

AdminJS.registerAdapter(AdminJSMongoose)


export const admin = new AdminJS({
    resources: [
        {
            resource: Models.Customer,
            options: {
                parent: userParent,
                listProperties: ["name", "phone", "role", "isActivated"],
                filterProperties: ["phone", "role"],

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
                filterProperties: ["name", "address"],
            }
        },
        {
            resource: Models.Category,
            options: {
                parent: productParent,
                filterProperties: ["name"],
                listProperties: ["image", "name"],
                properties: categoriesProperties(Components)
            }
        },
        {
            resource: Models.Product,
            options: {
                parent: productParent,
                filterProperties: ["name", "price", "discountPrice"],
                listProperties: ["image", "name", "quantity", "price", "discountPrice", "category"],
                properties: productProperties(Components)
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
    componentLoader,
    dashboard: {
        component: Components.Dashboard,
    },
    branding,
    locale: {
        language: 'en',
        translations: {
            en: {
                components: {
                    Login: {
                        welcomeHeader: "Welcome to Market Place Accounts",
                        welcomeMessage: "Welcome to Admin Panel",
                        welcomeImage: "",
                        properties: {
                            email: "Email user",
                            password: "Password user"
                        },
                        loginButton: "Submit"
                    }
                },
                messages: {
                    welcomeOnBoard_title: 'New dashboard title',
                },
            }

        }
    },
    defaultTheme: dark.id,
    availableThemes: [dark, light, noSidebar],
    rootPath: "/admin",
});


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