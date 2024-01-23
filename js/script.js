
$(function(){
// navbar sticky-menu area
  $ (window).on ('scroll', function () {
    let sticky = $ ( this ).scrollTop ()
    if ( sticky > 100 ) {
      $ ('#navbar').addClass ('sticky-menu')
    }

    else {
      $ ('#navbar').removeClass ('sticky-menu')
    }
  })
// ========VenoBox Js Area ============
    new VenoBox({
        selector: '.my-video-links',
    });

// ========counterUp Js Area ============
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });

    
// Back-to-top clients speeks area
      
    $ ('#back_to_top_btn').on ('click', function () {
        $ ('html,body').animate ({scrollTop:0},1000)
    })

    $ (window).on ('scroll',function (){
    let backToTop = $ (this).scrollTop ()
    if ( backToTop > 600 ) {
    $ ('#back_to_top_btn').fadeIn (600)
    }
    else {
    $ ('#back_to_top_btn').fadeOut (600)
    }
    })

})