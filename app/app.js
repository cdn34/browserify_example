// import entire library or plugin
//import $ from 'jquery';
var $ = require('jquery'); 


// and then go ahead and use them as we wish:
$('.element').on('click',function() {
    if($('.element').hasClass('element-round')){
        $('.element').removeClass( 'element-round');
        $('#text').text('Square');
    }else{
        $('.element').addClass('element-round');
        $('#text').text('Circle');
    }
        
    
});