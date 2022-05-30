// OBEJTOS LITERAIS 

/*
Em JavaScript, um Objeto Literal é uma entidade separada com Propriedades. 
Por sua vez, essas propriedades têm valores. 
O conceito de objetos pode ser comparado a entidades na vida real.
*/

let carro = {
    placa: 'ADF1238', 
    cor: 'Vermelho'
}

console.log(carro.placa) //objeto.propriedade
console.log(carro.cor)

// Se uma propriedade armazena uma funcao, entao a chamamos de METODO DE UM OBJETO

let carro2 = {
    saudacao: function(){
        return 'Ola Mundo';
    }
}
console.log(carro2.saudacao()); //objeto.metodo 

// TRABALHANDO DENTRO DE UM OBJETO // THIS se refere ao proprio objeto aonde estamos. 
// this.propriedade 

let tenista = {
    nome: 'Roger',
    Sobrenome: 'Federer',
    saudacao: function(){ return 'Ola mundo, me chamo' +  this.nome;} 
}
console.log(tenista.saudacao());

// FUNCAO CONSTRUTORA//

function Carro(marca, modelo){ // Carro sera o nome do nosso construtor // os parametros (marca e modelo) sao obrigatorios.
    this.marca = marca;
    this.modelo = modelo;
};

// INSTANCIAR UM OBJETO // 

let meuCarro = new Carro('Ford', 'Falcon');

let outroCarro = new Carro('Chevrolet', 'Prisma'); // qdo iniciamos o METODO new ele retorna uma instancia. 

// com a mesma funcao construtora podemos criar quantos carros quisermos. 

// O QUE EH JSON// 
//JSON (Javascript Object Notation) é um padrão de texto usado para se comunicar entre sistemas.

// EH UMA STRING DE TEXTO SIMPLES, qualquer linguagem de programacao pode interpreta-lo. 
// a maioria das linguagens Web funcionam nativamente com o JSON. 
// JSON nao suporta METODOS. 

json.parse()
//recebe dados de uma string de texto em formato Json 
//devolve em formato JS

let dadosJson = '{"cidade": "Sao Paulo", "bairro": "Morumbi"}'

let dadosConvertidos = Json.parse(dadosJson);

console.log(dadosConvertidos);

json.stringfy()
//faz o contrario do parse()























