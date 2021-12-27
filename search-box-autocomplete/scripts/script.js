const searchWrapper = document.querySelector('.search-input')
const inputBox = document.querySelector('#searcher')
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
    matchedSuggestions = matchedSuggestions.map(data => '<li>' + data + '</li>')
    console.log(matchedSuggestions)
  }
}

// https://www.youtube.com/watch?v=QxMBHi_ZiT8
