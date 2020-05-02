$('document').ready(()=>{
    'use strict'
    $('.toggle').click(()=>{
        $('.ver-list').slideToggle()
    })
    $(window).scroll(()=>{
        var m = $('.flex-row').offset().top
        var s = window.scrollY
        if(s >= m){
            $('.back').css({backgroundColor:'#0392cf',transition:'all 0.3s linear'})
            $('.logo').css({color:'white',transition:'all 0.3s linear'})
            $('.logo span').css({color:'#0392cf',backgroundColor:'white',transition:'all 0.3s linear'})
            $('.nav-list li').css({color:'white',transition:'all 0.3s linear'})

        }else{
            $('.back').css({backgroundColor:'white',transition:'all 0.3s linear'})
            $('.logo').css({color:'#0392cf',transition:'all 0.3s linear'})
            $('.logo span').css({color:'white',backgroundColor:'#0392cf',transition:'all 0.3s linear'})
            $('.nav-list li').css({color:'#0392cf',transition:'all 0.3s linear'})
        }
    })
})