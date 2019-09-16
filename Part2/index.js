console.log('turds')
let idInput = document.getElementById('idInput')
let colorInput = document.getElementById('colorInput')


console.log(idInput);
console.log(colorInput);

const setCard = () => {
    const card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = colorInput.value
    idInput.value = ''
    colorInput.value = ''
}