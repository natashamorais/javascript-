class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [this.x, this.y]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt((Math.abs(x1 - x2)) ** 2 + (Math.abs(y1 - y2)) ** 2)
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        body.appendChild(this.node)
    }
    //direção: up, down, left, right
    move_na_tela(direcao) {
        const incremento = 10
        if (direcao === "up")
            this.mover_verticalmente(-incremento)
        this.node.style.top = this.y + "px"

        if (direcao === "down")
            this.mover_verticalmente(incremento)
        this.node.style.top = this.y + "px"

        if (direçao === "left")
            this.mover_horizontalmente(-incremento)
        this.node.style.left = this.x + "px"

        if (direcao === "right")
            this.mover_horizontalmente(incremento)
        this.node.style.left = this.x + "px"

    }



}

const bolinha1 = new Div("rosa", "pink", 150, 150, 50, 50)

bolinha1.desenhar()


document.addEventListener("keypress", function (e) {
    if (e.keycode === "ArrowUp") {
        div.move_na_tela("up")
    }

    else if (e.keycode === "ArrowDown") {
        div.move_na_tela("down")

    }

    else if (e.keycode === "ArrowRight") {
        div.move_na_tela("right")

    }

    else if (e.keycode === "ArrowLeft") {
        div.move_na_tela("left")

    }

})






