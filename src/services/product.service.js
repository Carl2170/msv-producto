let productsMock = [
    { id: 1,  name: "Clavos",                id_category: 10, description: "Clavos de acero", stock: 50, price: 0.50 },
    { id: 2,  name: "Tornillos",             id_category: 11, description: "Tornillos de acero", stock: 80, price: 0.80 },
    { id: 3,  name: "Martillo",              id_category: 12, description: "Martillo de madera", stock: 20, price: 25.50 },
    { id: 4,  name: "Destornillador Plano",  id_category: 13, description: "Destornillador plano de acero", stock: 40, price: 12.99 },
    { id: 5,  name: "Destornillador Phillips", id_category: 13, description: "Destornillador cruz de acero", stock: 35, price: 13.50 },
    { id: 6,  name: "Llave Inglesa",         id_category: 12, description: "Llave ajustable de acero", stock: 15, price: 18.00 },
    { id: 7,  name: "Cinta Métrica",         id_category: 14, description: "Cinta métrica de 5 metros", stock: 25, price: 9.50 },
    { id: 8,  name: "Nivel",                 id_category: 14, description: "Nivel de burbuja de 60cm", stock: 10, price: 14.75 },
    { id: 9,  name: "Sierra Manual",         id_category: 15, description: "Sierra para madera", stock: 18, price: 22.00 },
    { id: 10, name: "Taladro",               id_category: 15, description: "Taladro eléctrico con batería", stock: 12, price: 150.90 },
    { id: 11, name: "Broca 5mm",             id_category: 15, description: "Broca para taladro, 5mm", stock: 100, price: 1.20 },
    { id: 12, name: "Tubo PVC 1/2",          id_category: 16, description: "Tubo de PVC de media pulgada", stock: 60, price: 3.40 },
    { id: 13, name: "Conector PVC 1/2",      id_category: 16, description: "Codo de PVC de media pulgada", stock: 80, price: 1.10 },
    { id: 14, name: "Guantes de Seguridad",  id_category: 17, description: "Guantes de tela con protección", stock: 50, price: 4.80 },
    { id: 15, name: "Casco de Seguridad",    id_category: 17, description: "Casco amarillo de protección", stock: 20, price: 35.00 }
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
