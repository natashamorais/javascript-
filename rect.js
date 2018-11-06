const rect = {
    altura: 10,
    largura: 30,
    cor: "red",
    unidade: "m"
    area: function () {
        return this.altura * this.largura + this.unidade
    }
}


function Rect(altura, largura, cor, unidade) {
    this.altura = altura
    this.largura = largura
    this.cor = cor
    this.unidade = unidade
    area: function () {
        this.area = this.altura * this.largura + this.unidade
    }
}

class Rect {
    constructor(altura, largura, cor, unidade) {

        this.altura = altura
        this.largura = largura
        this.cor = cor
        this.unidade = unidade
        
    }
    area (){
        return this.altura * this.largura + this.unidade
    }
}

class Quadrado extends Rect{
    constructor (lado,cor,unidade){
        super (lado,lado,cor,unidade)
    }
}