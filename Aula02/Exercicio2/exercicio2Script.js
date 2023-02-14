function calcularIMC(){
    let peso,altura,imc;
    peso = parseFloat(document.getElementById("peso").value);
    altura = ( parseFloat(document.getElementById("altura").value) ) / 100; //pedi para o usuário informar a altura em cm
                                                                            //ent deve ser feita a conversão para m dividindo o valor por 100
    imc = peso / (Math.pow(altura,2)); //Math.pow (base,expoente)

    document.write("IMC: " + imc.toFixed(2) + "<br>");

    if (imc < 20){
        document.write("Situação: Abaixo do peso");
    } else if (imc >= 20 && imc < 25){
        document.write("Situação: Normal");
    } else if (imc >=25 && imc < 30){
        document.write("Situação: Sobrepeso");
    } else if (imc >= 30 && imc < 35){
        document.write("Situação: Obesidade grau I");
    } else if (imc >= 35 && imc < 40){
        document.write("Situação: Obesidade grau II");
    } else if (imc > 40){
        document.write("Situação: Obesidade grau III");
    }
    
}