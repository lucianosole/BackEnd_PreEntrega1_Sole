// clase ProductManager
class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct({ title, description, price, thumbnail, code, stock }) {
    // que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    if (this.products.some((product) => product.code === code)) {
      // Validar que no se repita el campo “code”
      console.log("El código ya existe");
      return;
    }

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: this.products.length + 1,
    };

    this.products.push(newProduct);
    console.log("Producto agregado exitosamente");
  }

  getProductById(idSearch) {
    const product = this.products.find((product) => product.id === idSearch);
    // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
    return product || "Not Found";
  }

  getProducts() {
    return this.products;
  }
}

// Se creará una instancia de la clase “ProductManager”
const p = new ProductManager();
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(p.getProducts());
// Se llamará al método “addProduct” con los campos:
p.addProduct({
  description: "Cadena para bicicleta",
  price: 2000,
  thumbnail: "imagen",
  code: "xcabc",
  stock: 40,
});
p.addProduct({
  title: "Cadena",
  description: "Cadena para bicicleta",
  price: 2000,
  thumbnail: "imagen",
  code: "abc",
  stock: 40,
});
p.addProduct({
  title: "Candado",
  description: "Candado de seguridad",
  price: 250,
  thumbnail: "imagen1",
  code: "123",
  stock: 20,
});
p.addProduct({
  title: "Martillo",
  description: "Martillo nro1 ",
  price: 800,
  thumbnail: "imagen3",
  code: "1233",
  stock: 10,
});
p.addProduct({
  title: "Producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "”abc123”",
  stock: 25,
});
p.addProduct({
  title: "Producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "”abc123”",
  stock: 25,
});

// Pruebas
console.log(ProductManager.products);
console.log(p.getProductById(1));
console.log(p.getProductById(2));
console.log(p.getProductById(6));
console.log(p.getProducts());
