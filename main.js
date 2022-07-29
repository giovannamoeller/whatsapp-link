const button = document.querySelector('button')
const input = document.querySelector('input')
const maskOptions = {
    mask: '(00) 00000-0000'
}
let cellphoneNumber
let url

button.addEventListener('click', function () {
  cellphoneNumber = input.value
  url = `https://api.whatsapp.com/send?phone=55${cellphoneNumber}`
  window.open(url, '_blank').focus()
})

function configureMaskInput() {
  IMask(input, maskOptions)
}

configureMaskInput()