$(document).ready(function(){
  setBindings();
})

function setBindings(){
  $('div a').click(function(e){
    //e.preventDefault();
    var sectionID= "go"+e.currentTarget.id;

    $("html body").animate({
      scrollTop: $('#' + sectionID).offset().top
    }, 1000);

  })
}
