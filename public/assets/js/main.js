const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
  skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)
    // remove all the qualification active first
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active')
    })
    // then add qualification__active to the one we need.
    target.classList.add('qualification__active')

    // first remove all the active class from tabs
    tabs.forEach((tab) => {
      tab.classList.remove('qualification__active')
    })

    // add active to the clicked tab.
    tab.classList.add('qualification__active')
  })
})

/*==================== NAV BAR SHOW AND OFF ====================*/
const myHeader = document.getElementById('header')
const myNav = document.getElementById('nav-container')
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY
  if (scrollPos > 0) {
    myHeader.classList.add('nav__scrolldown')
    myNav.classList.add('nav__scrolldown')
    myNav.classList.remove('nav__scrollZero')
  } else {
    myHeader.classList.remove('nav__scrolldown')
    myNav.classList.remove('nav__scrolldown')
    myNav.classList.add('nav__scrollZero')
  }
})
