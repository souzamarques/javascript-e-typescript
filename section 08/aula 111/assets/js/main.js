 const request = obj => {
     const xhr = new XMLHttpRequest()
     xhr.open(obj.method, obj.url, true)
     xhr.send()

     xhr.addEventListener("load", () => {
         if((xhr.status >= 200) && (xhr.status < 300)) {
             obj.sucess(xhr.responseText)
         } else {
             obj.error(xhr.responseText)
         }
     })
 }

document.addEventListener("click", e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === "a") {
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaPagina(el) {
    const href = el.getAttribute("href")

    request({
        method: "GET",
        url: href,
        sucess(response) {
            carregaResultado(response)
        },
        error(errorText) {
            console.log(errorText)
        }
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = response
}
