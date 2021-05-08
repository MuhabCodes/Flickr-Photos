import pytest
from time import sleep
from pages.signuppage import SignUpPage
from webdriver_manager.chrome import ChromeDriverManager
from info.info import TestData
from selenium import webdriver


class TestSignUPage(object):
    @pytest.fixture()
    def setup(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())
        self.signupPage = SignUpPage(self.driver)
        self.signupPage.driver.maximize_window()
        yield
        self.signupPage.driver.quit()

    @pytest.mark.skip
    def test_register1(self, setup):
        print("\nAll info correct")
        self.signupPage.register("Abdelrahman", "Tarek", "21", "abdelrahman-tarek@outlook.com", "Qwerty1234567")
        self.signupPage.click_signup_button()
        sleep(5)

    def test_terms_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.TERMS_LINK, 2):
            self.signupPage.click_terms_link()
            self.driver.switch_to.window(self.driver.window_handles[1])
            sleep(5)
            assert self.signupPage.page_url() == TestData.TERMS_URL
            print("\nOpens Terms of services page in a new tab")

    def test_privacy_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.PRIVACY_LINK, 2):
            self.signupPage.click_privacy_link()
            self.driver.switch_to.window(self.driver.window_handles[1])
            sleep(5)
            assert self.signupPage.page_url() == TestData.PRIVACY_URL
            print("\nOpens Privacy Policy page in a new tab")

    def test_help_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.HELP_LINK, 2):
            self.signupPage.click_help_link()
            self.driver.switch_to.window(self.driver.window_handles[1])
            sleep(5)
            assert self.signupPage.page_url() == TestData.HELP_URL
            print("\nOpens Help page in a new tab")

    def test_login_link(self, setup):
        if self.signupPage.element_clickable(self.signupPage.LOGIN_LINK, 2):
            self.signupPage.click_login()
            sleep(5)
            assert self.signupPage.page_url() in TestData.LOGIN_URL
            print("\nOpens sign in page")
