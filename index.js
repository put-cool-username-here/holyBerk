console.log('balls')
//This function checks if the user has scrolled to the location where the image is supposed to be. 
//If the user did scroll to the location, it adds the .show class to that image. 
//And this will prompt CSS to do the little 'fade in' animation
function setupIntersectionObserver() {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            };
        });
    });
    
    
    const hiddenElements = document.querySelectorAll('.b');
    hiddenElements.forEach(el => observer.observe(el));
     

}


//This function loads images from 1 to numberOfImages arg and adds the .b class to the images
function loadImages( numberOfImages) {
    const container = document.getElementById('image-container');

    for (let i = 1; i <= numberOfImages; i++) {
        const br = document.createElement('br');
        const img = document.createElement('img');
        
        img.className = 'b';
        img.src = `./images/${i}.jpeg`;
        
        container.appendChild(br);
        container.appendChild(img);
        container.appendChild(document.createElement('br'));
        container.appendChild(document.createElement('br'));
    }


    setupIntersectionObserver();
}



document.addEventListener('DOMContentLoaded', function() {
    loadImages(9); //you GOTTA add the no of images that are titled from 1 to 'x'. Then pass x as the arg
    
});









