$(function(){
  var $average = $('.page-wrapper .drop-page'),
      $averageOption = $('.page-wrapper .li-items'),
      $numberOption = $('.page-wrapper .number');
  // 操作分页--页码
  $numberOption.on('click',function(){
     $(this).addClass('selected').siblings('.number').removeClass('selected');
  });
  // 操作分页-- 选择展示条数
  $average.on('click',function(){
     $(this).next().show();
  });
  $averageOption.on('click',function(){
    var $this = $(this),
        $oDropOption = $this.parents('.average-wrapper').find('.drop-page')
        .children('.page-v');

        $oDropOption.html($this.html());
        $this.parent().hide()
  });
});
