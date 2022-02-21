// nav menu populator
// take a list of dom elements and add them to the nav bar
// find all article titles by class name
const navBar = document.getElementById('nav-bar')
const navBtn = document.getElementById('nav-btn')
const navMenuPopulator = () => {
let titleArray = Array.from(document.getElementsByClassName('article-title'))
// create loop to append each to nav bar

titleArray.forEach(el => {

    let navLink = document.createElement('a')
    let menuDiv = document.createElement('div');
    let menuText = document.createElement('p');
    navLink.appendChild(menuDiv)
    menuDiv.appendChild(menuText)
    menuDiv.classList.add('nav-link')
    menuText.classList.add('nav-text')
    menuText.innerText = el.innerText
    navLink.setAttribute('href', el.parentElement.parentElement.attributes.href.nodeValue)
    navBar.appendChild(navLink)
// add link to article
})
}
// create function for toggling active nav menu
const toggleNavBar = () =>{
navBar.classList.toggle('visible')
navBtn.classList.toggle('active-btn')
document.querySelector('main').classList.toggle('dim')
// create active nav menu class
// toggle this on click of menu button and rotate button
}
navMenuPopulator()
navBtn.onclick = toggleNavBar