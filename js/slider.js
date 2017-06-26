function initSlider(sliderElements){
  const { slideFigure, leftButton, rightButton, dashContainer } = sliderElements
  let = firstSlide = document.getElementById('item-0'),
        centerSlide = document.getElementById('item-1'),
        lastSlide = document.getElementById('item-2'),
        firstDash = document.getElementById('dash-0'),
        secondDash = document.getElementById('dash-1'),
        thirdDash = document.getElementById('dash-2'),
        currentPos = 0

  ;(function(){
    updateButtons()
    updateDash()
    updateOuterItem()
  })()

  leftButton.addEventListener('click', () => {
    if(currentPos < 45){
      slideLeft()
    }
  })

  rightButton.addEventListener('click', () => {
    if(currentPos > -45){
      slideRight()
    }
  })

  firstDash.addEventListener('click', () => {
    updateOuterDash(-45, 45, thirdDash)
  })

  secondDash.addEventListener('click', () => {
    currentPos = 0
    slideFigure.style.transform = 'translateX('+currentPos.toString()+'%)'
    updateButtons()
    updateDash()
    updateOuterItem()
  })

  thirdDash.addEventListener('click', () => {
    updateOuterDash(45, -45, firstDash)
  })

  function slideLeft(){
    currentPos += 45
    updateButtons()
    updateDash()
    updateOuterItem()
    slideFigure.style.transform = 'translateX('+currentPos.toString()+'%)'
  }

  function slideRight(){
    currentPos -= 45
    updateButtons()
    updateDash()
    updateOuterItem()
    slideFigure.style.transform = 'translateX('+currentPos.toString()+'%)'
  }

  function updateButtons(){
    if(currentPos === 45){
      leftButton.style.opacity = '0'
      rightButton.style.opacity = '1'
    }
    if(currentPos === 0){
      leftButton.style.opacity = '1'
      rightButton.style.opacity = '1'
    }
    if(currentPos === -45){
      leftButton.style.opacity = '1'
      rightButton.style.opacity = '0'
    }
  }

  function updateDash(){
    if(currentPos === 45){
      firstDash.classList.add('active')
      secondDash.classList.remove('active')
      thirdDash.classList.remove('active')
    }
    if(currentPos === 0){
      firstDash.classList.remove('active')
      secondDash.classList.add('active')
      thirdDash.classList.remove('active')
    }
    if(currentPos === -45){
      firstDash.classList.remove('active')
      secondDash.classList.remove('active')
      thirdDash.classList.add('active')
    }
  }

  function updateOuterItem(){
    if(currentPos === 45){
      firstSlide.className = ''
      centerSlide.className = 'outer-item'
      lastSlide.className = 'outer-item'
    }
    if(currentPos === 0){
      firstSlide.className = 'outer-item'
      centerSlide.className = ''
      lastSlide.className = 'outer-item'
    }
    if(currentPos === -45){
      firstSlide.className = 'outer-item'
      centerSlide.className = 'outer-item'
      lastSlide.className = ''
    }
  }

  function updateOuterDash(pos, newPos, dash){
    if(currentPos === pos){
      dash.classList.remove('active')
      secondDash.classList.add('active')
      firstSlide.className = 'outer-item'
      centerSlide.className = ''
      lastSlide.className = 'outer-item'
      currentPos = newPos
      slideFigure.style.transform = 'translateX('+currentPos.toString()+'%)'
      setTimeout(() => {
        updateButtons()
        updateDash()
        updateOuterItem()
      }, 300)
    } else {
      currentPos = newPos
      slideFigure.style.transform = 'translateX('+currentPos.toString()+'%)'
      updateButtons()
      updateDash()
      updateOuterItem()
    }
  }
}
