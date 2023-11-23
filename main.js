
class Animal {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    fazerSom() {
      throw new Error("O método fazerSom() deve ser implementado nas classes filhas.");
    }
  }
  
  
  class Cachorro extends Animal {
    fazerSom() {
      return "Au au!";
    }
  }
  
  class Gato extends Animal {
    fazerSom() {
      return "Miau!";
    }
  }
  
  
  const animal1 = new Cachorro("Rex", 5);
  const animal2 = new Gato("Frajola", 3);
  const animal3 = new Cachorro("Bolinha", 2);
  
  console.log(`${animal1.nome} tem ${animal1.idade} anos e faz: ${animal1.fazerSom()}`);
  console.log(`${animal2.nome} tem ${animal2.idade} anos e faz: ${animal2.fazerSom()}`);
  console.log(`${animal3.nome} tem ${animal3.idade} anos e faz: ${animal3.fazerSom()}`);
  