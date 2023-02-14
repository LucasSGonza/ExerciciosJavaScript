function imprimirIdade() {

    let born = nascimento.value; //document.getElementById('nascimento').value;
    let yearNow = anoAtual.value; //document.getElementById('anoAtual').value;

    /*
    const born = parseInt (prompt('Digite seu ano de nascimento'));
    const yearNow = parseInt (prompt('Digite o ano atual'));
    */

    let nowAge = yearNow - born;
    let ageAt2050 = 2050 - born;

    alert("Nascimento: " + born + "\n" +
        "Ano atual: " + yearNow + "\n" +
        "Idade atual: " + nowAge + "\n" +
        "Idade em 2050: " + ageAt2050);
}