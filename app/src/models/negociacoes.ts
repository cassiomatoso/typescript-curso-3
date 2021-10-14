import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    
    //private negociacoes: Array<Negociacao> - é a mesma coisa 
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
   
    //lista somente para leitura
    //lista(): ReadonlyArray<Negociacao> - é a mesma coisa
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

}
