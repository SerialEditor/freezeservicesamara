let contacts = document.querySelector('.contacts');

contacts.onclick = function () {
    contacts.classList.toggle('contacts-open');
    contacts.classList.toggle('contacts-close');
};