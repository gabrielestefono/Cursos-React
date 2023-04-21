const numeros = [1,2,3,4];

const novosNumeros = [ ...numeros, 5];

console.log(numeros);
console.log(novosNumeros);

const rex = {
    nome: "Rex"
};

const max = {...rex, idade: 2, familia: "Carnívoros"};
rex.nome = "Max";

console.log(rex);
console.log(max);




const somar = (...numeros) => numeros.reduce((a, b) => a + b,0  );

console.log(somar(2,3,4,5,6,7,8,234));