
$(function(){
    $('main .releft li').click(function(){
        //  左侧active的变动
        $(this).addClass('active').siblings().removeClass('active')
        let index = $(this).index();
        console.log(index)
        let move = $('.move').eq(index).offset().top
        $('body,.reright').stop().animate({scrollTop:move},500)
    })
    
})