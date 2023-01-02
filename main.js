const button = document.querySelector('#button')
const input = document.querySelector('input')
const maskOptions = {
  mask: '(00) 00000-0000'
}

button.addEventListener('click', function (e) {
  e.preventDefault();


  let errorText = document.querySelector('#error');
  let input = document.querySelector('input')
  input.style.border = 'none'

  if (input.value == '') {
    errorText.innerHTML = 'Type a phone number!';
    input.style.border = '2px solid #ed5463'

    return
  } else {
    errorText.innerHTML = '';
  }
  const cellphoneNumber = input.value
  const formattedCellphoneNumber = cellphoneNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')
  const url = `https://api.whatsapp.com/send?phone=55${formattedCellphoneNumber}`
  window.open(url, '_blank').focus()
})

function configureMaskInput() {
  IMask(input, maskOptions)
}

configureMaskInput()