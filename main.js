


document.querySelectorAll('.spoiler .title').forEach(item => {
  item.addEventListener('click', event => {

    const spoiler = event.target.closest('.spoiler')
        
    spoiler.classList.toggle('active')

    if(spoiler.classList.contains('active')){

      const content = spoiler.querySelector('.content-wrapper')

      content.style.maxHeight = `${content.scrollHeight}px` 
    }else{
      const content = spoiler.querySelector('.content-wrapper')

      content.style.maxHeight = `0px` 
    }

  })
})

window.addEventListener('resize', () => {
  document.querySelectorAll('.spoiler .content-wrapper').forEach(item => {

    if (parseInt(item.style.maxHeight) < item.scrollHeight) {

      item.style.maxHeight = `${item.scrollHeight}px`
    }

  })
})

