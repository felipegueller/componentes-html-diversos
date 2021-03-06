const mainSidebar = document.querySelector('.main-sidebar')
const sidebarList = document.querySelector('.sidebar-list')
const pushMenu = document.querySelector('.menu-push')

const isTreeListOpen = treeview => {
  const treelist = treeview.querySelector('ul.treelist.show')
  return treelist ? true : false
}

const toggleTreelist = listItem => {
  const treeList = listItem.querySelector('ul.treelist')
  const treeListsOpened = document.querySelectorAll('ul.treelist.show')

  if (treeListsOpened.length > 0)
    treeListsOpened.forEach(treelist => {
      if (treelist !== treeList) treelist.classList.remove('show')
    })

  treeList.classList.toggle('show')
}

const activeParentLink = treelistItem => {
  const treelist = treelistItem.parentNode
  const treview = treelist.parentNode
  const parentLink = treview.querySelector('a')
  parentLink.classList.add('active')
}

const toggleActiveLink = link => {
  // removing all links active
  const lastsLinkActive = Array.from(document.querySelectorAll('a.active'))
  if (lastsLinkActive.length > 0)
    lastsLinkActive.forEach(link => link.classList.remove('active'))

  const isTreeview = link.parentNode.classList.contains('treeview')
  if (isTreeview) toggleTreelist(link.parentNode)

  const isTreelistItem = link.parentNode.classList.contains('treelist-item')
  if (isTreelistItem) activeParentLink(link.parentNode)

  // closes the treelist when a simple link is clicked
  if (!(isTreelistItem || isTreeview)) {
    const hasTreelistsOpened = document.querySelectorAll('ul.treelist.show')
    if (hasTreelistsOpened.length > 0)
      hasTreelistsOpened.forEach(treelist => treelist.classList.remove('show'))
  }

  // It doesn't let putting active class in treelist link when it is closed
  if (isTreeview && !isTreeListOpen(link.parentNode)) return

  link.classList.add('active')
}

const whoClicked = event => {
  let element = event.target
  const elementTag = event.target.tagName.toLowerCase()

  if (!elementTag.match(/[ai]|span/)) return
  if (elementTag.match(/i|span/) && event.target.parentNode.tagName !== 'A')
    return

  if (elementTag.match(/i|span/)) element = element.parentNode
  if (element.tagName !== 'A') return

  toggleActiveLink(element)
}

const toggleShowSidebar = () => {
  pushMenu.classList.toggle('clicked')
  mainSidebar.classList.toggle('active')
}

pushMenu.addEventListener('click', toggleShowSidebar)
sidebarList.addEventListener('click', whoClicked)
