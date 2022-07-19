class Forca {

  constructor(palavraSecreta){
    this.letrasChutadas = [];

    // 1 - Iniciar com 6 vidas
    this.vidas = 6;

    // 2 - Iniciar com o estado "aguardando chute"
    this.estado = "aguardando chute"
    this.palavraSecreta = palavraSecreta;    
    this.palavra = new Array(palavraSecreta.length+1).join("_").split("");


  }

  chutar(letra) {

    // 3- Ignorar entradas com mais de uma letra
    if(letra.length === 1){
      
      // 4 - Ignorar entradas repetidas
      if(!this.letrasChutadas.includes(letra)){

        // 5 - Toda chamada registra a letra
        this.letrasChutadas.push(letra);

        // 7 - Se chute presente na palavraSecreta, atualizar palavra
        if(this.palavraSecreta.includes(letra)){

          let indexes = []
          for(let i=0; i < this.palavraSecreta.length; i++){
            if (this.palavraSecreta[i] === letra){indexes.push(i)}
          }

          for(let i=0; i< indexes.length; i++){
            this.palavra[indexes[i]] = letra;
          }

          // 9 - Se vida >0 e acertou todas as letras, estado = "ganhou"
          if(this.palavra.join("") === this.palavraSecreta){
            this.estado = "ganhou"
          }

          
        // 6 - Se letra chutada não estiver contida na palavra, subtrai uma vida
        }else{
          this.vidas = this.vidas -1;

          // 8 - Caso a quantidade de vida chegue a zero, estado = "perdeu"
          if(this.vidas === 0){
            this.estado = "perdeu"
          }
        }
      }

    }
  }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
