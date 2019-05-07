let element = require('../testdata/elements')

export function fillEmail(email){
    cy.get(element.checkout.email).type(email)
}

export function fillName(name){
    cy.get(element.checkout.name).type(name)
}

export function fillAddress(address){
    cy.get(element.checkout.address).type(address)
}

export function chooseCardType(card_type){
    cy.get(element.checkout.card_type).select(card_type)
}

export function fillCardNumber(card_number){
    cy.get(element.checkout.card_number).type(card_number)
}

export function fillCardholderName(cardholder_name){
    cy.get(element.checkout.cardholder_name).type(cardholder_name)
}

export function fillVerificationCode(verification_code){
    cy.get(element.checkout.verification_code).type(verification_code)
}

export function clickPlaceOrder(){
    cy.get(element.checkout.place_order).click()
}

export function assertSuccessCheckout(){
    cy.url().should('contains', 'menu.html')
}

export function assertFailedCheckout(){
    cy.url().then(url=>{
        assert.equal(url, 'http://practiceselenium.com/check-out.html', 'If checkout fail, we should stay in check-out.html')
    })
}

export function clickCancel(){
    cy.get(element.checkout.cancel).click()
}