/*
	Crie uma variável qualquer, que receba um array com alguns valores aleatórios
	- ao menos 5 - (fica por sua conta os valores do array).
	*/
var meuArray = ["Daniel", "Calistrato", 15, 10, 1991];

/*
	Crie uma função que receba um array como parâmetro, e retorne esse array.
	*/

var funcaoArray = function (meuArray) {
  return meuArray;
};

/*
	Imprima o segundo índice do array retornado pela função criada acima.
	*/
console.log(funcaoArray(meuArray[1]));

/*
	Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
	segundo, um número. A função deve retornar um índice do array que foi passado
	no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
	segundo parâmetro.
*/

var funcaoArray2 = function (arr, index) {
  return arr[index];
};
/*
	Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
	*/
var meuArray3 = ["Perez", 15, true, null, [3, "Daniel", 20]];
//

/*
	Invoque a função criada acima, fazendo-a retornar todos os valores do último
	array criado.
	*/
console.log(funcaoArray2(meuArray3, 0));
console.log(funcaoArray2(meuArray3, 1));
console.log(funcaoArray2(meuArray3, 2));
console.log(funcaoArray2(meuArray3, 3));
console.log(funcaoArray2(meuArray3, 4));

/*
	Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
	livro. Dentro dessa função, declare uma variável que recebe um objeto com as
	seguintes características:
	- esse objeto irá receber 3 propriedades, que serão nomes de livros;
	- cada uma dessas propriedades será um novo objeto, que terá outras 3
	propriedades:
	    - `quantidadePaginas` - Number (quantidade de páginas)
	    - `autor` - String
	    - `editora` - String
	- A função deve retornar o objeto referente ao livro passado por parâmetro.
	- Se o parâmetro não for passado, a função deve retornar o objeto com todos
	os livros.
	*/
function book(nomelivro) {
  var livros = {
    almanaqueDisney: {
      nomelivro: "almanaqueDisney",
      quantidadeDePaginas: 180,
      autor: "Josué",
      editora: "abril",
    },
    napoleonHill: {
      nomelivro: "napoleonHill",
      quantidadeDePaginas: 235,
      autor: "Daniel",
      editora: "veja",
    },
    corpoFechado: {
      nomelivro: "corpoFechado",
      quantidadeDePaginas: 150,
      autor: "João",
      editora: "exame",
    },
  };
  if (nomelivro) {
    return livros[nomelivro];
  } else {
    return livros;
  }
  //return nomelivro ? livros : livros[nomelivro];
}

/*
	Usando a função criada acima, imprima o objeto com todos os livros.
	*/
console.log(book());

/*
	Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
	usando a frase:
	"O livro [NOME_DO_LIVRO] tem [X] páginas!"
	*/

var livroPagina = book("almanaqueDisney");
console.log(
  "O livro " +
    livroPagina.nomelivro +
    " tem " +
    livroPagina.quantidadeDePaginas +
    " páginas!"
);

/*

/*
	Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
	a frase:
	"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
	*/
var autorLivro = book("corpoFechado");
console.log(
  "O autor do livro " + autorLivro.nomelivro + " é " + autorLivro.autor
);

/*
	Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
	a frase:
	"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
	*/
// ?
var editoraLivro = book("napoleonHill");
console.log(
  "O livro " +
    editoraLivro.nomelivro +
    " foi publicado pela editora " +
    editoraLivro.editora
);
