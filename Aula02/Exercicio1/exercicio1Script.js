function efetuarCompra() {
    let valorPago, valorTotalCompra, restoTroco, troco = 0;
    var nota50, nota20, nota10, nota5, nota2, nota1;

    valorTotalCompra = parseInt(document.getElementById("valorTotalCompra").value);
    valorPago = parseInt(document.getElementById("valorPago").value);

    if (valorPago < valorTotalCompra) {
        document.write("Valor Pago: R$" + valorPago + "<br>" +
            "Valor da compra: R$" + valorTotalCompra + "<br>" +
            "A quantia paga e insuficiente para realizar a compra! <br>");
    } else {
        troco = valorPago - valorTotalCompra;

        restoTroco = troco % 50;
        nota50 = parseInt(troco / 50);

        nota20 = parseInt(restoTroco / 20);
        restoTroco = restoTroco % 20;

        nota10 = parseInt(restoTroco / 10);
        restoTroco = restoTroco % 10;

        nota5 = parseInt(restoTroco / 5);
        restoTroco = restoTroco % 5;

        nota2 = parseInt(restoTroco / 2);
        restoTroco = restoTroco % 2;

        nota1 = parseInt(restoTroco / 1);
        restoTroco = restoTroco % 1;

        document.write("Valor pago: R$" + valorPago + "<br>" +
            "Valor da compra: R$" + valorTotalCompra + "<br>" +
            "Troco: R$" + troco + "<br>" +
            "Notas de R$50,00: " + nota50 + "<br>" +
            "Notas de R$20,00: " + nota20 + "<br>" +
            "Notas de R$10,00: " + nota10 + "<br>" +
            "Notas de R$5,00: " + nota5 + "<br>" +
            "Notas de R$2,00: " + nota2 + "<br>" +
            "Notas de R$1,00: " + nota1 + "<br>");

    }

}