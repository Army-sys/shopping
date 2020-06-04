$(function () {
    //banner
    new Swiper('.swiper1', {
      loop: true, // 循环模式选项
      autoplay:{
        delay: 3000,//1秒切换一次
        disableOnInteraction: false,//触摸之后不停止
      },
      // 分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })

    //内容导航
    new Swiper('.bannerpic', {
      loop: true, // 循环模式选项
      autoplay:{
        delay: 3000,//1秒切换一次
        disableOnInteraction: false,//触摸之后不停止
      },
      // 分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })

    //乐购快报
    new Swiper('.newsd', {
      direction: 'vertical',// 垂直切换选项
      loop: true, // 循环模式选项
      autoplay:{
        delay: 3000,//1秒切换一次
        disableOnInteraction: false,//触摸之后不停止
      }
     
    })

    // 倒计时

    function counted(){
      //  获取现在时间
    let time = new Date();
    // console.log(time)
    // 获取未来时间
    let timed = new Date('2020-6-1 20:00:00');
    // console.log(timed)
    // 获取时间差
    let count = timed - time;

    // 小时
    let hours = Math.floor(count/1000/60/60%24);
    if(hours<10) hours=`0${hours}`

    // 分钟
    let month = Math.floor(count/1000/60%60);
    if(month<10)month=`0${month}`

    // 秒
    let secend =Math.floor(count/1000%60);
    if(secend<10)secend=`0${secend}`
    // 拼接
    let catchd =`${hours}:${month}:${secend}`;

    // 渲染
     document.querySelector('#timeded').innerHTML=catchd;
    }
    
     counted();
     
      setInterval(counted,1000)
 
    // 购物轮播

    // 跳转
     $('#sign').click(function(){
       location.href="search.html"
     })

  })