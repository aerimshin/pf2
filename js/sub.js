$(function(){


//about intro 
var winScroll = $(window).scrollTop()
var introTop = $('#intr').offset().top
$(window).resize(function(){
     introTop = $('#intr').offset().top
})
var businessTop = $('#business').offset().top
$(window).resize(function(){
     businessTop = $('#business').offset().top
})
$(window).scroll(function(){
    winScroll = $(window).scrollTop()
    if(winScroll>introTop-500){
        $('#intr').each(function(){
            $(this).animate({top:0,opacity:1},500)
        })
    }              
})
//about business
$(window).scroll(function(){
    winScroll = $(window).scrollTop()
    if(winScroll>businessTop-500){
        $('#business').each(function(){
            $(this).find('.busin_1 .text_box').animate({left:0,opacity:1},500)
            $(this).find('.busin_1 .img_box').animate({bottom:0,opacity:1},500)
        })
    }    
    if(winScroll>businessTop-400){
        $('#business').each(function(){
            $(this).find('.busin_2 .text_box').animate({right:0,opacity:1},500)
            $(this).find('.busin_2 .img_box').animate({bottom:0,opacity:1},500)
        })
    }          
})


})
