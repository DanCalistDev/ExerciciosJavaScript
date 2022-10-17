// 1- Declarar uma variável chamada `myvar`, sem valor.
var myvar;
console.log(myvar);
//2 - Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;
console.log(myvar);
//3 - Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;
console.log(soma);
//4 - Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
++soma;
console.log(soma);
//5 -  Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;
console.log(soma);

// 6 -Qual é o valor da variável `soma` até aqui?
console.log(soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;
console.log(souninja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ["arroz", "feijao", "ovo"];
console.log(comida);

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
if (soma === myvar) {
  console.log("É igual");
} else console.log("Não é igual");

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if (myvar <= soma) {
  console.log("É menor ou igual");
} else console.log("Não é menor ou igual");

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.

function divisao(x, y) {
  const resultado = x / y;
  console.log(resultado * 5);
  return resultado;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
const retorno = divisao(10, 2);
console.log(retorno);
