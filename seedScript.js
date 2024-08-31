import "dotenv/config.js"
import mongoose from "mongoose";
import { Category, Customer, Product } from "./src/models/index.js";
import { categories, products, customers } from "./seedData.js";

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        // await Category.deleteMany()
        // await Product.deleteMany({})
        // await Customer.deleteMany({})
        const categoryDocs = await Category.insertMany(categories)
        const categoryMap = categoryDocs.reduce((map, category) => {
            map[category.name] = category._id;
            return map
        }, {});
        const productWithCategoryIds = products.map((product, index) => ({
            ...product,
            category: categoryMap[product.category]
        }))
        await Product.insertMany(productWithCategoryIds)

        await Customer.insertMany(customers)

        console.log('DATABASE SEED SUCCESSFULL ');
    } catch (error) {
        console.log('Error Seeding Database', error)
    } finally {
        mongoose.connection.close()
    }
}

seedDatabase()