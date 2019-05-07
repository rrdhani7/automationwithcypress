let home = require('../main/pages/home')
let menu = require('../main/pages/menu')
let checkout = require('../main/pages/checkout')
describe('Checkout with invalid email', function(){
    beforeEach(function(){
        cy.on('uncaught:exception', (err, runnable) => {
            return false
          })
    })
    it('Open Home Page', function(){
        home.visit_home()
    })
    it('Click Menu', function(){
        home.clickMenu()
    })
    it('Click Checkout Greantea', function(){
        menu.clickCheckoutGreenTea()
    })
    it('Fill Data and Place Order', function(){
        checkout.fillEmail('irfan@com')
        checkout.fillName('Irfan Hidayatullah')
        checkout.fillAddress('Jl. H. Dayat'),
        checkout.chooseCardType('Visa')
        checkout.fillCardNumber('123')
        checkout.fillCardholderName('Irfan')
    })
    it('Click Cancel', function(){
        checkout.clickCancel()
        menu.assertMenuPage()
    })
})