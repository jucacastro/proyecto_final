document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tbody = document.querySelector('tbody');

    // Limpiar la tabla antes de cargar los productos
    tbody.innerHTML = '';

    carrito.forEach((producto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${producto.img}" alt="${producto.nombre}" width="50"></td>
            <td>${producto.nombre}</td>
            <td>$${(producto.precio * producto.cantidad).toLocaleString('es-CO')}</td>
            <td>${producto.cantidad}</td>
            <td><button class="eliminar" data-index="${index}">Eliminar</button></td> <!-- Botón de eliminar -->
        `;
        tbody.appendChild(row);
    });

    if (carrito.length === 0) {
        const mensaje = document.createElement('tr');
        mensaje.innerHTML = `<td colspan="5">El carrito está vacío.</td>`;
        tbody.appendChild(mensaje);
    }

    // Evento de eliminar producto
    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar')) {
            const index = e.target.getAttribute('data-index');
            eliminarProductoDelCarrito(index);
        }
    });
});

// Función para eliminar un producto del carrito
function eliminarProductoDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1); // Eliminar producto por índice
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualizar localStorage
    location.reload(); // Recargar la página para actualizar la tabla
}

function limpiarCampos() {
    document.getElementById("tarjeta").value = "";
    document.getElementById("fecha-exp").value = "";
    document.getElementById("codigo-seguridad").value = "";
    document.getElementById("nombre-titular").value = "";
    document.getElementById("tipo-tarjeta").selectedIndex = 0;
    document.getElementById("pais-emision").selectedIndex = 0;
    
}

function alternarVisibilidad() {
    const codigoInput = document.getElementById("codigo-seguridad");
    if (codigoInput.type === "password") {
        codigoInput.type = "text";
    } else {
        codigoInput.type = "password";
    }
}