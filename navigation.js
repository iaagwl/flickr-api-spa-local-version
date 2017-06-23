const API_KEY = '4ca5d32fc4f8ce65c4b6e3fd1089c50c'

function galleryNav(){
  //gallery()
  let galleryElement = createImgElements(galleryArr)
  gallery(galleryElement)
}

function popularNav(){
  const popularURL =  'https://api.flickr.com/services/rest/'+
                      '?method=flickr.interestingness.getList'+
                      '&per_page=30&format=json&nojsoncallback=1'+
                      '&api_key='+API_KEY

  fetchData(popularURL)
  .then(data => createImgArr(data))
  .then(imagesArray => createImgElements(imagesArray))
  .then(DOMContent => popular(DOMContent))
  .catch(err => console.log(err) /* Handle error */)
}

function recentNav(){
  const recentURL = 'https://api.flickr.com/services/rest/'+
                    '?method=flickr.photos.getRecent&per_page=30'+
                    '&format=json&nojsoncallback=1'+
                    '&api_key='+API_KEY

  fetchData(recentURL)
  .then(data => createImgArr(data))
  .then(imagesArray => createImgElements(imagesArray))
  .then(DOMContent => recent(DOMContent))
  .catch(err => console.log(err) /* Handle error */)
}

function searchNav(input){
  let searchURL = 'https://api.flickr.com/services/rest/'+
                  '?method=flickr.photos.search&format=json&nojsoncallback=1'+
                  '&sort=interestingness-desc&per_page=30'+
                  '&api_key='+API_KEY+'&tags='

  searchURL += input.replace(/\ /g, '+')
  fetchData(searchURL)
  .then(data => createImgArr(data))
  .then(imagesArray => createImgElements(imagesArray))
  .then(DOMContent => searchResult(DOMContent))
  .catch(err => console.log(err) /* Handle error */)
}
