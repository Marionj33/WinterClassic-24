/*

// NAV BAR COLLAPSE ON SCROLL
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.nav-bar');
        var mainContent = document.querySelector('.main-content');
        var navHome = document.querySelector('#navigationHome');
        // var bottomFixed = document.querySelector('.bottom-fixed');


        
        if (window.scrollY > 50) {
            navbar.classList.add('collapsed');
            mainContent.style.paddingTop = '7rem'; // Adjust padding when navbar is collapsed
            navHome.classList.remove('bottom-fix');
            
            var wrapper = document.querySelector('.wrapper');
            if (wrapper) {
                wrapper.remove();
            }


        } else {
            navbar.classList.remove('collapsed');
            mainContent.style.paddingTop = '100%'; // Adjust padding when navbar is expanded
            navHome.classList.add('bottom-fix');
   
        }
    });


*/

// Force scroll to top on page load
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0); // Scrolls to the top before unloading the page
});

window.onload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
});


document.addEventListener("DOMContentLoaded", function() {
    var wrapper = document.querySelector('.wrapper');
    var allContent = document.querySelector('.all-content');

    // Play animation on wrapper
    wrapper.style.animationPlayState = 'running';

    // Show all-content after 10 seconds
    setTimeout(function() {
        allContent.style.display = 'block';
    }, 000); // 10 seconds delay
});


// BLACK BACKGROUND TRANSITION
document.addEventListener("DOMContentLoaded", function() {
    // Wait for 10 seconds
    setTimeout(function() {
        // Select the body element
        var body = document.body;
        
        // Set the background color to transparent to initiate fade-out
        document.body.style.backgroundColor = 'transparent';
        
        // Optionally, you can wait a short moment before removing the style
        setTimeout(function() {
            document.body.style.backgroundColor = '';
        }, 2000); // Wait for 1 second before completely removing the style
    }, 1000); // 10 seconds delay
});


