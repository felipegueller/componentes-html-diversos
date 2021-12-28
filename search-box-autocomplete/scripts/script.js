const searchWrapper = document.querySelector('.search-input')
const inputBox = document.querySelector('input#searcher')
const suggestionBox = document.querySelector('.autocom-box')

inputBox.onkeyup = event => {
  let userData = event.target.value
  let matchedSuggestions = []
  if (userData) {
    // filtering the suggestions that matches with start position of user input
    matchedSuggestions = suggestions.filter(data => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
    })

    // transforming to li tag
    matchedSuggestions = matchedSuggestions.map(data => {
      return '<li>' + data + '</li>'
    })

    showSuggestions(matchedSuggestions)
    searchWrapper.classList.add('active')

    const allListItem = Array.from(document.querySelectorAll('.autocom-box li'))
    allListItem.forEach(item => {
      item.onclick = () => selectedListItem(item)
    })
  } else {
    searchWrapper.classList.remove('active')
  }
}

function selectedListItem(item) {
  // passing the content of the selected item to inputField
  inputBox.value = item.textContent
  searchWrapper.classList.remove('active')
}

function showSuggestions(suggestions) {
  let suggestionsList, userValue

  if (suggestions.length <= 0) {
    userValue = inputBox.value
    suggestionsList = '<li>' + userValue + '</li>'
  } else {
    suggestionsList = suggestions.join('')
  }
  suggestionBox.innerHTML = suggestionsList
}
