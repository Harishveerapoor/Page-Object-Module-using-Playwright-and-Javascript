exports.Homepage=
class Homepage {

    constructor(page) {
        this.page=page
        this.search="//input[@id='twotabsearchtextbox']"
        this.gotosearch="//input[@value='Go']"
        this.addtocart="//button[@id='a-autoid-1-announce']"
        this.gotocart="//a[normalize-space()='Go to Cart']"

    }
    async Home(searchkey){
        await this.page.locator(this.search).fill(searchkey);
        await this.page.locator(this.gotosearch).click()
        await this.page.locator(this.addtocart).click()
        await this.page.locator(this.gotocart).click();

    }
}