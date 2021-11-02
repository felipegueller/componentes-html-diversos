const form = document.querySelector('form')
const requiredFields = Array.from(document.querySelectorAll('[required]'))

form.onsubmit = (event) => {
  console.log('enviar formulário!')
  
  // Does not to send the form
  event.preventDefault()
}

requiredFields.forEach(field => {

  // oninvalid -> when the field is invalid
  field.oninvalid = event => {

    event.preventDefault() // eliminate the bubble card

    customValidation(event)
  } 
  field.onblur = event => customValidation(event)
})

const customValidation = event => {

  /* o target é o alvo, em outras palavras, quem disparou o evento, logo o input em questão. */
  const field = event.target // catch the current field
  const validation = validateField(field)
  
  validation()
}

const verifyErrors  = field => {
    let foundError = false


    // for in -> faz a interação em cima das propriedades de um objeto
    // for of -> faz a interação em cima de uma lista de objetos
    for (let errorProperty in field.validity) {
      
      if (field.validity[errorProperty] && !field.validity.valid) {
        foundError = errorProperty
      }
    }

    return foundError
}

const validateField = field => {

  // logic to verify if exists any error
  return () => {
    const error = verifyErrors(field)

    if (error) {
      const message = customMessage(field, error)
      field.style.borderColor = 'red'
      setCustomMessage(field, message)
    } else {
      field.style.borderColor = 'green'
      // without messagem to remove the active class of span.error 
      setCustomMessage(field) 
    }
  }
}

const setCustomMessage = (field, message) => {

  // parent node -> direciona a atenção do Js para o pai do elemento
  const spanError = field.parentNode.querySelector('span.error')

  if (message) {
    spanError.classList.add('active')
    spanError.innerText = message
  } else {
    spanError.classList.remove('active')
    spanError.innerText = ''
  }
}

const customMessage = (field, typeError) => {
  const messages = {
    text: {
      valueMissing: 'Por favor, preencha este campo!'
    },
    email: {
      valueMissing: 'E-mail é obrigatório!',
      typeMismatch: 'Por favor, preencha um e-mail válido!'
    },
    default: {
      // case field.type if does not exist
      defaultMessage: 'Este campo é obrigatório!'
    }
  }

  return field.type
    ? messages[field.type][typeError]
    : messages['default']['defaultMessage']
}