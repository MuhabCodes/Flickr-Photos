import pytest
from pages.loginpage.loginpage import LoginPage
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
from info.info import TestData
from selenium.webdriver.common.keys import Keys


class TestLogin(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.loginPage = LoginPage(self.driver)
        self.loginPage.driver.maximize_window()
        yield
        self.loginPage.driver.quit()

    def test_signup_link(self, setup):
        if self.loginPage.element_clickable(self.loginPage.SIGNUP_LINK):
            self.loginPage.click_signup_link()
            sleep(5)
            assert self.loginPage.page_url() == TestData.SIGNUP_URL
            print("\nSign up link is enabled and redirects to sign up page")

    def test_help_link(self, setup):
        self.loginPage.click_help_link()
        self.driver.switch_to.window(self.driver.window_handles[1])
        assert self.loginPage.page_url() == TestData.HELP_URL
        print("\nHelp link opens help page")

    def test_privacy_link(self, setup):
        self.loginPage.click_privacy_link()
        self.driver.switch_to.window(self.driver.window_handles[1])
        assert self.loginPage.page_url() == TestData.PRIVACY_URL
        print("\nPrivacy link opens privacy page")

    def test_terms_link(self, setup):
        self.loginPage.click_terms_link()
        self.driver.switch_to.window(self.driver.window_handles[1])
        assert self.loginPage.page_url() == TestData.TERMS_URL
        print("\nTerms link opens terms page")

    def test_forgot_password1(self, setup):
        self.loginPage.clear_field(self.loginPage.EMAIL_FIELD)
        self.loginPage.fill_email_field("george_joseph99@hotmail.com")
        self.loginPage.click_next_button()
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD)
        self.loginPage.clear_field(self.loginPage.FORGOT_PASSWORD_EMAIL_FIELD)
        self.loginPage.send(self.loginPage.FORGOT_PASSWORD_EMAIL_FIELD,
                            "george_joseph@hotmail")
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD_SEND_EMAIL)
        sleep(2)
        assert self.loginPage.page_url() == TestData.FORGOT_PASSWORD_URL
        print("\nInvalid email")

    def test_forgot_password2(self, setup):
        self.loginPage.clear_field(self.loginPage.EMAIL_FIELD)
        self.loginPage.fill_email_field("george_joseph99@hotmail.com")
        self.loginPage.click_next_button()
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD)
        self.loginPage.clear_field(self.loginPage.FORGOT_PASSWORD_EMAIL_FIELD)
        self.loginPage.send(self.loginPage.FORGOT_PASSWORD_EMAIL_FIELD,
                            "george_joseph99@hotmail.com")
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD_SEND_EMAIL)
        sleep(2)
        assert self.loginPage.page_url() == TestData.CHECK_EMAIL_FORGOT_PASS_URL
        print("\nCorrect email and sends verification code")

    def test_login1(self, setup):
        print("\nCorrect email and pass")
        if self.loginPage.log_in("george_joseph99@hotmail.com", "ejnHG3v35gueXhE") == 1:
            assert self.loginPage.page_url() == TestData.MAIN_URL

    def test_login2(self, setup):
        print("\nIllogical email and clicking try again button")
        if self.loginPage.log_in("george_joseph", "123") == 0:
            self.loginPage.try_again_button()
            sleep(5)
            assert self.loginPage.page_url() == TestData.LOGIN_URL

    def test_login3(self, setup):
        print("\nIllogical email and using yahoo button to redirect")
        if self.loginPage.log_in("george_joseph", "123") == 0:
            self.loginPage.yahoo_button()
            sleep(2)
            assert TestData.YAHOO_REDIRECT_URL in self.loginPage.page_url()

    def test_login4(self, setup):
        print("\nWrong Password")
        if self.loginPage.log_in("george_joseph@hotmail.com", "123"):
            assert self.loginPage.page_url() == TestData.LOGIN_URL

    def test_login5(self, setup):
        print("\nBlank email")
        if self.loginPage.log_in("", "123"):
            assert self.loginPage.page_url() == TestData.LOGIN_URL

    def test_login6(self, setup):
        print("\nBlank password")
        if self.loginPage.log_in("george_joseph99@hotmail.com", ""):
            assert self.loginPage.page_url() == TestData.LOGIN_URL

    def test_login7(self, setup):
        print("\nIncorrect email")
        if self.loginPage.log_in("george_joseph99@homai.co", "ejnHG3v35gueXhE"):
            assert self.loginPage.page_url() == TestData.LOGIN_URL
