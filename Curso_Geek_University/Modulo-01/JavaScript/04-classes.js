/*class Cachorro{
    nome = `Rex`;
    latir(){
        return `${this.nome}: Au! au!`;
    }
}

let doggo = new Cachorro();

console.log(doggo.latir());*/


class Animal{
    constructor(f){
        this.familia = f
    }
    andar = ()=> {return "andando..."}
}

class Cachorro extends Animal{
    constructor(n, i){
        super('Carnívoros')
        this.nome = n,
        this.idade = i
    }
    latir = ()=>{
        return `${this.nome}: Au! au!`;
    }

}

let doggo = new Cachorro('Rex', 8);

console.log(doggo.latir());

let max = new Cachorro('Max', 1);

console.log(max);

console.log(max.latir());

console.log(max.andar());

console.log(max.familia);