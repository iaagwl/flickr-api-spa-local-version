function render(name) {
  const contentDiv = document.getElementById("content")
  contentDiv.innerHTML = ''
  contentDiv.appendChild(name)
}

// Handle browser history
let historyRoutes = [],
    contentIdCounter = 1

function addToHistory(DOMContent){
  contentIdCounter++
  historyState = {content_id: contentIdCounter, content: DOMContent}
  historyRoutes.push(historyState)
  return historyState.content_id
}

function getFromHistory(content_id){
  route = historyRoutes.filter(item =>{
    return item.content_id === content_id
  })
  return route[0]
}

window.onpopstate = function (event) {
  let content = ''
  if(event.state) {
    content = getFromHistory(event.state.content_id)
  }
  if(content.content){
    render(content.content)
  }
}

// Set initial routes
;(function(){
  if(location.pathname === '/'){
    home()
  }
  if(location.pathname === '/search'){
    home()
  }
  if(location.pathname === '/gallery'){
    gallery()
  }
  if(location.pathname === '/popular'){
    popularNav()
  }
  if(location.pathname === '/recent'){
    recentNav()
  }
})()


// Routes
function home() {
  let homeContent = document.createElement('h1')
  homeContent.textContent = 'Home-content'

  content_id = addToHistory(homeContent)
  history.pushState({
    content_id: content_id,
    content: 'Home-content'
  }, null, "/")
  render(homeContent)
}

function gallery(content) {
  content_id = addToHistory(content)

  history.pushState({
    content_id: content_id,
    content: 'Gallery-content'
  }, null, "/gallery")

  render(content)
}

function recent(content) {
  content_id = addToHistory(content)

  history.pushState({
    content_id: content_id,
    content: 'Popular-content'
  }, null, "/recent")

  render(content)
}

function popular(content) {
  content_id = addToHistory(content)

  history.pushState({
    content_id: content_id,
    content: 'Popular-content'
  }, null, "/popular")

  render(content)
}

function searchResult(content) {
  content_id = addToHistory(content)

  history.pushState({
    content_id: content_id,
    content: 'Search Content'
  }, null, "/search")

  render(content)
}
