<template>
  <div class="waterfall">
    <img src="http://via.placeholder.com/100x100" alt="100*100">
    <img src="http://via.placeholder.com/100x70" alt="100*70">
    <img src="http://via.placeholder.com/100x150" alt="100*150">
    <img src="http://via.placeholder.com/100x250" alt="100*250">
    <img src="http://via.placeholder.com/100x80" alt="100*80">
    <img src="http://via.placeholder.com/100x90" alt="100*90">
    <img src="http://via.placeholder.com/100x120" alt="100*120">
    <img src="http://via.placeholder.com/100x210" alt="100*210">
    <img src="http://via.placeholder.com/100x230" alt="100*230">
    <img src="http://via.placeholder.com/100x100" alt="100*100">
    <img src="http://via.placeholder.com/100x70" alt="100*70">
    <img src="http://via.placeholder.com/100x150" alt="100*150">
    <img src="http://via.placeholder.com/100x250" alt="100*250">
    <img src="http://via.placeholder.com/100x80" alt="100*80">
    <img src="http://via.placeholder.com/100x90" alt="100*90">
    <img src="http://via.placeholder.com/100x120" alt="100*120">
    <img src="http://via.placeholder.com/100x210" alt="100*210">
    <img src="http://via.placeholder.com/100x250" alt="100*250">
    <img src="http://via.placeholder.com/100x80" alt="100*80">
    <img src="http://via.placeholder.com/100x80" alt="100*80">
    <img src="http://via.placeholder.com/100x90" alt="100*90">
    <img src="http://via.placeholder.com/100x120" alt="100*120">
    <img src="http://via.placeholder.com/100x210" alt="100*210">
    <img src="http://via.placeholder.com/100x100" alt="100*100">
    <img src="http://via.placeholder.com/100x70" alt="100*70">
    <img src="http://via.placeholder.com/100x250" alt="100*250">
    <img src="http://via.placeholder.com/100x210" alt="100*210">
    <img src="http://via.placeholder.com/100x250" alt="100*250">
    <img src="http://via.placeholder.com/100x210" alt="100*210">
    <img src="http://via.placeholder.com/100x230" alt="100*230">
    <img src="http://via.placeholder.com/100x100" alt="100*100">
    <img src="http://via.placeholder.com/100x70" alt="100*70">
    <img src="http://via.placeholder.com/100x150" alt="100*150">
    <img src="http://via.placeholder.com/100x150" alt="100*150">
    <img src="http://via.placeholder.com/100x230" alt="100*230">
    <img src="http://via.placeholder.com/100x70" alt="100*70">
    <img src="http://via.placeholder.com/100x150" alt="100*150">
    <img src="http://via.placeholder.com/100x250" alt="100*250">
    <img src="http://via.placeholder.com/100x80" alt="100*80">
    <img src="http://via.placeholder.com/100x90" alt="100*90">
    <img src="http://via.placeholder.com/100x120" alt="100*120">
    <img src="http://via.placeholder.com/100x210" alt="100*210">
    <img src="http://via.placeholder.com/100x250" alt="100*250">
    <img src="http://via.placeholder.com/100x80" alt="100*80">
    <img src="http://via.placeholder.com/100x80" alt="100*80">
    <img src="http://via.placeholder.com/100x90" alt="100*90">
    <img src="http://via.placeholder.com/100x120" alt="100*120">
    <img src="http://via.placeholder.com/100x210" alt="100*210">
  </div>
</template>

<script>
export default {
  name: "TempSku",
  data () {
    return {
    };
  },
  methods: {
    init() {
      var colCount   //定义列数
      var colHeightArry= []   //定义列高度数组
      var imgWidth = $('.waterfall img').outerWidth(true)   //单张图片的宽度
      colCount = parseInt($('.waterfall').width()/imgWidth)   //计算出列数
      for(var i = 0 ; i < colCount; i ++){
        colHeightArry[i] = 0
      }
      //[0,0,0]

      $('.waterfall img').on('load',function(){
      
        var minValue = colHeightArry[0]  //定义最小的高度
        var minIndex = 0  //定义最小高度的下标
        for(var i = 0 ; i < colCount; i ++){
          if(colHeightArry[i] < minValue){   //如果最小高度组数中的值小于最小值
            minValue = colHeightArry[i]   //那么认为最小高度数组中的值是真正的最小值
            minIndex = i  //最小下标为当前下标
          }
        }
        $(this).css({
          left: minIndex * imgWidth,
          top: minValue
        })
        colHeightArry[minIndex] += $(this).outerHeight(true)
      })


      //当窗口大小重置之后，重新执行
      $(window).on('resize',function(){
        reset()
      })


      //当窗口加载完毕，执行瀑布流
      $(window).on('load',function(){
        reset()
      })

      //定义reset函数
      function reset(){
      var colHeightArry= []
        colCount = parseInt($('.waterfall').width()/imgWidth)
        for(var i = 0 ; i < colCount; i ++){
          colHeightArry[i] = 0
        }
        $('.waterfall img').each(function(){
          var minValue = colHeightArry[0]
          var minIndex = 0
          for(var i = 0 ; i < colCount; i ++){
            if(colHeightArry[i] < minValue){
              minValue = colHeightArry[i]
              minIndex = i
            }
          }
          $(this).css({
            left: minIndex * imgWidth,
            top: minValue
          })
          colHeightArry[minIndex] += $(this).outerHeight(true)
        })
      }
    },
  },
  mounted() {
    this.init()
  }
}
</script>

<style scoped>
.waterfall {
  position:relative;
  max-width: 80%;
  margin: 0 auto;
  height:800px;
}
.waterfall img {
  position: absolute;
  width: 100px;
  margin: 10px;
  /* 布局transition效果 */
  transition: all .4s;
}
</style>