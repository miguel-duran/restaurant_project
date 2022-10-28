import loadMenu from "./menu";

function createContactCard(name, title, number, src){
    const contactCard = document.createElement('div');
    contactCard.setAttribute('class', 'contact-card')

    const contactCardName = document.createElement('div')
    contactCardName.textContent = name;
    contactCardName.setAttribute('class', 'contact-card-name')
    contactCard.appendChild(contactCardName);

    const contactCardTitle = document.createElement('div');
    contactCardTitle.textContent = title;
    contactCardTitle.setAttribute('class', 'contact-card-title')
    contactCard.appendChild(contactCardTitle);

    const contactCardNum = document.createElement('div');
    contactCardNum.textContent = number;
    contactCardNum.setAttribute('class', 'contact-card-num')
    contactCard.appendChild(contactCardNum);

    const contactCardImg = document.createElement('img')
    contactCardImg.setAttribute('src', src)
    contactCard.appendChild(contactCardImg);


    return contactCard
}

function loadContact() {
    const content = document.querySelector('#content')

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')

    const contact1 = createContactCard('Reg', 'general manager', '232-232-4234', '/src/images/contact-reg.webp')
    contactContainer.appendChild(contact1)

    const contact2 = createContactCard('Blackbeard', 'owner', '########', '/src/images/contact-patchy.jpg')
    contactContainer.appendChild(contact2)

    const contact3 = createContactCard('Tyler Durten', 'plan an event', '777-444-2222', '/src/images/contact-tyler-durden.jpg')
    contactContainer.appendChild(contact3)

    content.appendChild(contactContainer)
}

export default loadContact;