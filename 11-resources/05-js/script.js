window.onload = pageload;

function pageload() {

    const logo = document.getElementsByClassName('logo')[0];
    const text = logo.innerHTML;
    let i = 0;
    
    logo.innerHTML = '';

    function typeEffect() {
        if (i < text.length) {
            logo.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeEffect, 150);
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            const offset = document.getElementById('topbar').offsetHeight;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });


    typeEffect();
}


