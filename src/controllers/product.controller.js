const productService = require("../services/product.service");
const { productSchema } = require("../validations/product.shema");

class ProductController {

    async getAll(req, res, next) {
        try {
            const data = await productService.getAll();
            res.json(data);
        } catch (err) {
            next(err);
        }
    }

    async getById(req, res, next) {
        try {
            const product = await productService.getById(req.params.id);
            if (!product) return res.status(404).json({ message: "Producto no encontrado" });
            res.json(product);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const { error } = productSchema.validate(req.body);
            if (error) return res.status(400).json({ error: error.details[0].message });

            const newProduct = await productService.create(req.body);
            res.status(201).json(newProduct);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const { error } = productSchema.validate(req.body);
            if (error) return res.status(400).json({ error: error.details[0].message });

            const updated = await productService.update(req.params.id, req.body);
            if (!updated) return res.status(404).json({ message: "Producto no encontrado" });
            res.json(updated);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const deleted = await productService.delete(req.params.id);
            if (!deleted) return res.status(404).json({ message: "Producto no encontrado" });

            res.json({ message: "Producto eliminado" });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ProductController();