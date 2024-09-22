const alunos = [
    {nome: "Maria", nota: 8},
    {nome: "Rafaela", nota: 7},
    {nome: "Isa", nota: 5},
    {nome: "Love", nota: 6},
]

const aprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
})

console.log(aprovados);