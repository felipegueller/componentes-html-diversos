const url = 'https://jsonplaceholder.typicode.com/users'
const tableContainer = document.querySelector('.table-container')
const tbody = document.querySelector('table[data-js="table"] tbody')

const getUsers = async () => {
  try {
    const response = await fetch(url)
    return response.json()
  } catch (error) {
    console.log(error)
  }
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
window.addEventListener('DOMContentLoaded', addDataOnTable)
