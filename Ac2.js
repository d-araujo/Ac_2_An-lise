//CONTABILIZAR OS LANCHES PEDIDOS EM UMA LANCHONETE

//LANCHES:
//1. McLanche Alegre - é um hambúrguer simples com carne e queijo apenas, mas acompanhabatata pequena e fruta.
//1.1 Fruta
//2. Big Lanche - vai dois hambúrgueres, alface, queijo, molho bacana, cebola, picles e pão. Nocombo ele fica um pouco mais caro e acompanha batata média e bebida.
//3. McHen - é um lanche de frango empanado e vai hambúrguer de frango, alface, queijo e picles.No combo ele também fica mais caro e acompanha batata média e bebida.

//ACOMPANHAMENTOS:
//1. Cocaglue
//2. Batata Pequena
//3. Batata Média

//Todo lanche deriva da classe lanche e pode ser que os clientes queiram alterar o lanche na sua construção. Todo combo é um conjunto de lanche + atributos, tentem passar issoem um js object. 

class lanche {
    constructor(Nome, Lanche, Batata_pequena, Batata_média, Fruta, Cocaglue) {
    this.McLanche_Alegre = McLanche_Alegre;
    this.Big_Lanche = Big_Lanche;
    this.McHen = McHen;
    this.Batata_média = Batata_média;
    this.Batata_pequena = Batata_pequena;

    this.McLanche_Alegre = {
        nome: "McLanche Alegre",
        lanche:"1",
        Batata_pequena:"1",
        Batata_média:"0",
        Fruta:"1",
        Cocaglue:"0"
    }

    this.Big_Lanche = {
        nome: "Big Lanche",
        lanche:"2",
        Batata_pequena:"0",
        Batata_média:"1",
        Fruta:"0",
        Cocaglue:"1"
    }
        
    this.McHen = {
        nome: "McHen",
        lanche:"1",
        Batata_pequena:"0",
        Batata_média:"1",
        Fruta:"0",
        Cocaglue:"1"
    }

    this.Batata_média = {
        nome: "Batata Média",
        lanche:"0",
        Batata_pequena:"0",
        Batata_média:"1",
        Fruta:"0",
        Cocaglue:"0"
    }

    this.Batata_pequena = {
        nome: "Batata Pequena",
        lanche:"0",
        Batata_pequena:"1",
        Batata_média:"0",
        Fruta:"0",
        Cocaglue:"0"
    }

    this.Cocaglue = {
        nome: "Cocaglue",
        lanche:"0",
        Batata_pequena:"0",
        Batata_média:"0",
        Fruta:"0",
        Cocaglue:"1"
    }
}
}