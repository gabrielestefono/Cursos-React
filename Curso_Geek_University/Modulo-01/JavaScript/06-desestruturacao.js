const frutas = ['Laranja', 'Banana', 'Uva'];

let [fruta1, , fruta3] = frutas;

const pessoa = {
    nome: 'João',
    idade: 20,
    pais: 'Brasil',
    idioma: 'Português'
}

const localidade = ({idioma, pais}) => `Você mora no ${pais} e fala ${idioma}`;
console.log(localidade(pessoa))

