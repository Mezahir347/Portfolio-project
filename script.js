const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        //Toggle Now 
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            }
            else{
                link.style.animation =  `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            } 
        });

        //Burger Animation
        burger.classList.toggle('toggle');
        

    });

}

navSlide();



/*Dark mode*/

const colorSwitch = document.getElementById('input-color-switch');

colorSwitch.addEventListener('click',checkMode);

function checkMode(){
    console.log('checking...');
    document.body.classList.toggle("dark-mode");
}










