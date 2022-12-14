// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function callback(x, y) {
  return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
const temp = callback(2, 8) + 5;

// Qual o valor atualizado dessa variável
console.log(temp);
// Declare uma nova variável, sem valor.
let primeiraVariavel;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
// const name = "daniel";
function callback2() {
  primeiraVariavel = "Daniel";
  return "O valor da variável agora é " + ", " + primeiraVariavel;
}
// primeiraVariavel = "daniel";
// Invoque a função criada acima.
console.log(callback2());
// console.log(primeiraVariavel);
// Qual o retorno da função (Use comentários de bloco).
/*O valor da variável agora é , Daniel*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function callback3(x, y, z) {
  if (x === undefined || y === undefined || z === undefined) {
    return "Preencha todos os valores corretamente!";
  } else return x * y * z + 2;
}
console.log(callback3());
// Invoque a função criada acima, passando só dois números como argumento.
console.log(callback3(2, 4));
// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
/*"Preencha todos os valores corretamente!"*/
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(callback3(2, 4, 5));

// Qual o resultado da invocação acima (Use comentários para mostrar o valor retornado).
/*42*/
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function callback4(a, b, c) {
  if (a !== undefined && b === undefined && c === undefined) return a;
  else if (a !== undefined && b !== undefined && c === undefined) return a + b;
  else if (a !== undefined && b !== undefined && c !== undefined)
    return (a + b) / c;
  else if (a === undefined && b === undefined && c === undefined) return false;
  else return null;
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(callback4()); // false
console.log(callback4(1)); //1
console.log(callback4(2, 2)); //4
console.log(callback4(2, 6, 4)); //2
