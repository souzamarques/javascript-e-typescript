// Funções Imediatas - IIFE (Immediately Invoked Function Expression)

(function(ultimoNome) {
    const nome = "Lucas"
    const sobrenome = "Souza"

    function meuNome(nome, sobrenome) {
        console.log(`Nome: ${nome} ${sobrenome} ${ultimoNome}`)
    }

    function falaNome() {
        meuNome(nome, sobrenome)
    }

    falaNome()
})("Marques") // Argumentos para a Função Imediata (IIFE)
