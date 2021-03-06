/**
 * Created by admin on 10/14/14.
 * *
 * Detecting Mobile Devices with JavaScript
 * *
 */
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.any() ) alert('Mobile');

if( isMobile.iOS() ) alert('iOS');

//if you use jQuery
$(element).on(isMobile ? 'touchend' : 'click', function(e) {
    //Do something.....
});