const logo = document.querySelector('.logo')
const container = document.querySelector('.container')
const navOne = document.querySelector('.hiddenMenu')
const sections = document.querySelectorAll('section')
const pics = document.querySelector('.pics')
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');



function menuToggle(){
  navOne.classList.toggle('active');
}

/* Intersection Observer for sections */ 

window.addEventListener('scroll', checkSections)

checkSections()

function checkSections() {
    const triggerBottom = window.innerHeight / 5 * 3;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
       
        if(sectionTop < triggerBottom) {
            section.classList.add('show')
        } else {
            section.classList.remove('show')
        }
    })
}



/*automatic slider for homepage*/



var i = 0;
var images = [];
var time = 12000;

images[0] = "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
images[1] = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
images[2] = "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80";
images[3] = "https://images.unsplash.com/photo-1623920996377-9c5cd536143e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
images[4] =  "https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
images[5] =  "https://images.unsplash.com/photo-1433849665221-d2f93042ae54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";

/*
var imgArray = [
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80',
     'https://images.unsplash.com/photo-1623920996377-9c5cd536143e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
     'https://images.unsplash.com/photo-1596204976717-1a9ff47f74ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
     'https://images.unsplash.com/photo-1433849665221-d2f93042ae54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'],
    curIndex = 0;
    imgDuration = 11000;

function slideShow() {
    document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
    }, );
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();
*/

function changeImage() {
    document.slide.src = images[i]

    if(i < images.length - 1) {
        i++
    } else {
        i = 0
    } 
    setTimeout("changeImage()", time)
}

window.onload = changeImage;

