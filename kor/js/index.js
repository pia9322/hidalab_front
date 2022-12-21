$(function () {
    // common_js_start
    console.log('common_js_start');
    $('select.nice').niceSelect();

    // jj_function
    headerFullslide()
    // jj_function

    // ======================================= AOS ======================================= 
    AOS.init({
        duration: 1000,
        startEvent: 'load',
        // disable: function () {
        //     return window.innerWidth <= 1420;
        // }
    });
    // ======================================= AOS ======================================= 


    // ======================================= CURSOR ======================================= 
    function cursorEvent(){
        gsap.set("#cursor_01", {xPercent: -50, yPercent: -50});
        const ball = document.querySelector("#cursor_01");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.35;

        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");
        const target = 'a[href], button, input, label, .header_ham, .swiper-button-prev, .swiper-button-next, .faq_q, .infobox_wheel > div';

        window.addEventListener("mousemove", e => {    
            mouse.x = e.x;
            mouse.y = e.y;  
        });

        $(target).hover(function(){
            ball.classList.add('active');
        },function(){
            ball.classList.remove('active');
        })

        gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
            
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });

        magneticBtn()
    }
    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }
    function magnetize(el, e) {
        var mX = e.pageX,
            mY = e.pageY;
        const item = $(el);

        const customDist = item.data('dist') * 20 || 120;
        const centerX = item.offset().left + (item.width() / 2);
        const centerY = item.offset().top + (item.height() / 2);

        var deltaX = Math.floor((centerX - mX)) * -0.45;
        var deltaY = Math.floor((centerY - mY)) * -0.45;

        var distance = calculateDistance(item, mX, mY);

        if (distance < customDist) {
            TweenMax.to(item, 0.5, {
                y: deltaY,
                x: deltaX,

            });
        } else {
            TweenMax.to(item, 0.6, {
                y: 0,
                x: 0,
            });

        }
    }
    function magneticBtn() {
        const mBtn = document.querySelectorAll('.ico.circle');
        mBtn.forEach(function (elem) {
            $(document).on('mousemove touch', function (e) {
                magnetize(elem, e);
            });
        })
    }
    // ======================================= CURSOR ======================================= 


    // ======================================= CountNumber ======================================= 
    function countNum() {
        gsap.registerPlugin(ScrollTrigger);
        var startCount = {
            var: 0
        };

        gsap.to(startCount, {
            var: 100,
            duration: 1.5,
            ease: "none",
            onUpdate: changeNumber01,
            scrollTrigger: {
                trigger: "#counting_01",
            },
        });
 
    }

    function changeNumber01() {
        counting_01.innerHTML = (startCount.var).toFixed();
    }
    // ======================================= CountNumber ======================================= 

    



    // ======================================= Swiper ======================================= 
    // main_visual
    const mainSwiper = new Swiper('.ms_01', {
        effect: "fade",
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 1,
        // autoplay: {
        //     delay: 4000,
        //     disableOnInteraction: false,
        // },
        lazy: {
            loadPrevNext: true
        },
        pagination: {
            el: '.ms_01 .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        touchMoveStopPropagation: true,
        // on: {
        //     init: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionStart: function () {
        //         $('.swiper-progress-bar').removeClass('animate');
        //         $('.swiper-progress-bar').removeClass('active');
        //         $('.swiper-progress-bar').eq(0).addClass('active');
        //     },
        //     slideChangeTransitionEnd: function () {
        //         $('.swiper-progress-bar').eq(0).addClass('animate');
        //     },
        // },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        // breakpoints: {
        //     1600: {
        //         slidesPerView: 3.5,
        //     },
        //     1420: {
        //         slidesPerView: 3,
        //         spaceBetween: 10,
        //     },
        //     1100: {
        //         slidesPerView: 2.5,
        //         spaceBetween: 10,
        //     },
        //     767: {
        //         slidesPerView: 1.5,
        //         spaceBetween: 0,
        //     },
        //     476: {
        //         slidesPerView: 1.25,
        //         spaceBetween: 0,
        //     },
      
        // },
    });
    
    const mainTopproduct = new Swiper('.ms_02 .top .swiper-container', {
        // effect: "slide",
        // freeMode: true,
        slidesPerView: "auto",
        // touchRatio: 0,
        spaceBetween: 40,
        // loop: true,
        breakpoints: {
            1470: {
                slidesPerView: 2.7,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
        },
    });

    const mainbottomproduct = new Swiper('.ms_02 .bottom .swiper-container', {
        // effect: "slide",
        // freeMode: true,
        slidesPerView: "auto",
        // touchRatio: 0,
        spaceBetween: 40,
        // loop: true,
        breakpoints: {
            1470: {
                slidesPerView: 2.7,
                spaceBetween: 10,
            },
            720: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
        },
    });
    
    const img_mainSlide = new Swiper('.img_main .swiper-container', {
        slidesPerView: "auto",
    });
    
    const img_subSlide = new Swiper('.img_sub .swiper-container', {
        slidesPerView: "auto",
    });

    // img_mainSlide.controller.control = img_subSlide;
    // img_subSlide.controller.control = img_mainSlide;



    // category_detail 
 
    // category_detail 
    const cateProductSmallSwiper = new Swiper('#category .thumb_small .swiper-container', {
        // effect: "slide",
        // freeMode: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        // touchRatio: 0,
        breakpoints: {
            767: {
                spaceBetween: 20,
            },
        },
    });

    
    const cateProductBigSwiper = new Swiper('#category .thumb_big.swiper-container', {
        effect: "fade",
        // freeMode: true,
        // touchRatio: 0,
        spaceBetween: 10,
        thumbs: {
          swiper: cateProductSmallSwiper,
        },
        navigation: {
            nextEl: ".swiper-navi-wrap .swiper-button-next",
            prevEl: ".swiper-navi-wrap .swiper-button-prev",
          },
    });

    // portfolio_detail 
    const portfolioProductSmallSwiper = new Swiper('#portfolio .thumb_small .swiper-container', {
        // effect: "slide",
        // freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 26,
        freeMode: true,
        watchSlidesProgress: true,
        // touchRatio: 0,
    });

    // portfolio_detail 
    const myLibrarySwiper = new Swiper('.board_wrap.swiper-container', {
        // effect: "slide",
        // freeMode: true,
        slidesPerView: 'auto',
        // touchRatio: 0,
    });

    
    const portfolioProductBigSwiper = new Swiper('#portfolio .thumb_big.swiper-container', {
        effect: "fade",
        // freeMode: true,
        // touchRatio: 0,
        spaceBetween: 10,
        thumbs: {
          swiper: portfolioProductSmallSwiper,
        },
        // navigation: {
        //     nextEl: ".swiper-navi-wrap .swiper-button-next",
        //     prevEl: ".swiper-navi-wrap .swiper-button-prev",
        //   },
    });

    function swiperStopStart() {
        $('.swiper-onOff').click(function(){
            $(this).toggleClass('active')
            $('.slide_progress-bar').toggleClass('stop')
            if($(this).hasClass('active')) {
                mainSwiper.autoplay.stop();            
            } else {
                mainSwiper.autoplay.start();            
            }
        })
    }
    // ======================================= swiper ======================================= 




    let nowLocation = location.href,
        subPageName = $('.visual_text .text_01').text();


    // header_default 
        

    // header hover event
    function headerHover(target01, target02) {
        $(target01).hover(function () {
            $(this).children(target02).stop().slideToggle("fast");
        }, function () {
            $(this).children(target02).stop().slideToggle("fast");
        });
    }

    // header click event
    function headerClick(target01, target02) {
        $(target01).click(function () {
            $(this).children(target02).slideToggle("fast");
        });
    }

    function header_curacle() {
        $('#header').hover(function () {
            // $('.header_center .depth_01, .header_bg').stop().slideDown('fast');
            $('#header').addClass('active');
            $('#header_left a img').attr('src', '../images/common/logo_02.svg');
        }, function () {
            // $('.header_center .depth_01, .header_bg').stop().slideUp('fast');
            $('#header').removeClass('active');
            $('#header_left a img').attr('src', '../images/common/logo_01.svg')
        });
    }

    // header Scroll event 
    function headerScroll() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop(), wh = $(window).height(), headerHei = $('#header').height();
            scroll >= headerHei ? $('#header').addClass('active') : $('#header').removeClass('active');
        });
    }

    function headerScroll_move() {
        let thisScroll = 0;
        const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

        $(window).scroll(function () {
            let vy = $(this).scrollTop()

            // $(window).scrollTop() <= 0 ? $("#header").removeClass('active') : null;

            
            if($(window).scrollTop() >= thisScroll ) {
                $("#header").addClass('change_top active')
                $("#header_full").removeClass('active')
            } else {
                $("#header").removeClass('change_top')
            }
            
            if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
                if($(window).scrollTop() == 0 ) {
                    $("#header").removeClass('change_top active')
                }
            }

            // $(window).scrollTop() > thisScroll ? $("#header").addClass('change_top active') : $("#header").removeClass('change_top')


            thisScroll = vy
        });
    }



    // window resize reload
    function windowResize() {
        window.addEventListener('resize', function () {
            location.reload();
        });
    }


    // header search box
    function headerSearch() {
        $('#header_search_btn').click(function () {
            $('#header_search_box').slideToggle(function () {
                $(this).toggleClass('active');
            });
        });
    }


    // header Full depth
    function headerFullslide() {
        $('#header_ham').click(function(){
            $(this).toggleClass('active');
            $('#header_full').toggleClass('active');
            $('main, #header_left, footer').toggleClass('blur')
        })
        $('#header_full ul li').click(function(){
            $('.header_full_wrap .depth_01').stop().slideUp()
            $(this).next().stop().slideToggle();
        })

    }


    // header Right click, header_full.active event.
    function headerRight() {
        let header_ham = document.querySelector('.header_ham')

        header_ham.addEventListener('click', function () {
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $('.header_full, .header_lang, .header_sns').addClass('active');
                $('#header_left a img').attr('src', '../images/ico/logo_02.svg');
                $('header').addClass('active')

            } else {
                $('.header_full, .header_lang, header_sns').removeClass('active');
                $('#header_left a img').attr('src', '../images/ico/logo_01.svg');
                $('header').removeClass('active')

            }

            if ($('.header_full').hasClass('active')) {
                $('body').on('scroll touchmove mousewheel', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                });
            } else {
                $('body').off('scroll touchmove mousewheel');
            }
        });
    }


    // page check header active
    function pageCheck() {
        // location Check
        if (nowLocation.indexOf('index.html') >= 0 ||
            nowLocation.indexOf('/company/') >= 0)
        {
            // console.log('Home')
        } else {
            console.log('subPage')
            $('#header').addClass('active')
            // headerLogo()
            // subNaviDepth_01()
            // $('#sub_nav_01 .depth_01 > a').text(subPageName)
        }

        // (nowLocation.indexOf('/system/') >= 0) ? subNavi_add_system() : null;
        // (nowLocation.indexOf('/about/') >= 0) ? subNavi_add_about() : null;
        // (nowLocation.indexOf('index.html') >= 0) ? console.log('Home') :  headerLogo();


        // let subNaviEvent = $('#sub_navi .content_wrap .text_02').text();
        // let LinkActive = $('.link_wrap a');
        // // link_wrap auto active
        // LinkActive.each(function (idx) {
        //     (subNaviEvent == LinkActive.eq(idx).text()) ? $(this).addClass('active') : null;
        // });
    }

    function headerLogo() {
        headerScroll();
    }


    // sub_page_navi
    function subNaviDepth_01() {
        let tagList_01 = '';

        fetch('../js/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('error 01')
                }
                return response.json()
            })
            .then((data) => {

                let addList = data.subNaviDepth_01

                for (let i = 0; i < addList.length; i++) {
                    tagList_01 = '<li class="depth_02_list"><a href="' + addList[i].href + '">' + addList[i].title + '</a></li>'
                    $('#sub_nav_01 .depth_02').append(tagList_01);
                }
                // $('#sub_nav_02 .depth_02').append(tagList)

            })
            .catch(() => {
                console.log('ERROR_02')
            })
    }

    // about
    function subNavi_add_about() {
        let tagList_01 = '';

        fetch('../js/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('error 01')
                }
                return response.json()
            })
            .then((data) => {

                let addList = data.subNavi_about

                for (let i = 0; i < addList.length; i++) {
                    tagList_01 = '<li class="depth_02_list"><a href="' + addList[i].href + '">' + addList[i].title + '</a></li>'
                    $('#sub_nav_02 .depth_02').append(tagList_01);
                }
                // $('#sub_nav_02 .depth_02').append(tagList)

            })
            .catch(() => {
                console.log('ERROR_02')
            })
    }

    // system
    function subNavi_add_system() {
        let tagList_01 = '';

        fetch('../js/data.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('error 01')
                }
                return response.json()
            })
            .then((data) => {

                let addList = data.subNavi_system

                for (let i = 0; i < addList.length; i++) {
                    tagList_01 = '<li class="depth_02_list"><a href="' + addList[i].href + '">' + addList[i].title + '</a></li>'
                    $('#sub_nav_02 .depth_02').append(tagList_01);
                }
            })
            .catch(() => {
                console.log('ERROR_02')
            })
    }

    function mobileCheck() {
        const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
        if ( varUA.indexOf('android') > -1) {
            //안드로이드
        } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
            //IOS
        } else {
            //아이폰, 안드로이드 외
        }
    }


    // header function
    // headerHover('.header_center > li', '.depth_01');
    // page function
    // pageCheck();
    // headerClick('.header_lang > ul', '.more_lang');
    // headerFullslide();
    // headerRight();
    // headerScroll()


    

    
    if(window.innerWidth <= 1300) {
        // header_curacle()
        // headerScroll_move()
    }


    console.log('common_js_end');
    // common_js_end
});
