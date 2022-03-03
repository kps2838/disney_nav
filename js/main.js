$(function(){
    // pc hover

    $(window).resize(function(){
        const w = window.innerWidth;
        console.log(w);

        if(w >= 768){
            $('#gnb > ul > li').hover(
                function(){
                    $(this).children().addClass('on')
                },
                function(){
                    $(this).children().removeClass('on')
                }
            )
        }
        // 모바일에서 hover 이벤트 제거
        else{
            $('#gnb > ul > li').off();
        };
    });

    const w = window.innerWidth;
    console.log(w);
    if(w <= 767){
        $('#gnb > ul > li').click(function(){
            $('.depth2').removeClass('on');
            $(this).children().toggleClass('on');
        });
    }

    // mobile용 2단계 메뉴 토글
    // $('#gnb > ul > li') 클릭시 2단계 메뉴 toggle


    // mobile toggle
    $('#toggle').click(function(){
        $('#gnb > ul').toggleClass('on');
    });
});