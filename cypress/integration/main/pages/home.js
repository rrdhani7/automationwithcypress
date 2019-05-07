const url = 'http://www.practiceselenium.com'
let element = require('../testdata/elements')

export function visit_home(){
    cy.visit(url)
    cy.url().should('contains', 'practiceselenium')
}

export function clickMenu(){
    cy.get(element.home.menu).click()
    cy.url().should('contains', 'menu.html')
}