$(function(){
// 点击右箭头的时候切换图片
$('right').on('click',function(){
    $(this).next().find('li').addClass('active')
})

});