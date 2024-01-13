document.addEventListener("DOMContentLoaded", function () {
    function adjustIframeHeight(iframe) {
    iframe.onload = function () {
    var frameContent = iframe.contentDocument || iframe.contentWindow.document;
    var object = frameContent.querySelector("object");
    var frameBody = frameContent.querySelector("body");
    var height = object.offsetHeight;
    frameBody.style.margin = 0;
    iframe.style.height = height + 'px';
    };
    }
    var iframes = document.querySelectorAll('.auto-height-iframe');
    iframes.forEach(adjustIframeHeight);
    });
 
    
    document.addEventListener('DOMContentLoaded', function () {
        var menuToggle = document.querySelector('.menu-toggle');
        var mobileMenu = document.querySelector('.mobile-menu');
    
        menuToggle.addEventListener('click', function () {
            if (mobileMenu.style.display === 'block' || mobileMenu.style.display === '') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'block';
            }
        });
    
        // Ensure mobile menu is hidden initially
        mobileMenu.style.display = 'none';
    
        // Handle window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth >= 1200) {
                // Hide mobile menu if screen width is 1200px or larger
                mobileMenu.style.display = 'none';
            }
        });
    });