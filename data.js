let galleryArr = [],
    imgArr = []

let searchURL = 'https://api.flickr.com/services/rest/'+
                '?method=flickr.photos.search&format=json&nojsoncallback=?'+
                '&sort=interestingness-desc&per_page=30'+
                '&api_key=4ca5d32fc4f8ce65c4b6e3fd1089c50c&tags='

function fetchData(tag){
  if(tag){
    let tagURL = searchURL + tag.replace(/\ /g, '+'),
        imgObj = {}

    console.log(tagURL)
    return fetch(tagURL)
    .then(res => res.json())
    .then(data => createImgArr(data))
    .then(imagesArray => createImageElement(imagesArray))
  }
}

function createImgArr(data){
  imgArr = data.photos.photo.map((photo) => {
    imgObj = {
      id:     photo.id,
      title:  photo.title,
      square:  'https://farm'+photo.farm+
              '.staticflickr.com/'+photo.server+
              '/'+photo.id+'_'+photo.secret+'_q.jpg',
      small:  'https://farm'+photo.farm+
              '.staticflickr.com/'+photo.server+
              '/'+photo.id+'_'+photo.secret+'_m.jpg',
      medium: 'https://farm'+photo.farm+
              '.staticflickr.com/'+photo.server+
              '/'+photo.id+'_'+photo.secret+'_z.jpg',
      large:  'https://farm'+photo.farm+
              '.staticflickr.com/'+photo.server+
              '/'+photo.id+'_'+photo.secret+'_b.jpg'
    }
    return imgObj
  })
  return imgArr
}
