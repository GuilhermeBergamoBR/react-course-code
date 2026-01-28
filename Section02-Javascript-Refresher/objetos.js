// OBJETOS
// criando um objeto com {}
const pessoa = {
  nome: "Guilherme Bergamo da Silva",
  idade: 24,
  nacionalidade: "brasileiro",
  cumprimentar() {
    console.log(
      `Olá, meu caro ${this.nome}! Como é ser ${this.nacionalidade} e ter ${this.idade} anos?`
    );
  },
};
// Criando um objeto com class
class Person {
  constructor(nome, idade, nacionalidade) {
    this.nome = nome;
    this.idade = idade;
    this.nacionalidade = nacionalidade;
  }

  cumprimentar() {
    console.log(
      `Olá, meu caro ${this.nome}! Como é ser ${this.nacionalidade} e ter ${this.idade} anos?`
    );
  }
}
const minhaPessoa = new Person("Guilherme", 24, "brasileiro");

// 📦 Acessando propriedades
// console.log(pessoa.nome);       // Guilherme (dot notation)
// console.log(pessoa["idade"]);   // 25 (bracket notation)
// ✏️ Alterando valores
// pessoa.idade = 26;       // muda para 26
// pessoa["cidade"] = "SP"; // adiciona nova propriedade
pessoa['nome'] = 'Guilherminho'
console.log(pessoa)
// 🛠️ Métodos úteis de Object
// Object.keys(obj) → retorna array com as chaves

// Object.values(obj) → retorna array com os valores

// Object.entries(obj) → retorna array com [chave, valor]

// Object.assign(dest, src) → copia propriedades

// Object.freeze(obj) → congela o objeto (não dá pra mudar)

