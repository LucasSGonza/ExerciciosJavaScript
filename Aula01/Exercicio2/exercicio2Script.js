function confirmar() {
    let salario = parseFloat(document.getElementById("salario").value);
    //const salario = parseFloat(prompt("Digite seu salário"));

    let aumento = (salario * 0.25);
    let newSalario = salario + aumento;
    alert("O seu novo salário após o aumento é de: R$" + newSalario);
}