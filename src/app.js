const express = require("express");
const cors = require("cors");
const productoRoutes = require("./routes/product.routes");
const errorHandler = require("./middleware/errorHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(cors());
app.use(express.json());

//swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Los GastaAgua/products API",
      version: "1.0.0",
      description: "API para gestionar productos de un sistema de ventas de una ferretería",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//rutas
app.use("/api/products", productoRoutes);


//endpoint raíz
/**
 * @swagger
 * /handler:
 *   get:
 *     summary: Endpoint raíz del microservicio
 *     description: Devuelve un mensaje indicando que el microservicio de productos está funcionando
 *     tags: [Root]
 *     responses:
 *       200:
 *         description: Mensaje de funcionamiento correcto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Microservicio de Productos funcionando correctamente "
 */

app.get("/", (req, res) => {
  res.json({
    message: "LosGastaAgua/products 1.0 funcionando correctamente.",
    swaggerDocs: "http://localhost:3000/api-docs"
  });
});

//manejo global de errores
app.use(errorHandler);

module.exports = app;
