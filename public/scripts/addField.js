 // Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)
 

 //executar uma acao
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar.
    fields.forEach(function(field){
        // pegar o field do momento e limpa ele
        field.value = ""
    })

    // colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
     