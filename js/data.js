let galleryArr = [],
    imgArr = [],
    featuredImages = ['https://farm5.staticflickr.com/4241/34416111044_d25e9ce35a_b.jpg',
    'https://farm5.staticflickr.com/4179/34793727785_37ffbc4572_b.jpg',
    'https://farm1.staticflickr.com/575/33484684686_5d30bcd2dc_b.jpg']

const API_KEY = '4ca5d32fc4f8ce65c4b6e3fd1089c50c'

function fetchData(tagURL){
  if(tagURL){
    return fetch(tagURL)
    .then(res => res.json())
  }
}
