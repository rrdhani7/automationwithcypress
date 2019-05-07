let element = require('../testdata/elements')
export function clickCheckoutGreenTea(){
    cy.get(element.menu.greentea).click({timeout:2000})
    cy.url().should('contains', 'check-out.html')
}

export function assertMenuPage(){
    cy.url().should('contains','menu.html')
}