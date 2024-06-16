
let menuIcon =document.querySelector('.menuIcon')
let menuItem =document.querySelector('.menuItem')

menuIcon.addEventListener('click',()=>{
    menuItem.classList.toggle('visible');
    menuItem.classList.remove('none');
})
document.body.addEventListener('click', (event) => {

    if (!menuItem.contains(event.target) && event.target !== menuIcon) {
        menuItem.classList.add('none');
        setTimeout(() => {
        menuItem.classList.remove('visible');
            
        }, 990);
    }
});
// let aboutUs = document.getElementById('aboutUsLink');
// let ContactUs = document.getElementById("contactLink");
// let whoAreWe =document.getElementById("whoAreWeLink")
// let aboutUspage =document.querySelector('.second')
// aboutUs.addEventListener('click',()=>{
//     aboutUspage.scrollIntoView({behavior:"smooth"});
// })
// // aboutUs.onclick = ()=>{
// //     whoAreWe.style.display='none'
// // }
let aboutUs = document.getElementById('aboutUsLink');
let contactUs = document.getElementById("contactLink");
let whoAreWe = document.getElementById("whoAreWeLink");

let aboutUspage = document.getElementById('aboutUs');
let contactUspage = document.getElementById('consultancy');
let whoAreWePage = document.getElementById('who');

const scrollWithOffset = (element) => {
    const offset = 100; // Offset value, adjust as needed
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
};
 const aboutUsoffset =(element)=>{
    const offset=150;
    const elementPosition=element.getBoundingClientRect()
 }
aboutUs.addEventListener('click', (event) => {
    event.preventDefault();
    scrollWithOffset(aboutUspage);
});

contactUs.addEventListener('click', (event) => {
    event.preventDefault();
    scrollWithOffset(contactUspage);
});

whoAreWe.addEventListener('click', (event) => {
    event.preventDefault();
    scrollWithOffset(whoAreWePage);
});
