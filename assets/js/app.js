let navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 80){
        navbar.classList.add('navbar-blur');
    }else {
        navbar.classList.remove('navbar-blur');
    }
})

let content = false;
let btnContentShow = document.getElementById('btn-content-show');
let btnContentHide = document.getElementById('btn-content-hide');
let containerContentHide = document.getElementById('container-content-hide');
let contentArticle = document.getElementById('content-article');

btnContentShow.addEventListener('click', () => {
    showHideContent();
})

btnContentHide.addEventListener('click', () => {
    showHideContent();
})

let showHideContent = () => {
    if(content==false){
        contentArticle.classList.remove('hidden');
        btnContentShow.classList.add('hidden');
        containerContentHide.classList.remove('hidden');
        content = true;
    }else {
        contentArticle.classList.add('hidden');
        btnContentShow.classList.remove('hidden');
        containerContentHide.classList.add('hidden');
        content = false;
    }
}