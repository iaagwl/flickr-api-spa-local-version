let galleryArr = [],
    imgArr = []


function fetchData(tagURL){
  if(tagURL){
    return fetch(tagURL)
    .then(res => res.json())
  }
}

function createImgArr(data){
  imgArr = data.photos.photo.map((photo) => {
    imgObj = {
      addedToGallery: false,
      id:     photo.id,
      title:  photo.title,
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

function createImgElements(imagesArray){
  let wrapper = document.createElement('div')
  wrapper.id = 'search-wrapper'

  imagesArray.forEach((image) => {
    let imageContainer = document.createElement('div'),
        imageOverlay = document.createElement('div'),
        titleSpan = document.createElement('span'),
        galleryIcon = document.createElement('i')

    imageContainer.className = 'search-image'
    imageOverlay.className = 'image-overlay'
    titleSpan.textContent = image.title
    let img = new Image()
    img.src = image.medium
    galleryIcon.className = 'pe-7s-photo-gallery font-icon'

    // check if image is in the gallery
    galleryArr.forEach((item) => {
      if(item.id === image.id){
        image.addedToGallery = true
        galleryIcon.className = 'pe-7s-check font-icon success'
      }
    })

    galleryIcon.addEventListener('click', () => {
      if(!image.addedToGallery){
        image.addedToGallery = true
        galleryIcon.className = 'pe-7s-check font-icon success'
        galleryArr.push(image)
      }else{
        galleryArr = galleryArr.filter((item) => {
          return item.id != image.id
        })
        if(location.pathname === '/gallery'){
          galleryNav()
        }
        galleryIcon.className = 'pe-7s-photo-gallery font-icon'
        image.addedToGallery = false
      }
    })
    imageOverlay.appendChild(titleSpan)
    imageOverlay.appendChild(galleryIcon)
    imageContainer.appendChild(imageOverlay)
    imageContainer.appendChild(img)
    wrapper.appendChild(imageContainer)
  })

  return wrapper
}
