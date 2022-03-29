const sidebarList = document.querySelector('.sidebar ul')
const menuButton = document.querySelector('.menu-btn')

menuButton.addEventListener('click', showHideSidebar)

function showHideSidebar() {
  menuButton.classList.toggle('clicked')
  const sidebar = document.querySelector('nav.sidebar')
  sidebar.classList.toggle('show')
}

sidebarList.addEventListener('click', toggleLinkActive)

function toggleLinkActive(event) {
  let clickedElement = event.target

  const elementTag = clickedElement['tagName']
  if (!(elementTag === 'A' || elementTag === 'I')) return

  if (elementTag === 'I') clickedElement = clickedElement.parentNode

  if (clickedElement['tagName'] !== 'A') return

  const lastLinkActive = sidebarList.querySelector('a.active')
  if (lastLinkActive) lastLinkActive.classList.remove('active')

  const isTreeList = clickedElement.querySelector('i.caret')
  if (!isTreeList) clickedElement.classList.add('active')
  else showTreeView(clickedElement)
}

function showTreeView(element) {
  const listItem = element.parentNode

  const caretIcon = element.querySelector('i.caret')
  const treeView = listItem.querySelector('ul.treeview')
  if (!caretIcon || !treeView) return

  treeView.classList.toggle('show')
  caretIcon.classList.toggle('fa-caret-down')
  caretIcon.classList.toggle('fa-caret-up')
}
