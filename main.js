// Set initial routes
;(function(){
  if(location.pathname === '/'){
    home()
  }
  if(location.pathname === '/gallery'){
    gallery()
  }
  if(location.pathname === '/search'){
    home()
  }
})()

// Routes
function home() {
  history.pushState({
    content_id: 1,
    content: 'Home-content'
  }, null, "/")
  console.log(history)
  render(history.state.content)
}

function gallery() {
  history.pushState({
    content_id: 2,
    content: 'Gallery-content'
  }, null, "/gallery")

  render(history.state.content)
}

function searchResult() {
  history.pushState({
    content_id: 3,
    content: 'Search-content'
  }, null, "/search")

  render(history.state.content)
}

function render(name) {
  document.getElementById("content").innerHTML = name
}

// Handle browser history
window.onpopstate = function (event) {
  console.log('onpopstate event', event)
  let content = ''
  if(event.state) {
    console.log(event.state.content)
    content = event.state.content
  }
  console.log(content)

  render(content)
}
