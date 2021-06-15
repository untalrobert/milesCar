//menu toggle
(function($){

    $('.inicial').click(function(e){
        e.preventDefault();
        $('.text__input').toggleClass('otra');
    })
    $('.navigation__toggle').click(function(e){
        e.preventDefault();
        $('.navigation__toggle').toggleClass('active');
        $('.navigation__menu').toggleClass('active');
        $('.navigation__overlay').toggleClass('active');
        $('.navigation__icons__dolar').toggleClass('actives');
      
    })

    $('.navigation__overlay').click(function(e){
        e.preventDefault();
        $('.navigation__icons__dolar').toggleClass('actives');
        $('.navigation__toggle ').toggleClass('active');
        $('.navigation__menu').toggleClass('active');
        $('.navigation__overlay').toggleClass('active');
    })
})(jQuery);


$(document).ready(function(){

    $('.input-daterange').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    calendarWeeks : true,
    clearBtn: true,
    disableTouchKeyboard: true
    });
    
    });