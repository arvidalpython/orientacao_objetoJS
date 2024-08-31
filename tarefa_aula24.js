function Imovel(tipo){
    this.tipo = tipo;

}

function Apartamento(tipo, tamanho, cor){
    this.tamanho = tamanho;
    this.cor = cor;

    Imovel.call(this, tipo);

}

function Casa(tipo, tamanho, cor){
    this.tamanho = tamanho;
    this.cor = cor;

    Imovel.call(this, tipo);

}

const apartamentoDoPedro = new Apartamento('apartamento');

const apartamentoDaAna = new Apartamento('apartamento');

const casaDaLuana = new Casa('casa');