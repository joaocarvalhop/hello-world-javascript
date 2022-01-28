var olaMundo = "Olá mundo!";
console.log(olaMundo);

let a = 10;

// variável que nunca muda
const b = "20";

console.log(a == b);

console.log(a == b && typeof b == "string");

console.log(a == b || a != b);

let cor = "amarelo";

if (cor === "verde") {

    console.log("siga!");

} else if (cor === "amarelo") {

    console.log("atenção!");

} else {

    console.log("pare!");

}

// mesmo exemplo, agora usando o switch
let cor = "amarelo";

switch (cor) {

    case "verde":
        console.log("siga")
        break;

    case "amarelo":
        console.log("atencao")
        break;

    case "vermelho":
        console.log("pare")
        break;

    default:
        console.log("não sei");

}

// tabuada
let n = 5;

for (let i = 0; i <= 10; i++) {

    console.log(`${i} X ${n} = ${i * n}`);
    // console.log(i + " X " + n + " = " + (i * n));

}

function calc(x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`);
}

let resultado = calc(5, 2, "+");

console.log(resultado);

// arrow function: uma variável que armazena uma função
let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);
}