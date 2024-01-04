class jogo{
    constructor(nome,idade,tipo,ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    escrever(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let mago = new jogo("Fabio","22","mago","magia")
mago.escrever()

let guerreiro = new jogo("Fabio","22","guerreiro","espada")
guerreiro.escrever()

let monge = new jogo("Fabio","22","monge","artes marciais")
monge.escrever()

let ninja = new jogo("Fabio","22","ninja","shuriken")
ninja.escrever()