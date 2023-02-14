function fazerMedia(){
    let nota1,nota2,nota3,media;
    nota1 = parseFloat(prompt("Digite a nota da A1"));
    nota2 = parseFloat(prompt("Digite a nota da A2"));
    nota3 = parseFloat(prompt("Digite a nota da A3"));
    media = (nota1 + nota2 + nota3) / 3;
    document.write("A1: " + nota1 + "<br>" +
                    "A2: " + nota2 + "<br>" +
                    "A3: " + nota3 + "<br>" +
                    "Média Aritmética: " + media);
}