// JS goes here
let nav = document.querySelectorAll('.nav');
let pages = document.querySelector('.pages');
let bar = document.querySelector('.nav-bar');
let project = document.querySelector('.projects');

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
                })
        // Add a class named "show" to this element 
        this.element.classList.add('show');
    }
}




for(let i = 0; i < nav.length; i++) {
    nav[i].addEventListener('click', () => {
        nav[0].classList.toggle('nav-hidden');
        nav[1].classList.toggle('nav-hidden');
        pages.style.display = 'flex';
        bar.style.opacity = '1';
        project.style.display = 'none';
    })
    nav[1].addEventListener('click', () => {
        pages.style.display = 'none';
        project.style.display = 'block';
    })
}

let links = document.querySelectorAll('.btn').forEach( link => new TabLink(link));