let target = document.querySelector('.background-container')

window.addEventListener('scroll', function(e) {
    
    // console.log(target.style);


    // var scrolled = window.pageYOffset;
    // var rate = scrolled * 0.5;
    // console.log(scrolled)

    // target.style.transform = `translate3d(0px, ${rate}px, 0px)`;

    // target.style.background = `pink`;

})

visualViewport.addEventListener('resize', function(e){
    console.log('resizing!')
    
    let windowWidth = window.innerWidth

    console.log(windowWidth)
    // if (windowWidth > target.getElementsByClassName.width 
    console.log(target.offsetWidth)
})