// table constants
const url = 'https://jsonplaceholder.typicode.com/users'
const tableContainer = document.querySelector('.table-container')
const tbody = document.querySelector('table[data-js="table"] tbody')

// suggestion autocomplete box constants
const inputSearch = document.querySelectorAll('input[data-js="input-search"]')
const suggestionsLists = document.querySelectorAll(
  'ul[data-js="suggestions-list"]'
)

const getUsers = async () => {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
}

const showSuggestions = (suggestions, input) => {
  if (suggestions.length <= 0) suggestions = `<li>${input.value}</li>`

  const inputWrapper = input.parentNode
  const suggestionsList = inputWrapper.querySelector('.suggestions-box ul')
  suggestionsList.innerHTML = suggestions
}

const findMatchedSuggestions = async event => {
  const input = event.target
  const parentInputWrapper = input.parentNode

  if (!input.value) {
    parentInputWrapper.classList.remove('active')
    return
  }

  let matchedSuggestions = []

  const userData = await getUsers()
  const apiData = userData.map(user => {
    const key = input.name
    return user[key]
  })

  matchedSuggestions = apiData.filter(suggestion => {
    return suggestion.toLowerCase().startsWith(input.value.toLowerCase())
  })

  matchedSuggestions = matchedSuggestions.reduce((acc, suggestion) => {
    return `${acc}<li>${suggestion}</li>`
  }, '')

  showSuggestions(matchedSuggestions, input)

  parentInputWrapper.classList.add('active')
}

const addDataOnTable = async () => {
  const usersData = await getUsers()

  const tableRows = usersData.reduce((acc, user) => {
    const {
      name,
      username,
      website,
      address: { city, zipcode: cep },
      email
    } = user

    return `${acc}<tr>
      <td>${name}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${city}</td>
      <td>${cep}</td>
      <td>${website}</td>
    </tr>`
  }, '')

  tbody.innerHTML += tableRows
}

const puttingSuggestionOnInput = event => {
  event.stopPropagation()

  const element = event.target
  const tagName = element.tagName

  if (tagName !== 'LI') return

  const inputWrapper = element.closest('.input-wrapper')
  const input = inputWrapper.querySelector('input')

  input.value = element.textContent
  inputWrapper.classList.remove('active')
}

suggestionsLists.forEach(suggestionList => {
  suggestionList.addEventListener('click', puttingSuggestionOnInput)
})

inputSearch.forEach(input => {
  input.addEventListener('input', findMatchedSuggestions)
})

window.addEventListener('DOMContentLoaded', addDataOnTable)

// Code to fix the table head
// const tableFixHead = event => {
//   const tableContainer = event.target,
//     scrollTop = tableContainer.scrollTop,
//     tableHeadCells = Array.from(
//       tableContainer.querySelectorAll('.table thead th')
//     )
//   tableHeadCells.forEach(th => {
//     console.log(th)
//     th.style.transform = `translateY(${scrollTop}px)`
//   })
// }

// tableContainer.addEventListener('scroll', tableFixHead)
