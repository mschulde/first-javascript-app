document.getElementById("btnAgregarProducto").addEventListener("click", agregarFila);
let subtotalCalc=0;

function agregarFila() {
    const filaNueva = document.createElement("tr");

    let producto = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidadProducto").value;
    let precio = document.getElementById("precioProducto").value;

    let subtotal = calcularSubtotal(precio, cantidad);


    filaNueva.innerHTML = `
        <td>${producto}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${subtotal}</td>
    `;

    document.getElementById("detalleFactura").appendChild(filaNueva);

    subtotalCalc+=subtotal;
    let ivaCalc= calcularIVA(subtotalCalc);
    let totalCalc=calcularTotal(subtotalCalc);

    const subtotalFinal = document.getElementById("subtotal");
    const iva = document.getElementById("iva");
    const total = document.getElementById("total");

    subtotalFinal.innerHTML="Subtotal: "+subtotalCalc.toFixed(2);
    iva.innerHTML="IVA: "+ivaCalc.toFixed(2);
    total.innerHTML="Total: "+totalCalc.toFixed(2);

}



function calcularTotal(subtotal) {
    return subtotal+subtotal*0.15;
}

function calcularIVA(subtotal){
    return subtotal*0.15;
}

function calcularSubtotal(precio,cantidad){
    return precio*cantidad;

}
