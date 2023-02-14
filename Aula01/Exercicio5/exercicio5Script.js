function calcularHipotenusa() {
    let catetoA, catetoB, hipotenusa;
    catetoA = parseFloat(prompt("Digite o valor do cateto A"));
    catetoB = parseFloat(prompt("Digite o valor do cateto B"));
    hipotenusa = Math.sqrt((catetoA ** 2) + (catetoB ** 2)); //podia usar Math.pow (base, expoente)
                                                            // ** --> expoente

    document.write("Cateto A: " + catetoA + "<br>" +
                   "Cateto B: " + catetoB + "<br>" +
                   "Hipotenusa: " + hipotenusa.toFixed(2) + "<br>"); //hipotenusa.toFixed() --> limita casas decimais
}