document.getElementById("iciarCompra").addEventListener("click", function(evitar) {
    evitar.preventDefault();

 
    const nombreComprador = document.getElementById("nComprador").value;
    const presupuestoMaximo = document.getElementById("pMaximo").value;
    const cantidadMaxima = document.getElementById("cMaxima").value;
    const direccion = document.getElementById("direccion").value;
    
    const metodoEntrega = document.querySelector('input[name="estado"]:checked');
    const entregaSeleccionada = metodoEntrega ? metodoEntrega.value : "";

    if (nombreComprador === "" || presupuestoMaximo === "" || cantidadMaxima === "" || direccion === "" || entregaSeleccionada === "") {
        alert("Por favor, completa todos los campos y selecciona un método de entrega.");
        return; 
    }
    localStorage.setItem("nombreComprador", nombreComprador);
    localStorage.setItem("presupuestoMaximo", presupuestoMaximo);
    localStorage.setItem("cantidadMaxima", cantidadMaxima);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("entregaSeleccionada", entregaSeleccionada);

   
    window.location.href = "../HTML/listadoProductos.html";
});


function limpiarCampos() {
    const nombreComprador = document.getElementById("nComprador").value="";
    const presupuestoMaximo = document.getElementById("pMaximo").value="";
    const cantidadMaxima = document.getElementById("cMaxima").value="";
    const direccion = document.getElementById("direccion").value="";
}