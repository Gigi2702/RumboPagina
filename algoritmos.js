function calcularCuotaMensual(precio, tasaAnual, años) {


    const tasaMensual = tasaAnual / 100 / 12;
    const numeroPagos = años * 12;
    
    const cuotaMensual = (precio * tasaMensual * (1 + tasaMensual) ** numeroPagos) / 
                         ((1 + tasaMensual) ** numeroPagos - 1);

}
   