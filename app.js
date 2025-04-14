let saldo = 0;

function actualizarSaldo() {
    document.getElementById('saldo').innerText = saldo;
}

function obtenerCantidad() {
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    return isNaN(cantidad) ? 0 : cantidad;
}

function ahorrar() {
    const cantidad = obtenerCantidad();
    saldo += cantidad;
    actualizarSaldo();
}

function retirar() {
    const cantidad = obtenerCantidad();
    if(cantidad>saldo){
        alert('Usted no dispone de la cantidad solicitada.')
    }else{
        saldo -= cantidad;
        actualizarSaldo();
    }
    
}
