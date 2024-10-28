exports.Loginpage=
class Loginpage{


    constructor(page){
        this.page=page
        this.loginlink="//span[@id='nav-link-accountList-nav-line-1']"
        this.username="//input[@id='ap_email']"
        this.continue="//input[@id='continue']"
        this.password="//input[@id='ap_password']"
        this.signin="//input[@id='signInSubmit']"
    }

    async gotoLoginpage(){
        await this.page.goto('https://www.amazon.in/')

    }

    async login(username,password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.continue).click();
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.signin).click();
    }
}

