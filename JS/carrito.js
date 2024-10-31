function limpiarCampos() {
    document.getElementById("nComprador").value = "";
    document.getElementById("pMaximo").value = "";
    document.getElementById("cMaxima").value = "";
    document.getElementById("direccion").value = "";
    document.querySelectorAll('input[name="estado"]').forEach(radio => radio.checked = false);
}
