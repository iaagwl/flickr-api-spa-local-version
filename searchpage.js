function createImageElement(imagesArray){
  let DOMContent = imagesArray.map((image) => {
    return  ('<div class="search-image">'+
            '<div class="image-overlay"><span>'+image.title+
            '</span><i class="pe-7s-photo-gallery font-icon"></i></div>'+
            '<img src="'+image.medium+'"></div>')
  })
  .join('')

  DOMContent =  '<div id="search-wrapper">'+DOMContent+'</div>'

  return DOMContent
}
