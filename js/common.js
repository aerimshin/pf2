$(function(){
    
            //header
            var scrollTop = $(window).scrollTop()
            $(window).scroll(function(){
                scrollTop = $(window).scrollTop()
                if(scrollTop>0){
                    $('#header').css('background-color','#fff').css('box-shadow','2px 2px 3px rgba(0,0,0,0.2)').find('.logo_w').css('display','none').parent().find('.gnb>ul>li>a').css('color','#222')
                    $('.logo_c').css('display','block')
                    $('.lang>li.select>a').css('color','#222').css('border-bottom','1px solid #222')
                    $('.menu_btn').find('span').css('background-color','#222')
                }else{
                    $('#header').css('background','none').css('box-shadow','none').find('.logo_w').css('display','block').parent().find('.gnb>ul>li>a').css('color','#fff')
                    $('.logo_c').css('display','none')
                    $('.lang>li.select>a').css('color','#fff').css('border-bottom','1px solid #fff')
                    $('.menu_btn').find('span').css('background-color','#fff')
                }
                
            })
            $('#header').on({
                mouseenter:function(){$('#header').css('background-color','#fff').find('.logo_w').css('display','none').parent().find('.gnb>ul>li>a').css('color','#222')
                    $('.logo_c').css('display','block') ,$('.lang>li.select>a').css('color','#222').css('border-bottom','1px solid #222'),$('.menu_btn').find('span').css('background-color','#222')},
                mouseleave:function(){$('#header').css('background','none').find('.logo_w').css('display','block').parent().find('.gnb>ul>li>a').css('color','#222')
                    $('.logo_c').css('display','none') ,$('.lang>li.select>a').css('color','#fff').css('border-bottom','1px solid #fff'),$('.menu_btn').find('span').css('background-color','#fff')},
                focusin:function(){$('.gnb_wrap').stop().slideDown(300)},
                focusout:function(){$('.gnb_wrap').stop().slideUp(300)},
            })
            $('.gnb').on({
                mouseenter:function(){$('#header').css('background-color','#fff').find('.logo_w').css('display','none').parent().find('.gnb>ul>li>a').css('color','#222')
                    $('.logo_c').css('display','block')},
                mouseleave:function(){$('#header').css('background','none').find('.logo_w').css('display','block').parent().find('.gnb>ul>li>a').css('color','#fff')
                    $('.logo_c').css('display','none')},
                focusin:function(){$('.gnb_wrap').stop().slideDown(300)},
                focusout:function(){$('.gnb_wrap').stop().slideUp(300)},
            })

            //menutoggle
            var gnbNum = 0
            $('.menu_btn').click(function(){
                gnbNum ++
                if(gnbNum%2==1){
                    $(this).addClass('menu_btn_active')
                    $('.mob_gnb').animate({left:0},300)
                }else{
                    $(this).removeClass('menu_btn_active')
                    $('.mob_gnb').animate({left:'-100%'},300)
                    $('.gnb_box').css('display','none')
                }
            })



            //nav
            $('.gnb').on({
                mouseenter:function(){$('.gnb_wrap').stop().slideDown(300)},
                mouseleave:function(){$('.gnb_wrap').stop().slideUp(300)},
                focusin:function(){$('.gnb_wrap').stop().slideDown(300)},
                focusout:function(){$('.gnb_wrap').stop().slideUp(300)},
            })
            
            $('.gnb_wrap').mouseenter(function(){
                $(this).stop().fadeIn(300)
            })
            $('.gnb_wrap').mouseleave(function(){
                $(this).stop().fadeOut(300)
            })
            
            //lang
            $('.lang>li').click(function(){
                $(this).addClass('select').siblings().removeClass('select')
            })
            
            
            

            //mob_gnb sub_menu
            //gnb submenu
            $('.gnb>li').mouseenter(function(){
                $(this).find('.sub_menu').stop().slideDown(500)
            })
            $('.gnb>li').mouseleave(function(){
                $(this).find('.sub_menu').stop().slideUp(500)
            })
            $('.gnb>li').focusin(function(){
                $(this).find('.sub_menu').stop().slideDown(500)
            })
            $('.gnb>li').focusout(function(){
                $(this).find('.sub_menu').stop().slideUp(500)
            })
            
            //foooter familysite
            $('.f_nav>li').eq(5).mouseenter(function(){
                $('.squre').css('display','block')
                $('.family_menu').css('display','block')
                $(this).find(':after').css('content','url(../img/family_min.png)')
            })
            $('.f_nav>li').eq(5).mouseleave(function(){
                $('.squre').css('display','none')
                $('.family_menu').css('display','none')
            })

        })

        