document.addEventListener('DOMContentLoaded', () => {
 
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tbody = document.querySelector('tbody');
    const totalPrecioElem = document.getElementById('total-precio');
    const costoDomicilio = 15000;
    let total = 0;

   
    tbody.innerHTML = '';
    carrito.forEach((producto, index) => {
        const row = document.createElement('tr');
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        row.innerHTML = `
            <td><img src="${producto.img}" alt="${producto.nombre}" width="70"></td>
            <td>${producto.nombre}</td>
            <td>$${subtotal.toLocaleString('es-CO')}</td>
            <td>${producto.cantidad}</td>
            <td><button class="eliminar" data-index="${index}">Eliminar</button></td>
        `;
        tbody.appendChild(row);
    });

   
    if (carrito.length === 0) {
        const mensaje = document.createElement('tr');
        mensaje.innerHTML = `<td colspan="5">El carrito está vacío ☹️</td>`;
        tbody.appendChild(mensaje);
    }

  
    totalPrecioElem.textContent = `$${total.toLocaleString('es-CO')}`;

   
    const checkboxDomicilio = document.getElementById("checkbox-domicilio");
    checkboxDomicilio.addEventListener("change", () => {
        const totalConDomicilio = checkboxDomicilio.checked ? total + costoDomicilio : total;
        totalPrecioElem.textContent = `$${totalConDomicilio.toLocaleString('es-CO')}`;
    });

 
    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar')) {
            const index = e.target.getAttribute('data-index');
            eliminarProductoDelCarrito(index);
        }
    });

   
    const botonCompra = document.getElementById("completar-compra");
    botonCompra.addEventListener("click", function (e) {
        e.preventDefault(); 

        botonCompra.disabled = true;

        const tarjeta = document.getElementById("tarjeta").value;
        const presupuestoMaximo = parseInt(localStorage.getItem("presupuestoMaximo").replace(/[^0-9]/g, ''));
        const cantidadMaxima = parseInt(localStorage.getItem("cantidadMaxima"));
        const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        const totalConDomicilio = checkboxDomicilio.checked ? total + costoDomicilio : total;

        const validarCompra = new Promise((resolve, reject) => {
            const tiempoEspera = Math.floor(Math.random() * 1000) + 2000; 
            setTimeout(() => {
                if (!tarjeta || tarjeta.length < 13 || tarjeta.length > 19) {
                    reject("Número de tarjeta incorrecto.");
                } else if (cantidadTotal > cantidadMaxima) {
                    reject("La cantidad de productos supera el límite permitido.");
                } else if (totalConDomicilio > presupuestoMaximo) {
                    reject("El presupuesto máximo ha sido superado.");
                } else {
                    resolve("Pago realizado con éxito.");
                }
            }, tiempoEspera);
        });

        validarCompra
            .then((mensajeExito) => {
                alert(mensajeExito);
                window.location.href = "../HTML/registro.html"; 
            })
            .catch((errorMensaje) => {
                alert(errorMensaje);
                botonCompra.disabled = false; 
            });
    });

   
    document.querySelectorAll("button, input, select").forEach(elemento => {
        elemento.addEventListener("click", (e) => {
            if (botonCompra.disabled && e.target.id !== "completar-compra") {
                alert("Hay una compra en progreso, por favor espera.");
                e.preventDefault();
            }
        });
    });
});


function eliminarProductoDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
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
    codigoInput.type = codigoInput.type === "password" ? "text" : "password";
}

