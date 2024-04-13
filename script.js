let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: $${total}`;
}

function realizarCompra() {
    // Aquí puedes agregar la lógica para procesar la compra, por ejemplo, enviar los datos al servidor
    alert('Compra realizada correctamente');
    carrito = [];
    total = 0;
    actualizarCarrito();
}