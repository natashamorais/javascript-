class Ponto {

    constructor(x, y){
        this.x = x
        this.y = y
    }
    
    mover_horizontalmente(posicao_x) {

      return  this.x += (posicao_x)
    }

    mover_verticalmente(posicao_y) {
    return this.y += parseInt(posicao_y)
    }
} 

mover(posicao_x, posicao_y){

this.y+= (posicao_x)
this.x += (posicao_y)
return [this.y, this.x]
}

distancia_entre_dois_pontos(outro_ponto) {
const x1 = this.x
const y2 = this.y
const x2 = outro_ponto.x
const y2 = outro_ponto.y
return Math.sqrt((Math.abs(x1-x2) ) **2 + ( Math.abs(y1-y2))**2)
}


class DivQueAnda extends Ponto{
    constructor (nome, cor, altura, largura){
    super (nome, 0, 0 )
    this.cor = cor 
    this.altura = altura 
    this.largura = largura 

    }
    desenhar(){
        const body = document.querySelector("body")
        const div = document.createElement("div")
        div.style.width = this.largura
        div.style.height = this.altura
        div.style.background = this.cor
     body.appendChild(div)
    }
}

const juana = new DivQueAnda (juana, 240, 240, red)
juana.desenhar()