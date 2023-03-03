var matriz = [  //matriz 3x3
    [],
    [],
    []
];

var j, i;



function preencherMatriz() {

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz.length; j++) {
            matriz[i][j] = parseInt(prompt("Digite um número inteiro para a posição a" +
                (i + 1) + "" + (j + 1)));
        }
    }
    return matriz;
}


function imprimirMatriz(matriz) {
    console.table(matriz);
}

function imprimirDiagonalPrincipal(matriz) {

    for (i = 0; i < matriz.length; i++) {
        for (j = 0; j < matriz.length; j++) {

            if (i == j) {
                console.log(matriz[i][j]);
            }

        }

    }

}