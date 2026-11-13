const usuarios = [
  {
    id: 1,
    nome: "Ana",
    email: "ana@email.com"
  },
  {
    id: 2,
    nome: "Carlos",
    email: "carlos@email.com"
  },
  {
    id: 3,
    nome: "Mariana",
    email: "mariana@email.com"
  }
];

function buscarUsuario(usuarios, email) {
  const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
  return usuarioEncontrado || null;
}
const emailDigitado = prompt("Digite o e-mail:");
const resultado = buscarUsuario(usuarios, emailDigitado);

if (resultado) {
  console.log("Usuário encontrado:");
  console.log(resultado.nome);
} else {
  console.log("Usuário não encontrado.");
}
//2
///////////////////////////////////////////////////////////////////////////////////////////

function criarProduto(nome, preco, categoria) {
  return {
    nome: nome,
    preco: preco,
    categoria: categoria
  };
}

function aplicarDesconto(produto, percentual) {
  const valorDesconto = produto.preco * (percentual / 100);
  
  return {
    ...produto,
    preco: produto.preco - valorDesconto
  };
}

const nomeProduto = prompt("Digite o nome do produto:");
const precoProduto = Number(prompt("Digite o preço do produto:"));
const categoriaProduto = prompt("Digite a categoria do produto:");
const produtoCadastrado = criarProduto(nomeProduto, precoProduto, categoriaProduto);
console.log("Produto cadastrado:", produtoCadastrado);
const produtoComDesconto = aplicarDesconto(produtoCadastrado, 10);
console.log("Produto com desconto:", produtoComDesconto);

///////////////////////////////////////////////////////////////////////////////////////////

const produtos = [
{ nome: "Teclado", preco: 120 },
{ nome: "Mouse", preco: 80 },
{ nome: "Monitor", preco: 900 },
{ nome: "Headset", preco: 250 },
{ nome: "Webcam", preco: 300 } 
];

function filtrarProdutos(produtos, precoMaximo) {
return produtos.filter(produto => produto.preco <= "precoMaximo");
}

const resultado = filtrarProdutos(produtos, 300);
resultado.forEach(item => console.log(item.nome));

///////////////////////////////////////////////////////////////////////////////////////////

const usuarios = [
    {
        id: 1,
        nome: "Ana",
        email: "ana@email.com"
    },
    {
        id: 2,
        nome: "Carlos",
        email: "carlos@email.com"
    },
    {
        id: 3,
        nome: "Mariana",
        email: "mariana@email.com"
    }
];

function buscarUsuario(usuarios, email) {
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email);
    return usuarioEncontrado || null;
}

///////////////////////////////////////////////////////////////////////////////////////////

const carrinho = [
    { produto: "Mouse", quantidade: 2, preco: 80 },
    { produto: "Teclado", quantidade: 1, preco: 150 },
    { produto: "Headset", quantidade: 2, preco: 200 }
];

function calcularTotal(carrinho) {
    const total = carrinho.reduce((acumulador, item) => {
        return acumulador + (item.preco * item.quantidade);
    }, 0);
    return total;
};

///////////////////////////////////////////////////////////////////////////////////////////

let temperatura = Number(prompt("Informe uma temperatura em celsius"));

function celsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}


function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

console.log('Temperatura: ${temperatura}°C');
console.log('Fahrenheit: ${celsiusParaFahrenheit(temperatura)}°F');
console.log('Kelvin: ${celsiusParaKelvin(temperatura)}K');

///////////////////////////////////////////////////////////////////////////////////////////

const funcionarios = [
    {
        nome: "João",
        salario: 2500,
        cargo: "Desenvolvedor"
    },
    {
        nome: "Maria",
        salario: 3200,
        cargo: "Designer"
    },
    {
        nome: "Carlos",
        salario: 4500,
        cargo: "Analista"
    }
];

function aplicarReajuste(funcionarios, percentual) {
    return funcionario.map(funcionario => ({ ...funcionario,
        salario: funcionario.salario + (funcionario.salario * (percentual / 100))
    }));
}

const novoSalarios = aplicarReajuste(funcionarios, 10);
novoSalarios.forEach(func => {
    console.log('${func.nome} -> R$ ${func.salario}');
});


///////////////////////////////////////////////////////////////////////////////////////////

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Mariana", nota: 9 },
    { nome: "Pedro", nota: 4 },
    { nome: "João", nota: 7 }
];

function listarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 7);
}

function obterNomes(alunos) {
    return alunos.map(aluno => aluno.nome);
}

const alunosAprovados = listarAprovados(alunos);
const nomeAprovados = obterNomes(alunosAprovados);

console.log(nomesAprovados);

///////////////////////////////////////////////////////////////////////////////////////////

const pedidos = [
    {
        id: 1,
        cliente: "Ana",
        valor: 150
    },
    {
        id: 2,
        cliente: "Carlos",
        valor: 300
    },
    {
        id: 3,
        cliente: "Ana",
        valor: 250
    },
    {
        id: 4,
        cliente: "Mariana",
        valor: 500
    }
];

function buscarPedidosPorCliente(pedidos, cliente) {
    return pedidos.filter(pedido => pedido.cliente === cliente);
}

function calcularTotalPedidos(pedidos) {
    return pedidos.reduce((acumulador, pedido) => {
    return acumulador + pedido.valor;
}, 0);
}

const pedidoAna = buscarPedidosPorCliente(pedidos, "Ana");

pedidosAna.forEach(pedido => {
    console.log('Pedido ${pedido.id} -> R$ ${pedido.valor}');
});

console.log('Total: R$ ${calcularTotalPedidos(pedidosAna)}');

///////////////////////////////////////////////////////////////////////////////////////////


function criarAluno(nome, idade, curso, nota) {
    return {
        nome: nome,
        idade: idade,
        curso: curso,
        nota: nota
    };
}
function buscarAluno(aluno, nome) {
    return alunos.find(aluno => aluno.nome === nome) || null;
}
function listarAprovados(alunos) {
    return alunos.filter(aluno => aluno.nome >= 7 );
}
function obterNomes(alunos) {
    return alunos.map(alunos => aluno.nome);
}
function calcularMedia(alunos) {
    const soma = alunos.reduce((acumulador, aluno) => {
        return acumulador + aluno;
    }, 0);

    return soma / alunos.length;
}
function gerarResumo(alunos) {
  const aprovados = listarAprovados(alunos).length;
  const reprovados = alunos.length - aprovados;

  return {
    quantidadeAlunos: alunos.length,
    mediaTurma: calcularMedia(alunos),
    aprovados: aprovados,
    reprovados: reprovados
  };
}

const alunos = [];

for (let i = 1; i <= 5; i++) {
  const nome = prompt(`Digite o nome do ${i}º aluno:`);
  const idade = Number(prompt(`Digite a idade de ${nome}:`));
  const curso = prompt(`Digite o curso de ${nome}:`);
  const nota = Number(prompt(`Digite a nota de ${nome}:`));

  const novoAluno = criarAluno(nome, idade, curso, nota);
  alunos.push(novoAluno);
}
console.log("Lista completa:", alunos);
console.log("Nomes cadastrados:", obterNomes(alunos));
console.log("Aprovados:", listarAprovados(alunos));
console.log("Resumo da turma:", gerarResumo(alunos));