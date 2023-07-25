import { indicateCurrentSite } from ".";

function aboutElementCreation(){
    const content=document.getElementById('content')

    const about=document.querySelector('.about');
    indicateCurrentSite(about);

    const aboutUsHeading=document.createElement('h1');
    aboutUsHeading.textContent='About Us'
    content.appendChild(aboutUsHeading);

    const aboutUsContainer=document.createElement('div');
    aboutUsContainer.classList.add('aboutus-container')
    const aboutUsHeader=document.createElement('h2');
    aboutUsHeader.textContent="Dine and Wine";
    aboutUsHeader.classList.add('aboutus-heading')

    const aboutUsDescription=document.createElement('p');
    aboutUsDescription.textContent="-At Dine and Wine, our journey began with a simple yet passionate vision – to create a haven for gastronomes and wine enthusiasts alike. Founded in the heart of the city by a team of culinary aficionados, our restaurant stands as a testament to the love for excellent food and extraordinary wines. We pour our hearts into every dish, using the finest ingredients to craft culinary masterpieces that celebrate flavors from around the world. Complementing the delectable fare is an impressive wine collection, carefully curated to delight even the most discerning connoisseurs. As we continue to grow, our commitment to providing an enchanting dining experience remains unwavering. Come, be a part of our story, and let us create cherished moments together.";

    aboutUsContainer.appendChild(aboutUsHeader);
    aboutUsContainer.appendChild(aboutUsDescription);
    content.appendChild(aboutUsContainer)
}
export default aboutElementCreation