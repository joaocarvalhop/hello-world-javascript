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