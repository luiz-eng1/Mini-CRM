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


const listaCards = document.querySelector(".listaCards");
console.log(listaCards);


function renderizarLeads(){
    const cardArticle = document.createElement("article")
    cardArticle.classList.add("ArticleDoCard")


    const divHeader = document.createElement("div")
    cardHeader.classList.add("card-header")

    const spanNome = document.createElement("span")
    spanNome.classList.add("nomeLead")

    const spanStatus = document.createElement("span")
    spanStatus.classList.add("statusLead")





    const divBody = document.createElement("div")
    divBody.classList.add("cardBody")

    const spanOrigem = document.createElement("span")
    spanOrigem.classList.add("origemCard")

    const spanEmail = document.createElement("span")
    spanEmail.classList.add("emailCard")

    const spanTelefone = document.createElement("span")
    spanTelefone.classList.add("telefoneCard")

    const spanData = document.createElement("span")
    spanData.classList.add("dataCard")



    const divCardAcoes = document.createElement("div")
    divCardAcoes.classList.add("cardAcoes")

    const btnApagar = document.createElement("button")
    btnApagar.innerText = "🗑️";
    btnApagar.classList.add("btn-apagar")

    const btnEditar = document.createElement("button")
    btnEditar.innerText = "🖊";
    btnEditar.classList.add("btn-editar")

    const btnAvancar = document.createElement("button")
    btnAvancar.classList.add("btn-avancar")

    

}