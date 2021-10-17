$(document).ready(function(){
    var page = 0

    function sliderFunc(){
        if(page<3){
            page++
            $('.slider-container').animate({
                left: '-=100%'
            }, 3000)           
        }
        else{
            page=0
            $('.slider-container').animate({
                left: '0'
            }, 3000)            
        }
    }

    setInterval(sliderFunc, 8000)

})