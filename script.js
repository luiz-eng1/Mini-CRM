let leads = [
    {
        id: 1,
        nome: "João Silva",
        origem: "Instagram",
        email: "joao@email.com",
        telefone: "1199999999", 
        data: "02/02/2026",
        status: "oportunidade"

    }
]

const fluxoStatus = [
    "oportunidade", 
    "contato_realizado", 
    "proposta_enviada",
    "negocio_fechado",
    "negocio_perdido"
]



const listaCards = document.querySelector(".listaCards");
console.log(listaCards);






let proximoId = 1
function adicionarLead(){
    
    const NovoLead = {
        id: proximoId,
        nome: "Manual",
        email: "email@exemplo.com",
        telefone: "00000-0000",
        data: new Date().toLocaleDateString(),  /*Cria um objeto de data com o momento atual. */
        status: "Oportunidade"
    }
    proximoId++


    leads.push(NovoLead)
    renderizarLeads();
}


function excluirLead(id){
        
    leads = leads.filter(lead => lead.id !== id)
    /* leads = array de objetos
        o que o FILTER faz? = percorre o array
        lead = um elemento do array por vez
        lead.id !== id      isso significa "esse lead não tem o id que quero excluir? se for true → ele fica
                                                                                    se for false → ele sai "
    */
            
    renderizarLeads();
}

function avancarStatus(id){
    const lead = leads.find(e => e.id === id) /* para achar um id especifico no array, usamos FIND */

    const indiceAtual = fluxoStatus.indexOf(lead.status) /* descobrir em que posição do array está o status atual do lead - para isso usamos INDEXOF */

    if(indiceAtual === -1 || indiceAtual === fluxoStatus.length - 1 ){ /* se o indice for o ultimo (ultimo status) não avança */
        return
    }

    lead.status = fluxoStatus[indiceAtual + 1] /* atualizar o lead ( o lead foi atualizado no array original) */

    renderizarLeads();
}






function renderizarLeads(){
    listaCards.innerHTML = "" /*limpar a div dos cards*/


    leads.forEach(lead => {


    const cardArticle = document.createElement("article")
    cardArticle.classList.add("card")

    /* HEADER */
    const divHeader = document.createElement("div")
    divHeader.classList.add("card-header")

    const spanNome = document.createElement("span")
    spanNome.classList.add("nomeLead")
    spanNome.innerText = lead.nome;

    const spanStatus = document.createElement("span")
    spanStatus.classList.add("statusLead")
    spanStatus.innerText = lead.status




    /* Body */
    const divBody = document.createElement("div")
    divBody.classList.add("cardBody")

    const spanOrigem = document.createElement("span")
    spanOrigem.classList.add("origemCard")
    spanOrigem.innerText = lead.origem

    const spanEmail = document.createElement("span")
    spanEmail.classList.add("emailCard")
    spanEmail.innerText = lead.email

    const spanTelefone = document.createElement("span")
    spanTelefone.classList.add("telefoneCard")
    spanTelefone.innerText = lead.telefone

    const spanData = document.createElement("span")
    spanData.classList.add("dataCard")
    spanData.innerText = lead.data


    /* Acões do Card */
    const divCardAcoes = document.createElement("div")
    divCardAcoes.classList.add("cardAcoes")

    const btnApagar = document.createElement("button")
    btnApagar.innerText = "🗑️";
    btnApagar.classList.add("btn-apagar")


    btnApagar.addEventListener("click", function () { /* EVENTO PARA O BOTÃO DE EXCLUIR */
    excluirLead(lead.id)
})
    





    const btnEditar = document.createElement("button")
    btnEditar.innerText = "🖊";
    btnEditar.classList.add("btn-editar")

    const btnAvancar = document.createElement("button")
    btnAvancar.innerText = "Avançar Status"
    btnAvancar.classList.add("btn-avancar")
    btnAvancar.addEventListener("click", function (){ /*EVENTO DE CLICK PARA O BOTÃO AVANÇAR STATUS */
        {
        avancarStatus(lead.id)
    }
    })




        /* MONTAGEM */
        cardArticle.appendChild(divHeader)
        cardArticle.appendChild(divBody)
        cardArticle.appendChild(divCardAcoes)


        divHeader.appendChild(spanNome)
        divHeader.appendChild(spanStatus)


        divBody.appendChild(spanOrigem)
        divBody.appendChild(spanEmail)
        divBody.appendChild(spanTelefone)
        divBody.appendChild(spanData)
        

        divCardAcoes.appendChild(btnApagar)
        divCardAcoes.appendChild(btnEditar)
        divCardAcoes.appendChild(btnAvancar)

        listaCards.appendChild(cardArticle)
    })
  

}


renderizarLeads();