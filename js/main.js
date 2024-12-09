
        $(function(){
            //page scroll
            $(window).on('load',function(){
            $(this).impulse();
            })
            
            
            //mob_banner text
            var mTop = $('#m_banner').offset().top
            $(window).resize(function(){
                var mTop = $('#m_banner').offset().top
            })
            $(window).scroll(function(){
                winScroll = $(window).scrollTop()
                if(winScroll>mTop-100){
                    $('.m_text_box').find('h2').animate({top:0,opacity:1},500)
                    $('.m_text_box').find('p').delay(200).animate({top:0,opacity:1},500)

                }               
            })
            
            //auto banner
            
            //bannertop
            var banTop = $('#banner').offset().top
            $(window).resize(function(){
                banTop = $('#banner').offset().top
            })
            $(window).scroll(function(){
                winScroll = $(window).scrollTop()
                if(winScroll>banTop){
                    $('.sideNav>ul>li').eq(0).addClass('select').siblings().removeClass('select')
                } 
                             
            })

            //controls click banner
            var winWidth = $(window).width()
            var clickNum = 0
            var playNum = 0
            function slider(index){               
                $('.play>li').eq(index).stop(true).fadeIn(500).siblings().fadeOut(500)
                $('.controls>li').eq(index).addClass('select').siblings().removeClass('select')
            }
            //controls width,select,slider  ..click replay, s
            $('.controls>li').each(function(index){
                $(this).click(function(){
                    slider(index)
                    clickNum=index
                    $(this).each(function(index){
                        $(this).eq(index).addClass('select').find('.progress_inner').animate({width:'100%'},5000).siblings().removeClass('select').find('.progress_inner')
                    })
                })
            }) 
            
            //sidenav border 변경
            $('.sideNav>ul>li').click(function(){
                $(this).addClass('select').siblings().removeClass('select')
            })
        
            //brand        
                var brandTop = $('#brand').offset().top
                $(window).resize(function(){
                 brandTop = $('#brand').offset().top
                })
                $(window).scroll(function(){
                    winScroll = $(window).scrollTop()
                    if(winScroll>brandTop-400){
                        $('#brand').each(function(){
                            $(this).animate({top:0,opacity:1},500).delay(200).find('.line').css('height','100px')
                            
                        })
                        $('.sideNav>ul>li').eq(1).addClass('select').siblings().removeClass('select')
                    }
                                
                })

            //onair,issue
            var onTop = $('#onair').offset().top
            var issueTop = $('#issue').offset().top
            $(window).resize(function(){
                 onTop = $('#onair').offset().top
                 issueTop = $('#issue').offset().top
            })
            $(window).scroll(function(){
                winScroll = $(window).scrollTop()
                if(winScroll>onTop-400){
                    $('.sideNav>ul>li').eq(2).addClass('select').siblings().removeClass('select') 
                    
                }
                if(winScroll>issueTop-400){
                    $('.photo').animate({left:0,opacity:1},500)
                    $('.issue_bg').animate({right:0,opacity:1},500)
                    $('.sideNav>ul>li').eq(3).addClass('select').siblings().removeClass('select') 
                } 
                             
            })

            
            //news,lineup        
            var newsTop = $('#news').offset().top
            var lineTop = $('#lineUp').offset().top
            $(window).resize(function(){
                newsTop = $('#news').offset().top
                lineTop = $('#lineUp').offset().top
            })
            $(window).scroll(function(){
                winScroll = $(window).scrollTop()
                if(winScroll>newsTop-400){
                    $('#news>ul>li').each(function(index){
                        $(this).delay(index*200).animate({top:0,opacity:1},500)
                        $('.sideNav>ul>li').eq(4).addClass('select').siblings().removeClass('select')
                    })
                }
                if(winScroll>lineTop-400){
                    $('.sideNav>ul>li').eq(5).addClass('select').siblings().removeClass('select')
                }              
            })
            $('#news>ul>li').mouseenter(function(){
                $(this).addClass('select').siblings().removeClass('select')
            })


            //our works,contact
            function autoWorks(index){//works auto
                $('.drama>li:first').animate({marginLeft:'-238px'},300,function(){
                    $(this).appendTo('.drama').css('margin-left','0')
                })
            }
            auto = setInterval(autoWorks, 3000)
            
            var worksTop = $('#works').offset().top
            var conTop = $('#contact').offset().top
            $(window).resize(function(){
                 worksTop = $('#works').offset().top
                 conTop = $('#contact').offset().top
            })
            $(window).scroll(function(){
                winScroll = $(window).scrollTop()
                if(winScroll>worksTop-400){
                    $('.sideNav>ul>li').eq(6).addClass('select').siblings().removeClass('select')
                }
                if(winScroll>conTop-400){
                    $('.sideNav>ul>li').eq(7).addClass('select').siblings().removeClass('select') 
                } 
                             
            })


        })

// on air
 $(function(){
    var onairNum = 2
    function nextSlider(){               
        onairNum++
        if(onairNum>4){
            onairNum=0
        }
        $('.img_wrap>li:first').animate({marginLeft:'-425px'},500,function(){
            $(this).appendTo('.img_wrap').css('margin-left','30px')           
            $('.img_wrap>li').eq(2).addClass('select',300).siblings().removeClass('select',300)   
        })
        $('.text_wrap>li').eq(onairNum).fadeIn().siblings().fadeOut()
       
    }
    function prevSlider(){               
        onairNum--
        if(onairNum<0){
            onairNum=4
        }
        $('.img_wrap>li:last').prependTo('.img_wrap').css('margin-left','-425px').animate({marginLeft:30},500,function(){
            $('.img_wrap>li').eq(2).addClass('select',300).siblings().removeClass('select',300)
        })
        $('.text_wrap>li').eq(onairNum).fadeIn().siblings().fadeOut()
        
    }
   
   
    $('.next_btn').click(function(){   
        nextSlider()
    })

    $('.prev_btn').click(function(){        
        prevSlider()
    })
    
    

})