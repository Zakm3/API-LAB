// const { default: axios } = require("axios")

let resButton = document.querySelector('button')

function clickButton(){
    console.log('clicked button')
    axios.get("https://swapi.dev/api/planets/2/").then(res => {
        for(let i=0; i< res.data.residents.length; i++){
            axios.get(res.data.residents[i]).then(res=>{
                const h2 = document.createElement('h2')
                h2.textContent = res.data.name
                document.body.appendChild(h2)
            })
        }
    })
}
resButton.addEventListener('click', clickButton)