$(function () {
   // 注册事件
   $('.allval').change(function () {
      //   获取选中状态
      let bool = $(this).prop('checked')

      //  赋值给其他值
      $('.allval,.inpVal').prop('checked', bool)

       allTota()

   })
   //   注册单个点击事件
   $('.inpVal').change(function () {
      //  获取单个选中长度
      let inpleng = $('.inpVal:checked').length;
      // 获取总长度
      let alleng = $('.inpVal').length;
      if (inpleng == alleng) {
         $('.allval').prop('checked', true)
      } else {
         $('.allval').prop('checked', false)
      }

       allTota()
   })
   // 增加数量
   $('.reduce').click(function () {
      // 获取input的值
      let num = $(this).siblings('.inp').val();
      // 每点击一次加一
      ++num;
      //   将num的值赋给val
      $(this).siblings('.inp').val(num);

      allTota()

      // // 获取价格文本
      //  let sige = $(this).closest('.ri').find('.sig').text()
      // // 给价格文本渲染
      // $('.sigd').text(num * sige);
   })

   // 减少数量
   $('.incre').click(function () {
      // 获取input的值
      let num = $(this).siblings('.inp').val();
      // 如果input等于1则停止
      if (num <= 1) return false;
      // 每点击一次减少1
      --num;
      //  将num的值赋给value
      $(this).siblings('.inp').val(num)

       allTota()
   })

   //  计算总量和总价
   function allTota() {
      // 定义保存总价
      let allPr = 0;
      //定义保存总数量
      let nump = 0;
      $('.inpVal:checked').each(function (index,dom) {
         //  获取价格文本
         let sige = $(dom).closest('li').find('.sig').text()
        
         // 获取数量文本
         let vale = parseInt($(dom).closest('li').find('.inp').val() ) 
        
         
         nump += vale;
         // 获取商品总价
         
         allPr +=vale*sige;

      })
      // 得到总价并渲染
      $('.sigd').text(allPr.toFixed(2))
      $('.um').text(nump)
   }
})