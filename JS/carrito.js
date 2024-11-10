document.addEventListener('DOMContentLoaded', () => {
  
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tbody = document.querySelector('tbody');
    const totalPrecioElem = document.getElementById('total-precio');
    const costoDomicilio = 15000;
    let total;

    
    const metodoEntrega = localStorage.getItem('entregaSeleccionada');
    const checkboxDomicilio = document.getElementById("checkbox-domicilio");
    
    if (metodoEntrega === 'domicilio') {
        checkboxDomicilio.checked = true;
    }

    
    function renderizarCarrito() {
        tbody.innerHTML = '';
        total = 0;

        carrito.forEach((producto, index) => {
            const row = document.createElement('tr');
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;

            row.innerHTML = `
                <td><img src="${producto.img}" alt="${producto.nombre}" width="70"></td>
                <td>${producto.nombre}</td>
                <td>$${subtotal.toLocaleString('es-CO')}</td>
                <td>${producto.cantidad}</td>
                <td><button class="eliminar" data-index="${index}">🗑️</button></td>
            `;
            tbody.appendChild(row);
        });

        if (carrito.length === 0) {
            const mensaje = document.createElement('tr');
            mensaje.innerHTML = `<td colspan="5">El carrito está vacío ☹️</td>`;
            tbody.appendChild(mensaje);
        }

        actualizarTotal();
    }

   
    function actualizarTotal() {
        const totalFinal = checkboxDomicilio.checked ? total + costoDomicilio : total;
        totalPrecioElem.textContent = `$${totalFinal.toLocaleString('es-CO')}`;
    }


    checkboxDomicilio.addEventListener("change", actualizarTotal);

 
    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar')) {
            const posicion = e.target.getAttribute('data-index');
            eliminarProductoDelCarrito(posicion);
        }
    });

    
    function validarNumeroTarjeta(numero) {
        return /^\d{16}$/.test(numero);
    }

    function validarFechaExpiracion(fecha) {
        const regexFechaExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!regexFechaExp.test(fecha)) {
            return false;
        }

        const [mes, anio] = fecha.split('/').map(num => parseInt(num, 10));
        const fechaActual = new Date();
        const anioActual = fechaActual.getFullYear() % 100;
        const mesActual = fechaActual.getMonth() + 1;

        return !(anio < anioActual || (anio === anioActual && mes < mesActual));
    }

    function validarCodigoSeguridad(codigo) {
        return /^\d{3,4}$/.test(codigo);
    }

   
    const botonCompra = document.getElementById("completar-compra");
    botonCompra.addEventListener("click", function (e) {
        e.preventDefault();
        botonCompra.disabled = true;

       
        const numeroTarjeta = document.getElementById("tarjeta").value;
        const fechaExp = document.getElementById("fecha-exp").value;
        const codigoSeguridad = document.getElementById("codigo-seguridad").value;
        const nombreTitular = document.getElementById("nombre-titular").value;
        const tipoTarjeta = document.getElementById("tipo-tarjeta").value;

        const presupuestoMaximo = parseInt(localStorage.getItem("presupuestoMaximo")?.replace(/[^0-9]/g, '') || "0");
        const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        const totalConDomicilio = checkboxDomicilio.checked ? total + costoDomicilio : total;

        const validarCompra = new Promise((resolve, reject) => {
            const tiempoEspera = Math.floor(Math.random() * 1000) + 2000; 

            setTimeout(() => {
                
                if (!numeroTarjeta || !fechaExp || !codigoSeguridad || !nombreTitular || !tipoTarjeta) {
                    reject("Por favor complete todos los campos de la tarjeta.");
                    return;
                }
                if (!validarNumeroTarjeta(numeroTarjeta)) {
                    reject("Número de tarjeta inválido. Debe contener 16 dígitos.");
                    return;
                }
                if (!validarFechaExpiracion(fechaExp)) {
                    reject("La tarjeta ha expirado o el formato de fecha es inválido (MM/AA).");
                    return;
                }

                if (!validarCodigoSeguridad(codigoSeguridad)) {
                    reject("Código de seguridad inválido. Debe tener 3 o 4 dígitos.");
                    return;
                }
                if (cantidadTotal > 20) {
                    reject("La cantidad de productos no puede superar los 20 items.");
                    return;
                }          
                if (totalConDomicilio > presupuestoMaximo) {
                    reject("El total de la compra supera el presupuesto máximo permitido.");
                    return;
                }
                resolve("Pago realizado con éxito");
            }, tiempoEspera);
        });

        validarCompra
            .then((mensajeExito) => {
                alert(mensajeExito);
                localStorage.removeItem('carrito'); 
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

   
    function eliminarProductoDelCarrito(posicion) {
        carrito.splice(posicion, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarCarrito();
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
            codigoInput.type= "text";
        } else {
            codigoInput.type="password";
        }
    }
    renderizarCarrito();
}); 