window.addEventListener("focus", event => {

    console.log("focus");

});

document.addEventListener("click", event => {

    console.log("click");

});

let agora = new Date;

// console.log(agora);
console.log(agora.toLocaleDateString("pt-br"));

// arrays
let carros = ["uno", "palio", "toro"];

console.log(carros[1]);

carros.forEach(function (value, index) {

    console.log(value, index);
});

let celular = function () {

    this.cor = "prata";

    this.ligar = function () {

        console.log("uma ligação");
        return "ligando...";
    }

}

let objeto = new celular();

console.log(objeto);

console.log(objeto.ligar);