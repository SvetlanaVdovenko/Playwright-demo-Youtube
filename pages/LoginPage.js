exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.userNameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async goToLoginPage() {
        await this.page.goto('https://demoblaze.com/index.html');
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}