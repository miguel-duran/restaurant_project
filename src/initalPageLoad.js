

function createDescription() {
    const description = document.createElement('div')
    const descriptionText = document.createElement('p');
    descriptionText.textContent = `Welcome to the Salty Spitoon where the appetizer is a fist fight 
                                    and dessert is a steel-toed boot. Only the toughest of the tough 
                                    are welcome and if you eat anything softer than a brick for breakfast 
                                    you best keep your distance.`
    description.appendChild(descriptionText);
    return description;   
}

function createFooter() {
    const footer = document.createElement('div');
    footer.textContent = 'no chumps allowed';
    return footer;
}

function initialPageLoad () {
    const content = document.querySelector('#content');

    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('class', 'home-container')

    const description = createDescription()
    homeContainer.appendChild(description);

    const footer = createFooter()
    homeContainer.appendChild(footer)

    content.appendChild(homeContainer)
}

export default initialPageLoad;