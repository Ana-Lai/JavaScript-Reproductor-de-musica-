const playCancion = document.getElementsByClassName("play")
const stopCancion = document.getElementsByClassName("stop")
const volumen = document.querySelector(".volumen")

let audio

for(elemento of playCancion){
    elemento.addEventListener("click", function(){
        let cancion = this.getAttibute("id")
        audio = new Audio("url de la cancion")
        audio.play()
    })
}

for(elemento of stopCancion){
    elemento.addEventListener("click", function(){
        audio.pause()
    })
}

volumen.addEventListener("click", function(){
    let vol = this.value
    audio.volumen = this.value
})