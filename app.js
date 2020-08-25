count = 1;

function renderImage(){
    let element = document.getElementById('pokemon')
    element.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg"/>`
}

let minusElement = document.getElementById('prev')
minusElement.onclick = function(){
    if (count > 1){
        count = count - 1;
        renderImage()
    }
}

let plusElement = document.getElementById('next')
plusElement.onclick = function(){
    if (count < 650){
        count = count + 1;
        renderImage()
    }
}

renderImage();