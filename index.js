const toggle = document.getElementById('toggle');
const navbar = document.getElementById('head')
const header = document.querySelector('.header');
const main = document.querySelector('.main1')
let iterator = false;

toggle.addEventListener(
    'click',()=>{
        iterator = !iterator;
        if(iterator){
            navbar.classList.add('shiroi')
            header.classList.add('shiroi-header');
            header.classList.add('shiroi-main1');
        }
        else{
            navbar.classList.remove("shiroi")
            header.classList.remove('shiroi-header');
            header.classList.remove('shiroi-main1');
        }
    }
)