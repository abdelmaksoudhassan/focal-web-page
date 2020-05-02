$('document').ready(()=>{
    'use strict'
    
    $('.toggle').click(()=>{
        $('.ver-list').slideToggle()
    })
    $(window).scroll(()=>{

        if($(this).scrollTop() >= 700)
            {
                $('.slide_btn').fadeIn();
            }
        else
            {  
                $('.slide_btn').fadeOut();
            }
        $(".slide_btn").click(function()
        {
            document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
        });


        var m = $('.flex-row').offset().top
        var s = window.scrollY
        if(s >= m){
            $('.back').css({backgroundColor:'#0392cf',transition:'all 0.3s linear'})
            $('.logo').css({color:'white',transition:'all 0.3s linear'})
            $('.logo span').css({color:'#0392cf',backgroundColor:'white',transition:'all 0.3s linear'})
            $('.nav-list li a').css({color:'white',transition:'all 0.3s linear'})

        }else{
            $('.back').css({backgroundColor:'white',transition:'all 0.3s linear'})
            $('.logo').css({color:'#0392cf',transition:'all 0.3s linear'})
            $('.logo span').css({color:'white',backgroundColor:'#0392cf',transition:'all 0.3s linear'})
            $('.nav-list li a').css({color:'#0392cf',transition:'all 0.3s linear'})
        }
    })
})