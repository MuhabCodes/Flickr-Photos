import pytest
from pages.loginpage.loginpage import LoginPage
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from time import sleep
from info.info import TestData


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

    def test_forgot_password1(self, setup):
        self.loginPage.clear_field(self.loginPage.EMAIL_FIELD)
        self.loginPage.fill_email_field("kennedi.vonrueden@yahoo.com")
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD)
        self.loginPage.clear_field(self.loginPage.EMAIL_FIELD)
        self.loginPage.send(self.loginPage.EMAIL_FIELD,
                            "kennedi.vonrueden")
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD_SEND_EMAIL)
        sleep(2)
        assert self.loginPage.page_url() == TestData.FORGOT_PASSWORD_URL
        print("\nInvalid email")

    def test_forgot_password2(self, setup):
        self.loginPage.clear_field(self.loginPage.EMAIL_FIELD)
        self.loginPage.fill_email_field("kennedi.vonrueden@yahoo.com")
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD)
        self.loginPage.clear_field(self.loginPage.EMAIL_FIELD)
        self.loginPage.send(self.loginPage.EMAIL_FIELD,
                            "kennedi.vonrueden@yahoo.com")
        self.loginPage.click(self.loginPage.FORGOT_PASSWORD_SEND_EMAIL)
        sleep(2)
        assert self.loginPage.page_url() == TestData.CHECK_EMAIL_FORGOT_PASS_URL
        print("\nCorrect email and sends verification code")

    def test_login1(self, setup):
        print("\nCorrect email and pass")
        self.loginPage.log_in("kennedi.vonrueden@yahoo.com", "12345678")
        sleep(5)
        assert self.loginPage.page_url() == TestData.MAIN_URL

    def test_login2(self, setup):
        print("\nIllogical email and clicking try again button")
        self.loginPage.log_in("kennedi.vonrueden", "123")
        sleep(5)
        assert self.loginPage.page_url() == TestData.LOGIN_URL

    def test_login3(self, setup):
        print("\nWrong Password")
        if self.loginPage.log_in("kennedi.vonrueden@yahoo.com", "123"):
            assert self.loginPage.page_url() == TestData.LOGIN_URL

    def test_login4(self, setup):
        print("\nBlank email")
        self.loginPage.log_in("", "123")
        assert self.loginPage.page_url() == TestData.LOGIN_URL

    def test_login5(self, setup):
        print("\nBlank password")
        self.loginPage.log_in("kennedi.vonrueden@yahoo.com", "")
        assert self.loginPage.page_url() == TestData.LOGIN_URL
