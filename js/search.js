$(function () {
  

 //    注册聚焦事件
    //   获取元素
    
    $('#search-btn').click( function () {
        //  获取value内容长度
        let con = $('#keyword').val()
         
        //  判断是否有内容 没有则停止
        if (!con) return false;
        //    获取本地储存内容
        let locon = localStorage.getItem('locon')
        // 判断
        if (locon) { //如果有
            //   将内容转化为数组
            let arr = JSON.parse(locon)
            // 追加内容
            arr.push(con)
            // 添加到本地
            localStorage.setItem('locon', JSON.stringify(arr))
        } else {
            // 没有内容
            arr = [];

            // 向数组添加内容
            arr.push(con);

            // 添加到本地
            localStorage.setItem('locon', JSON.stringify(arr))
        }
        ('#keyword').val =('');
        history.go(0)
    })
    function xuan(){
        // 渲染
    // 获取数据
    let locon = localStorage.getItem('locon')
    // 没有数据则停止
     if (!locon) return false
    // 获取数组转化为对象
    let date =JSON.parse(locon)
    //  建立空字符串
    let resHTML = "";
    // 获取对象长度
    let len=date.length;
    // 遍历对象
    for(let i=len-1 ; i>=0 ;i--){    //可用unshift
        //弹性赋值
        resHTML+=`<li>${date[i]}</li>`;
    }
    // 渲染
    $("#content").html(resHTML);
  }

    //  删除数据
    $('#del').click(function(){
        if(confirm('确定要删除吗')){
            localStorage.removeItem('locon')
            $('#content').html('')
        }
    })
   
    
function repea(){
    // 去重
    // 获取数据
   let repeat = localStorage.getItem('locon')
//    转化为数组
      let rep = JSON.parse(repeat)
    //   定义数组保存数据
      let arrp=[]
    //   遍历数组
     for(let i=0;i<rep.length;i++){
        //  判断数组是否含有数据
         let bool = arrp.includes(rep[i])
         if(!bool){   //没有
            //添加数据
            arrp.push(rep[i])
        }
     localStorage.setItem('locon',JSON.stringify(arrp))

   
  }
  xuan()

    }
    repea()
    function re(){
        // 记录不大于10
 let reco = localStorage.getItem('locon');
//   转化为数组
     let arri = JSON.parse(reco)
    //    获取数组长度
        let recod = arri.length
        //判断长度是否大于10
        if(recod>10){
            // 删除第一个元素
            arri.shift()
        }
           
        localStorage.setItem('locon',JSON.stringify(arri))
        // 调用渲染
        xuan()
    }
    re()
})

   


