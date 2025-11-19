let productsMock = [
    { id: 1, name: "Clavos", id_category: 10, description: "Clavos de acero", stock: 50, quantity: 100 },
    { id: 2, name: "Tornillos", id_category: 11, description: "Tornillos de acero", stock: 80, quantity: 200 },
    { id: 3, name: "Martillo", id_category: 12, description: "Martillo de madera", stock: 20, quantity: 50 },
    { id: 4, name: "Destornillador Plano", id_category: 13, description: "Destornillador plano de acero", stock: 40, quantity: 75 },
    { id: 5, name: "Destornillador Phillips", id_category: 13, description: "Destornillador cruz de acero", stock: 35, quantity: 60 },
    { id: 6, name: "Llave Inglesa", id_category: 12, description: "Llave ajustable de acero", stock: 15, quantity: 30 },
    { id: 7, name: "Cinta Métrica", id_category: 14, description: "Cinta métrica de 5 metros", stock: 25, quantity: 50 },
    { id: 8, name: "Nivel", id_category: 14, description: "Nivel de burbuja de 60cm", stock: 10, quantity: 20 },
    { id: 9, name: "Sierra Manual", id_category: 15, description: "Sierra para madera", stock: 18, quantity: 40 },
    { id: 10, name: "Taladro", id_category: 15, description: "Taladro eléctrico con batería", stock: 12, quantity: 25 },
    { id: 11, name: "Broca 5mm", id_category: 15, description: "Broca para taladro, 5mm", stock: 100, quantity: 150 },
    { id: 12, name: "Tubo PVC 1/2", id_category: 16, description: "Tubo de PVC de media pulgada", stock: 60, quantity: 120 },
    { id: 13, name: "Conector PVC 1/2", id_category: 16, description: "Codo de PVC de media pulgada", stock: 80, quantity: 100 },
    { id: 14, name: "Guantes de Seguridad", id_category: 17, description: "Guantes de tela con protección", stock: 50, quantity: 80 },
    { id: 15, name: "Casco de Seguridad", id_category: 17, description: "Casco amarillo de protección", stock: 20, quantity: 35 }
];


class ProductoService {

    async getAll() {
        return productsMock;
    }

    async getById(id) {
        return productsMock.find(p => p.id == id);
    }

    async create(product) {
        const id = productsMock.length ? productsMock[productsMock.length - 1].id + 1 : 1;
        const newProduct = { id, ...product };
        productsMock.push(newProduct);
        return newProduct;
    }

    async update(id, data) {
        const index = productsMock.findIndex(p => p.id == id);
        if (index === -1) return null;

        productsMock[index] = { ...productsMock[index], ...data };
        return productsMock[index];
    }

    async delete(id) {
        const index = productsMock.findIndex(p => p.id == id);
        if (index === -1) return false;

        productsMock.splice(index, 1);
        return true;
    }
}

module.exports = new ProductoService();
