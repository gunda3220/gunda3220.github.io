$(".read-more").click(function(){
  $(this).parents(".sub-div-1").siblings(".sub-div-3").toggleClass("active");
});
var faToggle = 0;
var oWidth = $(window).width();
if(oWidth < 770)
{
  $('.fab').removeClass('fa-2x');
}
$(window).resize(function(){
  var width = $(window).width();
  if(width < 770){
    if(faToggle == 0)
    {
      $('.fab').removeClass('fa-2x');
      faToggle = 1;
    }
  }
  else{
    $('.fab').addClass('fa-2x');
    faToggle = 0;
  }
})
