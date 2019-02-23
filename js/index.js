// JS goes here
let nav = document.querySelectorAll('.nav');
let pages = document.querySelector('.pages');
let bar = document.querySelector('.nav-bar');
let project = document.querySelector('.projects');
let title =  document.querySelectorAll('.pages a');
let imgTitle = document.querySelectorAll('.home-page-title h2');
let jumbo = document.querySelector('.jumbo h2');

TweenMax.staggerFrom(imgTitle, 3, {x: 200, opacity: 0}, 0.5);
TweenLite.from(bar, 5, {opacity: 0, y: 500}).delay(3);
TweenLite.from(document.querySelector('body'), 3, {opacity: 0.3});



class TabLink {
    constructor(element) {
        this.element = element;

        // Get the custom data attribute on the Link
        this.data = this.element.dataset.tab;
        // Using the custom data attribute get the associated Item element
        this.item = document.querySelector(`.service-content[data-tab="${this.data}"]`);
        // Using the Item element, create a new instance of the TabItem class
        this.tabItem = new TabItem(this.item);

        this.element.addEventListener('click', () => {
        // Call the select method you define below
            this.select();
        });
    };

    select() {
        // Get all of the elements with the services-btn class
        const buttons = document.querySelectorAll('.btn');

        // Using a loop or the forEach method remove the 'selected' class from all of the links
        buttons.forEach(button => {
            button.classList.remove('selected');
        });

            // Add a class named "selected" to this link
            this.element.classList.add('selected');

            // Call the select method on the item associated with this link
            this.tabItem.select();
        }
    }

    class TabItem {
        constructor(element) {
        this.element = element;
    }

        select() {
    // Select all service-content (title, paragraph, image)
        const items = document.querySelectorAll('.service-content');
        // Remove the class "tabs-item-selected" from each element
        items.forEach(item => {
            item.classList.remove('show');
            TweenLite.from(item, 3, {opacity:0});
                })
        // Add a class named "show" to this element 
        this.element.classList.add('show');
        TweenLite.to(this.element, 3, {opacity: 1});
    }
}




for(let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', () => {
        nav[0].classList.toggle('nav-hidden');
        nav[1].classList.toggle('nav-hidden');
        TweenLite.to(bar, 2, {opacity: 1});
        TweenLite.to(imgTitle, 1, {opacity: 0});
        pages.style.display = 'flex';
        project.style.display = 'none';
    })
    nav[1].addEventListener('click', () => {
        pages.style.display = 'none';
        project.style.display = 'block';
        TweenLite.to(bar, 2, {opacity: 0.7});
        TweenLite.to(imgTitle, 1, {opacity: 1});
    })
}

let links = document.querySelectorAll('.btn').forEach( link => new TabLink(link));

