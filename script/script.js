function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.left = '0'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.left = '-80%'
}

const toggle_mode = document.querySelector('#toggle')

toggle_mode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if (toggle_mode.checked) {
        document.getElementById('about-img').src = 'assets/logo/pattern-dark.svg'
    } else {
        document.getElementById('about-img').src = 'assets/logo/pattern.svg'
    }
})

document.body.addEventListener("contextmenu", (e) => {

})

const popup = document.querySelector('.popup')
const err_popup = document.querySelector('.popup-err')

// function openPopUp() {
//     popup.classList.add('open-popup')
// }

function closePopUp() {
    popup.classList.remove('open-popup')
    err_popup.classList.remove('open-popup-err')
}


// -----------contact form---------------

let f_name = document.querySelector('#f-name')
let l_name = document.querySelector('#l-name')
let mail = document.querySelector('#mail')
let num = document.querySelector('#number')
let textarea = document.querySelector('#text-area')
let submit = document.querySelector("#form-submit")

// function openPopUp() {
//         popup.classList.add('open-popup')

// }

submit.addEventListener('click', (e) => {
    if (f_name.value == "" || l_name.value == "" || mail.value == "" || num.value == "" || textarea.value == "") {
        err_popup.classList.add('open-popup-err')
    }
    else {
        popup.classList.add('open-popup')
    }
})