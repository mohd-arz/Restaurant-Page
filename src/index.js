import './style.css'
import menuElementCreation from './menu';
import contactElementCreation from './contact';
import aboutElementCreation from './about';

const content=document.getElementById('content')

function indexElementCreation(){
    document.body.removeAttribute('class')

    //for setting an indicator ie currently at home.
    const home=document.querySelector('.home')
    indicateCurrentSite(home)

    const homeContainer=document.createElement('div');
    homeContainer.classList.add('home-container');

    const title=document.createElement('h1');
    const tagline=document.createElement('p');
    const menuBtn=document.createElement('button');

    title.classList.add('home-title');
    tagline.classList.add('home-tagline');
    menuBtn.classList.add('menu-btn')

    title.textContent='Dine & Wine';
    tagline.textContent='-Indulge in Culinary Artistry, Sip the Elixir of Joy!';
    menuBtn.textContent='Our Menu';

    menuBtn.addEventListener('click',()=>{
        wipingFunction()
        menuElementCreation()
    });

    homeContainer.appendChild(title)
    homeContainer.appendChild(tagline)
    homeContainer.append(menuBtn)

    content.appendChild(homeContainer)


}
indexElementCreation()

function wipingFunction(){
    document.body.classList.add('darker-background');

    [...content.childNodes].forEach(item=>{
        content.removeChild(item)
    })
}



function indicateCurrentSite(value){
    const home=document.querySelector('.home')
    const menu=document.querySelector('.menu')
    const contact=document.querySelector('.contact')
    const aboutus=document.querySelector('.about')
    home.classList.remove('current-site');
    menu.classList.remove('current-site');
    contact.classList.remove('current-site');
    aboutus.classList.remove('current-site');
    value.classList.add('current-site')
}

document.querySelector('.home').addEventListener('click',()=>{
    wipingFunction(); 
    indexElementCreation()
})
document.querySelector('.menu').addEventListener('click',()=>{
    wipingFunction(); 
    menuElementCreation()
})
document.querySelector('.contact').addEventListener('click',()=>{
    wipingFunction();
    contactElementCreation()
})
document.querySelector('.about').addEventListener('click',()=>{
    wipingFunction();
    aboutElementCreation()
})

export default wipingFunction
export {indicateCurrentSite}