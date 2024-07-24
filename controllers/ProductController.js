import prisma from "../prisma/prisma.js";

const ProductCreate = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const ProductGetAll = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            where: {
                price: {
                    gte: 200,
                }
            },
            select: {
                category: true,
                price: true,
                category: {
                    select: {
                        categoryName: true,
                    }
                }             
            },
            orderBy: {
                price: 'desc',


            }
        });
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const ProductGetById = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const ProductUpdateById = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const ProductDeleteById = async (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export { ProductCreate, ProductGetAll, ProductGetById, ProductUpdateById, ProductDeleteById };