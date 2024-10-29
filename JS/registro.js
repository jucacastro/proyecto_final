document.getElementById("iniciarCompra").addEventListener("click", function(validar) {
    validar.preventDefault();

    const nombreComprador = document.getElementById("nComprador").value.trim();
    const presupuestoMaximo = document.getElementById("pMaximo").value.trim();
    const cantidadMaxima = document.getElementById("cMaxima").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const metodoEntrega = document.querySelector('input[name="estado"]:checked');
    let entregaSeleccionada = "";
        if (metodoEntrega) {
         entregaSeleccionada = metodoEntrega.value;
}


    if (!nombreComprador || !presupuestoMaximo || !cantidadMaxima || !direccion || !entregaSeleccionada) {
        alert("Por favor, completa todos los campos y selecciona un método de entrega.");
        return;
    }

   
    if (nombreComprador.length > 20) {
        alert("El nombre debe ser solo texto y no exceder los 20 caracteres.");
        return;
    }


    if (isNaN(presupuestoMaximo) || presupuestoMaximo <= 0) {
        alert("El presupuesto máximo debe ser un número positivo en pesos.");
        return;
    }

    
    if (isNaN(cantidadMaxima) || cantidadMaxima <= 0 || cantidadMaxima > 20) {
        alert("La cantidad máxima de productos debe ser un número positivo y no exceder los 20 productos.");
        return;
    }

    localStorage.setItem("nombreComprador", nombreComprador);
    localStorage.setItem("presupuestoMaximo", `$${parseInt(presupuestoMaximo).toLocaleString('es-CO')}`);
    localStorage.setItem("cantidadMaxima", cantidadMaxima);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("entregaSeleccionada", entregaSeleccionada);

   
    window.location.href = "../HTML/listadoProductos.html";
});

function limpiarCampos() {
    document.getElementById("nComprador").value = "";
    document.getElementById("pMaximo").value = "";
    document.getElementById("cMaxima").value = "";
    document.getElementById("direccion").value = "";
    document.querySelectorAll('input[name="estado"]').forEach(radio => radio.checked = false);
}
