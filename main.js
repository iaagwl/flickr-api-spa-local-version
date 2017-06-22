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
  if(location.pathname === '/newest'){
    newest()
  }
  if(location.pathname === '/popular'){
    popular()
  }
})()

// Routes
function home() {
  history.pushState({
    content_id: 1,
    content: 'Home-content'
  }, null, "/")
  render(history.state.content)
}

function gallery() {
  history.pushState({
    content_id: 2,
    content: 'Gallery-content'
  }, null, "/gallery")

  render(history.state.content)
}

function newest() {
  history.pushState({
    content_id: 3,
    content: 'Newest-content'
  }, null, "/newest")

  render(history.state.content)
}
function popular() {
  history.pushState({
    content_id: 4,
    content: 'Popular-content'
  }, null, "/popular")

  render(history.state.content)
}

function searchResult(content) {
  history.pushState({
    content_id: 5,
    content: content
  }, null, "/search")

  render(history.state.content)
}

function render(name) {
  document.getElementById("content").innerHTML = name
}

// Handle browser history
window.onpopstate = function (event) {
  let content = ''
  if(event.state) {
    content = event.state.content
  }
  render(content)
}
