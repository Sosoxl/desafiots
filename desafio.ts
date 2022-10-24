//fetch
class Informacao{

    nome : string;
    data: Date;
    descricao: string;
    status: boolean; 
    id:number;

    constructor(_nome:string,  _descricao:string, _data:Date, _status:boolean, _id:number){
         this.nome= _nome
         this.data = _data
         this.descricao=_descricao
         this.status= _status
         this.id = _id

    }
} 
 
let guardarinformacao: Array<Informacao> = []

fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes',{
    method: 'GET',
    headers: {'Content-Type' : "aplication/json"}
})

.then(response => response.json())
.then(api => {
    for (let index = 0; index < api.length; index++){
        let informacao: Informacao = new Informacao (api[index].nome, api[index].descricao, api[index].data, api[index].id, api[index].status)
        guardarinformacao.push(informacao)
    }
    console.log(guardarinformacao);    
    Lista()
})

let data : any = document

//listar
let div= document.querySelector(".lista_pacote")!;
const Lista = () => {
    div.innerHTML = "";
    for (let index = 0; index < guardarinformacao.length; index++)
     {
        div.innerHTML += `<div class="pacoteX>${guardarinformacao[index].nome}
         <h3 class="NomePacote ">PacoteX</h3>
         <br>
         ${guardarinformacao[index].descricao}<p class="texto">This is a wider card with supporting text below as a natural 
         lead-in to additional content.
         This content
         is a little bit longer.</p>
         <br>
         <p class="DataViagem">Data da viagem:${guardarinformacao[index].data}</p>
         <br>
         <div class="botao1">
             <button disabled class="Editar(${guardarinformacao[index].nome}", "${guardarinformacao[index].data}", "${guardarinformacao[index].descricao}", "${guardarinformacao[index].id}", "${guardarinformacao[index].status}>Editar</button>
             <button type="reset" class="Limpar" onclick ="excluir(${index})">Excluir</button>
         </div>`
    }
}

//cadastrar
let data_ = document.querySelector(".inputdata") as HTMLInputElement;
let pacote_ = document.querySelector(".NomePacote") as HTMLInputElement;
let descricao_ = document.querySelector(".descricao") as HTMLInputElement;
let button_ = document.querySelector(".botao")!


const Cadastrar = () => {

    let data: Date = new Date (data_.value);
    let pacote: string = pacote_.value;
    let descricao: string = descricao_.value;

    let cadastro: Informacao = new Informacao(pacote, descricao, data, false, guardarinformacao.length+1)

    guardarinformacao.push(cadastro)
    Lista()
}