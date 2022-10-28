function createMenuItem(src, title, text, price) {
    const menuItem = document.createElement('div');
    menuItem.setAttribute('class', 'menu-item');

    const menuItemTextContainer = document.createElement('div');
    menuItemTextContainer.setAttribute('class', 'menu-item-text-container');

    const menuItemImg = document.createElement('img')
    menuItemImg.setAttribute('src', src)
    menuItemImg.setAttribute('class', 'menu-item-img')

    const menuItemTitle = document.createElement('div')
    menuItemTitle.textContent = title;
    menuItemTitle.setAttribute('class', 'menu-item-title')

    const menuItemDescription = document.createElement('div')
    menuItemDescription.textContent = text;
    menuItemDescription.setAttribute('class', 'menu-item-description')

    const menuPrice = document.createElement('div')
    menuPrice.textContent = price;
    menuPrice.setAttribute('class', 'menu-item-price')

    menuItem.appendChild(menuItemImg)
    menuItemTextContainer.appendChild(menuItemTitle)
    menuItemTextContainer.appendChild(menuItemDescription)
    menuItemTextContainer.appendChild(menuPrice)
    menuItem.appendChild(menuItemTextContainer)

    return menuItem
}

function loadMenu() {
    const content = document.querySelector('#content')

    const menuContainer = document.createElement('div')
    menuContainer.setAttribute('class', 'menu-container')


    const item1 = createMenuItem(
        "/src/images/bowl-of-screws.jpeg", 
        'Bowl of Nails', 
        'Bowl of nails, a classic at the Salty Spitoon, served without milk', 
        'price: $6'
        )
    menuContainer.appendChild(item1)

    const item2 = createMenuItem('/src/images/snail-food.webp', 'brick with hot sauce', 'the finest brick sourced from our backwall', '$5')
    menuContainer.appendChild(item2)

    const item3 = createMenuItem('/src/images/volcano-sauce-drop.png', 'volcano', 'this drop of hot sauce is declared to be really really hot', '$3')
    menuContainer.appendChild(item3)

    const item4 = createMenuItem('/src/images/sundae.jpeg', 'sundae', 'for only the toughest', '$10')
    menuContainer.appendChild(item4)

    const item5 = createMenuItem('/src/images/debtor.jpeg', 'debtors delight', 'a meal sourced from a debtor to the salty splitoon', '$12')
    menuContainer.appendChild(item5)

    const item6 = createMenuItem('/src/images/krabby-patty-2.jpeg', 'krabby patter', 'a good final meal', '$your life')
    menuContainer.appendChild(item6)

    const item7 = createMenuItem('/src/images/barnacle-balls.jpg', 'barnacle balls', 'protein packed', '$12')
    menuContainer.appendChild(item7)

    const item8 = createMenuItem('/src/images/nasty-patty.webp', 'nasty patty', 'plenty of probiotics', '$12')
    menuContainer.appendChild(item8)

    content.appendChild(menuContainer);
}

export default loadMenu;