import { indicateCurrentSite } from ".";

function contactElementCreation(){
    const content=document.getElementById('content')

    const contact=document.querySelector('.contact');
    indicateCurrentSite(contact)

    const contactDetailHeading=document.createElement('h1');
    contactDetailHeading.textContent='Contact Us';
    content.appendChild(contactDetailHeading)

    const contactDetailContainer=document.createElement('div');
    contactDetailContainer.classList.add('contact-detail-container')

    const contactAddressContainer=document.createElement('div');
    contactAddressContainer.classList.add('contact-address-container');
    const contactAddressHeading=document.createElement('h2')
    const contactAddressPara=document.createElement('p');
    contactAddressHeading.textContent='Address'
    contactAddressPara.innerHTML='123 Main Street,<br>City, State,<br> Zip Code';
    contactAddressContainer.appendChild(contactAddressHeading)
    contactAddressContainer.appendChild(contactAddressPara)
    contactDetailContainer.appendChild(contactAddressContainer);


    const contactPhoneContainer=document.createElement('div');
    contactPhoneContainer.classList.add('contact-phone-container')
    const contactPhoneHeading=document.createElement('h2');
    const contactPhonePara=document.createElement('p')
    contactPhoneHeading.textContent='Phone';
    contactPhonePara.textContent='(555) 555-5555';
    contactPhoneContainer.appendChild(contactPhoneHeading)
    contactPhoneContainer.appendChild(contactPhonePara)
    contactDetailContainer.appendChild(contactPhoneContainer);


    const contactEmailContainer=document.createElement('div');
    contactEmailContainer.classList.add('contact-email-container')
    const contactEmailHeading=document.createElement('h2');
    const contactEmailPara=document.createElement('a');
    contactEmailHeading.textContent='Email';
    contactEmailPara.textContent='contact@dineandwine.com'
    contactEmailPara.setAttribute('href','mailto:contact@dineandwine.com');
    contactEmailContainer.appendChild(contactEmailHeading);
    contactEmailContainer.appendChild(contactEmailPara)
    contactDetailContainer.appendChild(contactEmailContainer);
    


    const contactHoursContainer=document.createElement('div')
    contactHoursContainer.classList.add('contact-hours-container')
    const contactHoursHeading=document.createElement('h2')
    const contactHoursPara=document.createElement('p')
    contactHoursHeading.textContent='Opening Hours';
    contactHoursPara.innerHTML='Monday - Friday: 11:00 AM to 10:00 PM <br> Saturday - Sunday: 12:00 PM to 11:00 PM';
    contactHoursContainer.appendChild(contactHoursHeading);
    contactHoursContainer.appendChild(contactHoursPara)
    contactDetailContainer.appendChild(contactHoursContainer);


    content.appendChild(contactDetailContainer);

}
export default contactElementCreation