class Ponto {

    constructor(nome, x, y) {
        this.x = x
        this.y = y
        this.nome = nome
    }

    mover_horizontalmente(posicao_x) {

        return this.x += (posicao_x)
    }

    mover_verticalmente(posicao_y) {
        return this.y += (posicao_y)
    }


    mover(posicao_x, posicao_y) {

        this.y += (posicao_x)
        this.x += (posicao_y)
        return [this.y, this.x]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y2 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, x, y, altura, largura) {
        super(nome, x, y)
        
        this.cor = cor
        this.altura = altura
        this.largura = largura

    }
    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura +"px"
        this.node.style.backgroundColor = this.cor
        this.node.style.top = this.x + "px"
        this.node.style.left = this.y + "px"
        body.appendChild(this.node)
    }
}

