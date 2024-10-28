exports.Cartpage=
class Cartpage{
   constructor(page){
    this.page=page
    this.producetopay="//input[@name='proceedToRetailCheckout']"
    this.addnewadress="//a[@id='add-new-address-popover-link']"
    this.name="//input[@id='address-ui-widgets-enterAddressFullName']"
    this.number="//input[@id='address-ui-widgets-enterAddressPhoneNumber']"
    this.pincode="//input[@id='address-ui-widgets-enterAddressPostalCode']"
    this.housenum="//input[@id='address-ui-widgets-enterAddressLine1']"
    this.adrees="//input[@id='address-ui-widgets-enterAddressLine2']"
    this.landmark="//input[@id='address-ui-widgets-landmark']";
    this.city="//input[@id='address-ui-widgets-enterAddressCity']"
    this.usethisadress="//input[@aria-labelledby='address-ui-widgets-form-submit-button-announce']"

   }

   async cart(name,number,pincode,housenum,address,landmark,city){

    await this.page.locator(this.producetopay).click()
    await this.page.locator(this.addnewadress).click()
    await this.page.locator( this.name).fill(name);
    await this.page.locator( this.number).fill(number);
    await this.page.locator( this.pincode).fill(pincode);
    await this.page.locator( this.housenum).fill(housenum);
    await this.page.locator(this.adrees).fill(address);
    await this.page.locator(  this.landmark).fill(landmark);
    await this.page.locator( this.city).fill(city);
    await this.page.locator(this.usethisadress).click()
   

   }
}