const GeneralHamburger = document.getElementById("hamburger");
const GeneralCloseIcon = document.getElementById("close-icon");
const nav = document.getElementsByTagName("nav")[0];

if (GeneralHamburger)
    GeneralHamburger.onclick = () => {
        nav.style.cssText += 'left: 0;';
        GeneralCloseIcon.style.display = 'block';
        GeneralHamburger.style.display = 'none';
    }

if (GeneralCloseIcon)
    GeneralCloseIcon.onclick = () => {
        nav.style.cssText += 'left: -300px;';
        GeneralCloseIcon.style.display = 'none';
        GeneralHamburger.style.display = 'block';
    }

function toggleDropdown(button) {

    button.querySelector('.drpdwn-rotate').classList.toggle('drpdwn-reverse');


    const dropdownOptions = button.nextElementSibling;
    dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
}

function copyToClipboard(copyButton) {

    const codeElement = copyButton.parentElement.nextElementSibling;

    const codeContent = codeElement.innerText;

    navigator.clipboard.writeText(codeContent).then(() => {
        copyButton.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO7k537XoHmEs0bFxPfElNxpMcOWOLFJo15I9xkhYP0bMw87wHi2ye4pDJilxd1zwyTo&usqp=CAU"
        setTimeout(() => {
            copyButton.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKvI3-iyFlIHsqo0THDckwV_EX-_qcRAjFM_s68VYQA&s"
        }, 2000);
    })
        .catch((error) => {
            console.error('Error copying code to clipboard:', error);
        });
}

function toggleDropdown(button) {

    button.querySelector('.drpdwn-rotate').classList.toggle('drpdwn-reverse');


    const dropdownOptions = button.nextElementSibling;
    dropdownOptions.style.display = dropdownOptions.style.display === 'none' ? 'block' : 'none';
}

const modal = document.getElementById('modal');
const modalForm = document.getElementById('modal-form');

const openModal = document.getElementById('modal-button');
const buttonForm = document.getElementById('modal-form-button');

const closeModal = document.getElementById('modal-close');
const closeForm = document.getElementById('modal-form-close');

const closeIcon = document.querySelector('.modal-open .bi');
const closeIconForm = document.getElementById('closeIconForm');

if (openModal)
    openModal.addEventListener('click', () => {
        modal.showModal();
    })

if (buttonForm)
    buttonForm.addEventListener('click', () => {
        modalForm.showModal();
    })
if (closeModal)
    closeModal.addEventListener('click', () => {
        modal.close();
    })
if (closeForm)
    closeForm.addEventListener('click', () => {
        modalForm.close();
    })
if (closeIcon)
    closeIcon.addEventListener('click', () => {
        modal.close();
    })

if (closeIconForm)
    closeIconForm.addEventListener('click', () => {
        modalForm.close();
    })



